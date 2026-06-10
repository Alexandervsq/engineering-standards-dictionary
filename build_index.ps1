# =============================================================
# Engineering Standards Dictionary - Index Builder
# =============================================================
# Scans the Engineering Standards folder, extracts text from
# each PDF (first $MaxPages pages), and generates standards_data.js
# used by the website for full-text search.
#
# Prerequisites: pdftotext.exe from Git/poppler
# Run: .\build_index.ps1
# =============================================================

param(
    [string]$StandardsRoot = "C:\Users\cader\OneDrive\Desktop\Alexander\Engineering Standards",
    [string]$OutputFile    = ".\standards_data.js",
    [string]$PdfToText     = "C:\Program Files\Git\mingw64\bin\pdftotext.exe",
    [int]   $MaxPages      = 60,
    [int]   $ChunkWords    = 250
)

if (-not (Test-Path $PdfToText)) {
    Write-Error "pdftotext not found at $PdfToText"; exit 1
}
if (-not (Test-Path $StandardsRoot)) {
    Write-Error "Standards root not found: $StandardsRoot"; exit 1
}

Write-Host "`n=== Engineering Standards Dictionary - Index Builder ===" -ForegroundColor Cyan
Write-Host "Scanning: $StandardsRoot" -ForegroundColor Yellow

$pdfs = Get-ChildItem -Path $StandardsRoot -Include "*.pdf" -Recurse -ErrorAction SilentlyContinue
Write-Host "Found $($pdfs.Count) PDF files." -ForegroundColor Green

function Get-StandardCategory($path) {
    if ($path -like "*SNI*")                                        { return "SNI" }
    if ($path -like "*America*" -or $path -like "*American*")       { return "American" }
    if ($path -like "*GB*" -or $path -like "*Chinese*")             { return "Chinese" }
    return "Other"
}

function Get-StandardCode($filename) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    # Try to extract standard code from common naming patterns
    if ($name -match '(SNI\s*[\d\-:]+[\d]+)') { return $Matches[1] }
    if ($name -match '(ACI\s*[\d]+)') { return $Matches[1] }
    if ($name -match '(AISC\s*[\d\-]+)') { return $Matches[1] }
    if ($name -match '(ASCE\s*[\d\-]+)') { return $Matches[1] }
    if ($name -match '(ASTM\s*[A-Z]+[\d]+)') { return $Matches[1] }
    if ($name -match '(GB\s*[\d\-]+)') { return $Matches[1] }
    if ($name -match '(JGJ\s*[\d\-]+)') { return $Matches[1] }
    if ($name -match '(IBC\s*[\d]+)') { return $Matches[1] }
    return $name.Substring(0, [Math]::Min(40, $name.Length))
}

function Escape-Json($str) {
    $str = $str -replace '\\', '\\\\'
    $str = $str -replace '"',  '\"'
    $str = $str -replace "`r`n", '\n'
    $str = $str -replace "`n", '\n'
    $str = $str -replace "`t", ' '
    return $str
}

$allChunks  = [System.Collections.Generic.List[string]]::new()
$stdMeta    = [System.Collections.Generic.List[string]]::new()
$processed  = 0
$errors     = 0

foreach ($pdf in $pdfs) {
    $relPath  = $pdf.FullName.Replace($StandardsRoot, "").TrimStart('\/')
    $category = Get-StandardCategory($pdf.FullName)
    $code     = Get-StandardCode($pdf.Name)
    $stdId    = ($code -replace '[^a-zA-Z0-9]', '-').ToLower()
    $tempFile = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "$stdId-extract.txt")

    Write-Host "  [$($processed+1)/$($pdfs.Count)] $code" -NoNewline

    try {
        # Use & call operator (more reliable than Start-Process for piped tools)
        $null = & $PdfToText -f 1 -l $MaxPages -enc UTF-8 $pdf.FullName $tempFile 2>$null

        if ((Test-Path $tempFile) -and (Get-Item $tempFile).Length -gt 100) {
            $raw   = [System.IO.File]::ReadAllText($tempFile, [System.Text.Encoding]::UTF8)
            $words = $raw -split '\s+' | Where-Object { $_.Length -gt 0 }
            $total = $words.Count
            Write-Host " ($total words)" -ForegroundColor Green

            $stdMeta.Add("{`"id`":`"$stdId`",`"code`":`"$(Escape-Json $code)`",`"file`":`"$(Escape-Json $pdf.Name)`",`"path`":`"$(Escape-Json $relPath)`",`"category`":`"$category`",`"words`":$total}")

            for ($i = 0; $i -lt $words.Count; $i += $ChunkWords) {
                $end   = [Math]::Min($i + $ChunkWords - 1, $words.Count - 1)
                $chunk = $words[$i..$end] -join ' '
                $safe  = Escape-Json $chunk
                $pg    = [Math]::Floor($i / 300) + 1
                $allChunks.Add("{`"sid`":`"$stdId`",`"cat`":`"$category`",`"code`":`"$(Escape-Json $code)`",`"pg`":$pg,`"t`":`"$safe`"}")
            }
            $processed++
        } else {
            Write-Host " (extract empty — skipped)" -ForegroundColor DarkYellow
            $errors++
        }
    } catch {
        Write-Host " (ERROR: $_)" -ForegroundColor Red
        $errors++
    } finally {
        if (Test-Path $tempFile) { Remove-Item $tempFile -Force -ErrorAction SilentlyContinue }
    }
}

# Write output file (UTF-8 BOM for PowerShell 5.1 compatibility)
$sb = [System.Text.StringBuilder]::new()
$null = $sb.AppendLine("// Engineering Standards Dictionary — Dynamic Index")
$null = $sb.AppendLine("// Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')")
$null = $sb.AppendLine("// Standards processed: $processed  (errors: $errors)")
$null = $sb.AppendLine("window.DYNAMIC_INDEX = {")
$null = $sb.AppendLine("  standards: [")
$null = $sb.Append("    ")
$null = $sb.AppendLine(($stdMeta -join ",`n    "))
$null = $sb.AppendLine("  ],")
$null = $sb.AppendLine("  chunks: [")
$null = $sb.Append("    ")
$null = $sb.AppendLine(($allChunks -join ",`n    "))
$null = $sb.AppendLine("  ]")
$null = $sb.AppendLine("};")
$null = $sb.AppendLine("if (window._indexReady) window._indexReady();")

$bom     = [byte[]](0xEF, 0xBB, 0xBF)
$content = [System.Text.Encoding]::UTF8.GetBytes($sb.ToString())
$bytes   = $bom + $content
[System.IO.File]::WriteAllBytes((Resolve-Path (Split-Path $OutputFile) | Select-Object -Expand Path) + "\" + (Split-Path $OutputFile -Leaf), $bytes)

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "Output:     $OutputFile" -ForegroundColor White
Write-Host "Standards:  $processed processed, $errors skipped" -ForegroundColor White
Write-Host "Chunks:     $($allChunks.Count) text segments indexed" -ForegroundColor White
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. Open index.html in browser (local) — search works immediately"
Write-Host "  2. Deploy to GitHub Pages for public access (see README inside index.html)"
