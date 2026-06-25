// ================================================================
// Engineering Standards Dictionary — Q&A Knowledge Cards
// Curated, structured answers authored from the standards documents:
// SNI (Indonesian) · ACI/AISC/ASCE/ASTM/IBC (American) · GB/JGJ (Chinese)
// Each card: keywords (en/id + zh) -> point-form tri-standard answer.
// ================================================================
window.QA_CARDS=[

{id:"rebar-min-beam",
 kw:["minimum reinforcement beam","min reinforcement","minimum reinforcement","reinforcement bar minimum","minimum rebar","rebar minimum","as min","as,min","tulangan minimum","rasio tulangan","flexural reinforcement minimum","minimum flexural"],
 kw_zh:["最小配筋","最小配筋率","梁最小配筋","纵筋最小"],
 en:{title:"Minimum Flexural Reinforcement — Beams",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §9.6.1",pts:[
    "As,min = greater of <code>0.25·√fc′/fy·bw·d</code> and <code>1.4/fy·bw·d</code>",
    "Example fc′ = 25 MPa, fy = 420 MPa → As,min = <strong>0.33%·bw·d</strong> (1.4/fy governs up to fc′ ≈ 31 MPa)",
    "Waiver: not required if As provided ≥ 4/3 × As from analysis (§9.6.1.3)",
    "Statically determinate T-beam, flange in tension: replace bw with min(2bw, flange width)"]},
   {h:"🇺🇸 ACI 318-19 §9.6.1",pts:[
    "Identical to SNI (SNI 2847 is the adoption of ACI 318): As,min = max(0.25√fc′/fy , 1.4/fy)·bw·d",
    "In inch-pound units: max(3√fc′/fy , 200/fy)·bw·d"]},
   {h:"🇨🇳 GB 50010-2010 §8.5.1",pts:[
    "ρmin = larger of <code>0.20%</code> and <code>45·ft/fy (%)</code>, applied to full section b·h",
    "C30 + HRB400 (ft = 1.43, fy = 360 MPa): 45×1.43/360 = 0.18% → <strong>0.20% governs</strong>",
    "Seismic frame beams (GB 50011 §6.3.4): beam-end tension ρmin = 0.40% (Grade I), 0.30% (Grade II–III)"]}],
  src:"SNI 2847:2019 §9.6.1 · ACI 318-19 §9.6.1 · GB 50010-2010 表8.5.1 · GB 50011-2010 §6.3"},
 zh:{title:"梁最小受弯配筋",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §9.6.1（印尼）",pts:[
    "As,min = <code>0.25·√fc′/fy·bw·d</code> 与 <code>1.4/fy·bw·d</code> 取大值",
    "例 fc′=25 MPa、fy=420 MPa → As,min = <strong>0.33%·bw·d</strong>（fc′≈31 MPa 以下由 1.4/fy 控制）",
    "豁免：实配 As ≥ 4/3 × 计算 As 时可不满足（§9.6.1.3）",
    "翼缘受拉的静定 T 梁：bw 取 min(2bw, 翼缘宽)"]},
   {h:"🇺🇸 ACI 318-19 §9.6.1（美国）",pts:[
    "与 SNI 完全相同（SNI 2847 即 ACI 318 的采标）：As,min = max(0.25√fc′/fy , 1.4/fy)·bw·d"]},
   {h:"🇨🇳 GB 50010-2010 §8.5.1（中国）",pts:[
    "ρmin = <code>0.20%</code> 与 <code>45·ft/fy (%)</code> 取大值，按全截面 b·h",
    "C30 + HRB400（ft=1.43、fy=360）：45×1.43/360=0.18% → <strong>0.20% 控制</strong>",
    "抗震框架梁（GB 50011 §6.3.4）：梁端受拉 ρmin：一级 0.40%，二三级 0.30%"]}],
  src:"SNI 2847:2019 §9.6.1 · ACI 318-19 §9.6.1 · GB 50010-2010 表8.5.1 · GB 50011-2010 §6.3"}},

{id:"rebar-min-slab",
 kw:["minimum reinforcement slab","slab reinforcement","shrinkage temperature","shrinkage reinforcement","temperature reinforcement","tulangan susut","tulangan pelat","slab rebar"],
 kw_zh:["板配筋","板最小配筋","温度筋","分布筋"],
 en:{title:"Minimum Reinforcement — Slabs (Shrinkage & Temperature)",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §24.4 / 🇺🇸 ACI 318-19 §24.4",pts:[
    "Deformed bars fy = 420 MPa: As,min = <strong>0.0018·Ag</strong> (gross section)",
    "fy = 280–350 MPa: As,min = 0.0020·Ag; fy > 420: 0.0018×420/fy ≥ 0.0014",
    "Max spacing: lesser of <strong>5h and 450 mm</strong> (flexural bars: 3h, 450 mm)",
    "Example 120 mm slab: As,min = 216 mm²/m → D10-300 (262 mm²/m) ✓"]},
   {h:"🇨🇳 GB 50010-2010 §8.5.1 & §9.1",pts:[
    "Flexural slab bars: ρmin = larger of <strong>0.15%</strong> and 0.45·ft/fy",
    "Distribution (secondary) bars: ≥ 15% of main bars and ≥ 0.15%; spacing ≤ 250 mm",
    "Main bar spacing: ≤ 200 mm (h ≤ 150 mm); ≤ min(1.5h, 250 mm) for thicker slabs"]}],
  src:"SNI 2847:2019 §24.4 · ACI 318-19 Table 24.4.3.2 · GB 50010-2010 §8.5.1, §9.1.3–9.1.7"},
 zh:{title:"板最小配筋（收缩与温度）",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §24.4 / 🇺🇸 ACI 318-19 §24.4",pts:[
    "带肋钢筋 fy=420 MPa：As,min = <strong>0.0018·Ag</strong>（毛截面）",
    "fy=280–350 MPa：0.0020·Ag；fy>420：0.0018×420/fy ≥ 0.0014",
    "最大间距：<strong>5h 与 450 mm</strong> 取小（受弯主筋：3h、450 mm）",
    "例 120 mm 板：As,min=216 mm²/m → D10-300（262 mm²/m）✓"]},
   {h:"🇨🇳 GB 50010-2010 §8.5.1 与 §9.1",pts:[
    "板受弯钢筋：ρmin = <strong>0.15%</strong> 与 0.45·ft/fy 取大值",
    "分布筋：≥ 主筋 15% 且 ≥ 0.15%；间距 ≤ 250 mm",
    "主筋间距：h≤150 时 ≤200 mm；更厚板 ≤ min(1.5h, 250 mm)"]}],
  src:"SNI 2847:2019 §24.4 · ACI 318-19 表24.4.3.2 · GB 50010-2010 §8.5.1、§9.1.3–9.1.7"}},

{id:"rebar-min-column",
 kw:["column reinforcement","minimum reinforcement column","column rebar","longitudinal reinforcement column","tulangan kolom","column steel ratio"],
 kw_zh:["柱配筋","柱最小配筋","柱纵筋"],
 en:{title:"Longitudinal Reinforcement Limits — Columns",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §10.6.1 / 🇺🇸 ACI 318-19",pts:[
    "<strong>0.01·Ag ≤ Ast ≤ 0.08·Ag</strong> (1% – 8% of gross area)",
    "Practical cap ≈ 4% where bars are lap-spliced (congestion)",
    "Minimum 4 bars in rectangular ties, 6 bars in spirals; tie φ ≥ 10 mm for D32 and smaller"]},
   {h:"🇨🇳 GB 50010-2010 表8.5.1 / GB 50011-2010 表6.3.7-1",pts:[
    "Non-seismic: total ρmin = <strong>0.55%</strong> (500 MPa), 0.60% (400 MPa), 0.65% (335 MPa); each face ≥ 0.20%",
    "Seismic frame columns (HRB400): middle/side columns ρmin = 0.9% (Gr.I), 0.7% (II), 0.6% (III–IV); corner columns +0.1%",
    "Maximum total: ≤ 5%; axial-compression-ratio limits also govern section size"]}],
  src:"SNI 2847:2019 §10.6.1.1 · ACI 318-19 §10.6.1.1 · GB 50010-2010 表8.5.1 · GB 50011-2010 表6.3.7-1"},
 zh:{title:"柱纵向钢筋限值",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §10.6.1 / 🇺🇸 ACI 318-19",pts:[
    "<strong>0.01·Ag ≤ Ast ≤ 0.08·Ag</strong>（毛截面 1%–8%）",
    "搭接区实际上限约 4%（避免钢筋拥挤）",
    "矩形箍最少 4 根、螺旋箍最少 6 根纵筋；D32 及以下箍筋 φ≥10 mm"]},
   {h:"🇨🇳 GB 50010-2010 表8.5.1 / GB 50011-2010 表6.3.7-1",pts:[
    "非抗震：全部纵筋 ρmin = <strong>0.55%</strong>（500 级）、0.60%（400 级）、0.65%（335 级）；每侧 ≥0.20%",
    "抗震框架柱（HRB400）：中柱边柱 ρmin：一级 0.9%、二级 0.7%、三四级 0.6%；角柱 +0.1%",
    "总配筋率 ≤5%；轴压比限值同时控制截面"]}],
  src:"SNI 2847:2019 §10.6.1.1 · ACI 318-19 §10.6.1.1 · GB 50010-2010 表8.5.1 · GB 50011-2010 表6.3.7-1"}},

{id:"development-length",
 kw:["development length","anchorage length","embedment length","panjang penyaluran","ld","bar anchorage","anchorage of reinforcement"],
 kw_zh:["锚固长度","锚固","钢筋锚固"],
 en:{title:"Development (Anchorage) Length of Deformed Bars",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §25.4 / 🇺🇸 ACI 318-19 Table 25.4.2.3",pts:[
    "Simplified, fy = 420 MPa, normal concrete: <strong>D19 & smaller: ld = (fy·ψt·ψe)/(2.1·λ·√fc′)·db</strong>; D22+: divide by 1.7 instead",
    "fc′ = 25 MPa bottom bars: ld ≈ <strong>40db</strong> (D19−), ≈ 49db (D22+)",
    "Top bars (>300 mm fresh concrete below): × 1.3 · Epoxy-coated: × 1.2–1.5",
    "Standard 90° hook: ldh = (0.24·fy·ψ/λ√fc′)·db ≈ 20db (fc′25, fy420), min 8db, 150 mm"]},
   {h:"🇨🇳 GB 50010-2010 §8.3",pts:[
    "Basic: <strong>lab = α·(fy/ft)·d</strong>, α = 0.14 ribbed bars",
    "C30 + HRB400: lab = 0.14×360/1.43×d ≈ <strong>35d</strong>; la = ζa·lab (ζa: top-cast ×1.1, epoxy ×1.25 …)",
    "Seismic: laE = ζaE·la; ζaE = 1.15 (Grades I–II), 1.05 (III), 1.0 (IV)",
    "Minimum la ≥ 0.6·lab and ≥ 200 mm"]}],
  src:"SNI 2847:2019 §25.4 · ACI 318-19 §25.4.2, Table 25.4.3.1 (hooks) · GB 50010-2010 §8.3.1–8.3.3 · GB 50011 §6.1"},
 zh:{title:"带肋钢筋锚固（受拉锚固长度）",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §25.4 / 🇺🇸 ACI 318-19 表25.4.2.3",pts:[
    "简化式（fy=420、普通混凝土）：<strong>D19 及以下：ld=(fy·ψt·ψe)/(2.1·λ·√fc′)·db</strong>；D22 以上分母改 1.7",
    "fc′=25 底部钢筋：ld ≈ <strong>40db</strong>（D19−），≈49db（D22+）",
    "顶部钢筋（下方新浇混凝土>300 mm）×1.3；环氧涂层 ×1.2–1.5",
    "90° 标准弯钩：ldh ≈ 20db（fc′25、fy420），且 ≥8db、≥150 mm"]},
   {h:"🇨🇳 GB 50010-2010 §8.3",pts:[
    "基本锚固：<strong>lab = α·(fy/ft)·d</strong>，带肋筋 α=0.14",
    "C30+HRB400：lab ≈ <strong>35d</strong>；la = ζa·lab（顶部 ×1.1、环氧 ×1.25 等）",
    "抗震：laE = ζaE·la；ζaE：一二级 1.15、三级 1.05、四级 1.0",
    "la ≥ 0.6·lab 且 ≥ 200 mm"]}],
  src:"SNI 2847:2019 §25.4 · ACI 318-19 §25.4.2、表25.4.3.1（弯钩） · GB 50010-2010 §8.3.1–8.3.3 · GB 50011 §6.1"}},

{id:"lap-splice",
 kw:["lap splice","splice length","lap length","sambungan lewatan","panjang lewatan","bar splice","rebar splice"],
 kw_zh:["搭接","搭接长度","钢筋搭接"],
 en:{title:"Lap Splice Length of Deformed Bars",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §25.5 / 🇺🇸 ACI 318-19",pts:[
    "Tension <strong>Class B (most cases): lst = 1.3·ld ≥ 300 mm</strong>",
    "Class A (1.0·ld): only when As provided ≥ 2× required AND ≤ 50% spliced at one location",
    "fc′25/fy420 example: Class B ≈ 52db (D19−) · Compression splice: 0.071·fy·db ≈ 30db (fy420)",
    "D36+ bars: lap splices not permitted — use mechanical/welded couplers"]},
   {h:"🇨🇳 GB 50010-2010 §8.4",pts:[
    "<strong>ll = ζl·la</strong>; ζl by % spliced in one zone: ≤25% → 1.2, 50% → 1.4, 100% → 1.6",
    "ll ≥ 300 mm; seismic: llE = ζl·laE",
    "Beam/column longitudinal bars: spliced fraction ≤ 50% in one zone (seismic members)",
    "d > 28 mm: mechanical couplers recommended; d > 32: lap splice not allowed in compression? — use couplers per practice"]}],
  src:"SNI 2847:2019 §25.5.2 · ACI 318-19 Table 25.5.2.1 · GB 50010-2010 §8.4.3–8.4.4 表8.4.4"},
 zh:{title:"带肋钢筋搭接长度",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §25.5 / 🇺🇸 ACI 318-19",pts:[
    "受拉 <strong>B 类（多数情况）：lst = 1.3·ld ≥ 300 mm</strong>",
    "A 类（1.0·ld）：仅当实配 ≥2× 计算值且同一截面搭接 ≤50%",
    "fc′25/fy420 例：B 类 ≈52db（D19−）；受压搭接 0.071·fy·db ≈ 30db",
    "D36 以上不允许搭接 — 采用机械连接或焊接"]},
   {h:"🇨🇳 GB 50010-2010 §8.4",pts:[
    "<strong>ll = ζl·la</strong>；同区段搭接率：≤25% → ζl=1.2、50% → 1.4、100% → 1.6",
    "ll ≥ 300 mm；抗震：llE = ζl·laE",
    "抗震构件梁柱纵筋同一区段搭接率 ≤50%",
    "d>28 mm 宜用机械连接"]}],
  src:"SNI 2847:2019 §25.5.2 · ACI 318-19 表25.5.2.1 · GB 50010-2010 §8.4.3–8.4.4 表8.4.4"}},

{id:"stirrup-shear",
 kw:["stirrup","shear reinforcement","stirrup spacing","hoop spacing","sengkang","jarak sengkang","transverse reinforcement","shear links","confinement"],
 kw_zh:["箍筋","箍筋间距","加密区","抗剪钢筋"],
 en:{title:"Stirrups / Hoops — Minimums & Spacing",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 / 🇺🇸 ACI 318-19",pts:[
    "Min shear steel (where Vu > 0.5φVc): <strong>Av/s = max(0.062√fc′·bw/fyt , 0.35·bw/fyt)</strong>",
    "Spacing: ≤ d/2 ≤ 600 mm (≤ d/4 ≤ 300 mm where Vs > 0.33√fc′·bw·d)",
    "Seismic SRPMK beam ends (2h zone): s ≤ min(<strong>d/4, 6db, 150 mm</strong>); first hoop ≤ 50 mm from face",
    "SRPMK column confinement Lo: s ≤ min(b/4, 6db, so = 100–150 mm)"]},
   {h:"🇨🇳 GB 50010-2010 §9.2 / GB 50011-2010 §6.3",pts:[
    "Min ratio: <strong>ρsv = Asv/(b·s) ≥ 0.24·ft/fyv</strong> (0.28·ft/fyv seismic frame beams)",
    "Max spacing (non-seismic, V > 0.7ftbh0): h=300–500: 200 mm; 500–800: 250 mm",
    "Seismic beam-end densified zone (1.5hb–2hb): s ≤ min(<strong>hb/4, 8d, 100 mm</strong>) Grade I; min(hb/4, 8d, 150) for II–III; hoop φ ≥ 8–10 mm",
    "Column densified zone: s ≤ min(6d, 100 mm) Grade I; 8d/100 II; volumetric ratio ρv per λv table"]}],
  src:"SNI 2847:2019 §9.6.3, §18.6–18.7 · ACI 318-19 同 · GB 50010-2010 §9.2.9 · GB 50011-2010 §6.3.3–6.3.9"},
 zh:{title:"箍筋 — 最小用量与间距",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 / 🇺🇸 ACI 318-19",pts:[
    "最小抗剪箍筋（Vu>0.5φVc 时）：<strong>Av/s = max(0.062√fc′·bw/fyt , 0.35·bw/fyt)</strong>",
    "间距 ≤ d/2 且 ≤600 mm（Vs>0.33√fc′·bw·d 时 ≤d/4、≤300）",
    "SRPMK 梁端加密区（2h）：s ≤ min(<strong>d/4、6db、150 mm</strong>)；首箍距柱面 ≤50 mm",
    "SRPMK 柱加密区 Lo：s ≤ min(b/4、6db、100–150 mm)"]},
   {h:"🇨🇳 GB 50010-2010 §9.2 / GB 50011-2010 §6.3",pts:[
    "最小配箍率：<strong>ρsv ≥ 0.24·ft/fyv</strong>（抗震框架梁 0.28·ft/fyv）",
    "非抗震最大间距（V>0.7ftbh0）：h=300–500：200 mm；500–800：250 mm",
    "抗震梁端加密区（1.5–2hb）：一级 s ≤ min(<strong>hb/4、8d、100</strong>)；二三级 min(hb/4、8d、150)；箍径 ≥8–10 mm",
    "柱加密区：一级 s ≤ min(6d、100)；二级 8d/100；体积配箍率按 λv 表"]}],
  src:"SNI 2847:2019 §9.6.3、§18.6–18.7 · ACI 318-19 · GB 50010-2010 §9.2.9 · GB 50011-2010 §6.3.3–6.3.9"}},

{id:"concrete-grade",
 kw:["concrete grade","concrete class","concrete strength","mutu beton","kelas beton","k300","k250","k350","cylinder cube","fc conversion","cube strength","compressive strength concrete"],
 kw_zh:["混凝土强度","强度等级","立方体强度","换算"],
 en:{title:"Concrete Strength Classes & Conversions",
  sections:[
   {h:"⚖ Cylinder (SNI/ACI fc′) vs Cube (GB fcu,k)",pts:[
    "<strong>fc′ ≈ 0.79 × fcu,k</strong> (150 mm cube) → C30 ≈ fc′ 24 MPa; C40 ≈ 32 MPa",
    "Old Indonesian K-grade (kg/cm², cube): <strong>fc′ ≈ 0.083 × K</strong> → K300 ≈ fc′ 25 MPa; K350 ≈ 29; K400 ≈ 33",
    "GB design value fc = fck/1.4 (material factor γc); ACI/SNI apply φ on strength side instead"]},
   {h:"📋 Minimums by use",pts:[
    "SNI/ACI structural min fc′ = 17 MPa; <strong>seismic special frames (SRPMK/SMF) ≥ 28 MPa</strong>; precast 35; prestressed 41",
    "GB: plain ≥ C15; RC ≥ <strong>C20 (C25 with HRB400+)</strong>; seismic Grade I frames ≥ C30; prestressed ≥ C40",
    "Full C15–C80 fck/fc/ft/Ec table → see the Concrete module below"]}],
  src:"SNI 2847:2019 §19.2 · ACI 318-19 Table 19.2.1.1 · GB 50010-2010 §3.5, 表4.1.3 · PBI-71 (K-grades, historical)"},
 zh:{title:"混凝土强度等级与换算",
  sections:[
   {h:"⚖ 圆柱体（SNI/ACI fc′）与立方体（GB fcu,k）",pts:[
    "<strong>fc′ ≈ 0.79 × fcu,k</strong>（150 mm 立方体）→ C30 ≈ fc′24 MPa；C40 ≈ 32 MPa",
    "印尼旧 K 标号（kg/cm² 立方体）：<strong>fc′ ≈ 0.083×K</strong> → K300≈25 MPa；K350≈29；K400≈33",
    "GB 设计值 fc = fck/1.4（材料分项系数）；ACI/SNI 在抗力侧用 φ 系数"]},
   {h:"📋 按用途最低等级",pts:[
    "SNI/ACI 结构最低 fc′=17 MPa；<strong>抗震特殊框架 ≥28 MPa</strong>；预制 35；预应力 41",
    "GB：素混凝土 ≥C15；钢筋混凝土 ≥<strong>C20（配 HRB400 时 ≥C25）</strong>；一级抗震框架 ≥C30；预应力 ≥C40",
    "C15–C80 完整 fck/fc/ft/Ec 表 → 见下方混凝土模块"]}],
  src:"SNI 2847:2019 §19.2 · ACI 318-19 表19.2.1.1 · GB 50010-2010 §3.5、表4.1.3 · PBI-71（K 标号，历史）"}},

{id:"elastic-modulus",
 kw:["modulus of elasticity","elastic modulus","young modulus","modulus elastisitas","ec concrete","stiffness concrete"],
 kw_zh:["弹性模量","混凝土弹性模量"],
 en:{title:"Modulus of Elasticity",
  sections:[
   {h:"Concrete",pts:[
    "🇮🇩🇺🇸 SNI 2847/ACI 318: <strong>Ec = 4700·√fc′ MPa</strong> (normal weight); general: 0.043·wc^1.5·√fc′",
    "fc′25 → 23.5 GPa; fc′30 → 25.7 GPa; fc′40 → 29.7 GPa",
    "🇨🇳 GB 50010 表4.1.5: C25→28.0, C30→30.0, C35→31.5, C40→32.5, C50→34.5 GPa (Ec=100/(2.2+34.7/fcu,k))"]},
   {h:"Steel & rebar",pts:[
    "Structural steel & rebar all systems: <strong>Es = 200,000 MPa</strong> (GB: 206,000 for sections, 200,000 rebar)",
    "Prestressing strand: Ep ≈ 195,000–197,000 MPa"]}],
  src:"SNI 2847:2019 §19.2.2 · ACI 318-19 §19.2.2.1 · GB 50010-2010 表4.1.5, §4.2.5 · GB 50017-2017 §4.4"},
 zh:{title:"弹性模量",
  sections:[
   {h:"混凝土",pts:[
    "🇮🇩🇺🇸 SNI 2847/ACI 318：<strong>Ec = 4700·√fc′ MPa</strong>（普通混凝土）；通式 0.043·wc^1.5·√fc′",
    "fc′25 → 23.5 GPa；fc′30 → 25.7；fc′40 → 29.7",
    "🇨🇳 GB 50010 表4.1.5：C25→28.0、C30→30.0、C35→31.5、C40→32.5、C50→34.5 GPa（Ec=100/(2.2+34.7/fcu,k)）"]},
   {h:"钢材与钢筋",pts:[
    "三体系钢筋/型钢：<strong>Es = 200,000 MPa</strong>（GB 型钢 206,000、钢筋 200,000）",
    "预应力钢绞线：Ep ≈ 195,000–197,000 MPa"]}],
  src:"SNI 2847:2019 §19.2.2 · ACI 318-19 §19.2.2.1 · GB 50010-2010 表4.1.5、§4.2.5 · GB 50017-2017 §4.4"}},

{id:"crack-width",
 kw:["crack width","cracking limit","lebar retak","crack control","allowable crack"],
 kw_zh:["裂缝","裂缝宽度","最大裂缝"],
 en:{title:"Allowable Crack Width (Serviceability)",
  sections:[
   {h:"🇨🇳 GB 50010-2010 表3.4.5 (explicit limits, RC)",pts:[
    "Environment I (indoor dry): <strong>wlim = 0.30 mm</strong> (0.40 where appearance not critical)",
    "Environment IIa/IIb (outdoor, humid): <strong>0.20 mm</strong>; III (marine/de-icing): 0.20 mm with stricter cover",
    "Computed by GB §7.1 formula wmax = αcr·ψ·σs/Es·(1.9cs+0.08deq/ρte)"]},
   {h:"🇮🇩🇺🇸 SNI 2847 / ACI 318 (implicit control)",pts:[
    "No explicit width limit — controlled via <strong>bar spacing s ≤ 380·(280/fs) − 2.5cc ≤ 300·(280/fs)</strong>",
    "ACI 224R guide values: 0.41 mm (dry air) · 0.30 mm (humid) · 0.15 mm (seawater) · 0.10 mm (water-retaining)",
    "Liquid-retaining structures: ACI 350 / SNI practice → design crack width ≤ <strong>0.25 mm</strong>"]}],
  src:"GB 50010-2010 表3.4.5, §7.1 · SNI 2847:2019 §24.3 · ACI 318-19 §24.3.2 · ACI 224R-01 · ACI 350-20"},
 zh:{title:"最大裂缝宽度限值（正常使用）",
  sections:[
   {h:"🇨🇳 GB 50010-2010 表3.4.5（钢筋混凝土显式限值）",pts:[
    "一类环境（室内干燥）：<strong>wlim = 0.30 mm</strong>（无观感要求可 0.40）",
    "二a/二b 类（室外、潮湿）：<strong>0.20 mm</strong>；三类（海洋/除冰盐）：0.20 mm 且保护层加严",
    "按 §7.1 公式计算 wmax = αcr·ψ·σs/Es·(1.9cs+0.08deq/ρte)"]},
   {h:"🇮🇩🇺🇸 SNI 2847 / ACI 318（隐式控制）",pts:[
    "无显式宽度限值 — 以<strong>钢筋间距 s ≤ 380·(280/fs)−2.5cc ≤ 300·(280/fs)</strong> 控制",
    "ACI 224R 参考值：干燥 0.41 mm · 潮湿 0.30 · 海水 0.15 · 贮水 0.10",
    "贮液结构：ACI 350 / SNI 实践 → 设计裂缝 ≤ <strong>0.25 mm</strong>"]}],
  src:"GB 50010-2010 表3.4.5、§7.1 · SNI 2847:2019 §24.3 · ACI 318-19 §24.3.2 · ACI 224R-01 · ACI 350-20"}},

{id:"slab-thickness-deflection",
 kw:["slab thickness","minimum thickness","deflection limit","deflection control","tebal pelat","lendutan","span depth ratio","beam depth"],
 kw_zh:["板厚","最小厚度","挠度限值","跨高比"],
 en:{title:"Minimum Member Thickness & Deflection Limits",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847 / ACI 318 — depth not requiring deflection calc",pts:[
    "One-way slabs: L/20 (simple), L/24 (one end cont.), <strong>L/28 (both cont.)</strong>, L/10 (cantilever)",
    "Beams: L/16, L/18.5, L/21, L/8 respectively",
    "Two-way flat plate (fy420, no edge beam): exterior panel <strong>ln/30</strong>, interior ln/33; min 125 mm",
    "Deflection limits (Table 24.2.2): L/360 (live, supporting non-structural), L/240 (total after), L/480 (supporting brittle partitions)"]},
   {h:"🇨🇳 GB 50010-2010 §9.1 / 表3.4.3",pts:[
    "Min slab thickness: roof/floor <strong>60 mm</strong> (practice 100+), industrial 80, two-way ≥ 80, cantilever root ≥ L/10",
    "Span-to-depth guidance: one-way h ≥ L/30, two-way ≥ L/40, cantilever ≥ L/12",
    "Deflection limits 表3.4.3: L ≤ 7 m: <strong>L/200</strong>; 7–9 m: L/250; > 9 m: L/300 (crane girders stricter)"]}],
  src:"SNI 2847:2019 Tables 7.3.1.1, 8.3.1.1, 24.2.2 · ACI 318-19 同 · GB 50010-2010 §9.1.2, 表3.4.3"},
 zh:{title:"最小构件厚度与挠度限值",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847 / ACI 318 — 免算挠度的最小高度",pts:[
    "单向板：L/20（简支）、L/24（一端连续）、<strong>L/28（两端连续）</strong>、L/10（悬臂）",
    "梁：分别 L/16、L/18.5、L/21、L/8",
    "无边梁平板（fy420）：边区格 <strong>ln/30</strong>、内区格 ln/33；最小 125 mm",
    "挠度限值（表24.2.2）：活载 L/360；后加总挠度 L/240；支承脆性隔墙 L/480"]},
   {h:"🇨🇳 GB 50010-2010 §9.1 / 表3.4.3",pts:[
    "最小板厚：屋面/楼板 <strong>60 mm</strong>（工程常用 ≥100）、工业 80、双向板 ≥80、悬臂根部 ≥L/10",
    "跨厚比：单向 h ≥ L/30、双向 ≥ L/40、悬臂 ≥ L/12",
    "挠度限值表3.4.3：L≤7 m：<strong>L/200</strong>；7–9 m：L/250；>9 m：L/300"]}],
  src:"SNI 2847:2019 表7.3.1.1、8.3.1.1、24.2.2 · ACI 318-19 · GB 50010-2010 §9.1.2、表3.4.3"}},

{id:"live-load-reduction",
 kw:["live load reduction","reduce live load","reduced live load","reduksi beban hidup","kll","tributary area live","live load element factor","reduction factor live"],
 kw_zh:["活荷载折减","折减系数","从属面积","活荷载折减系数"],
 en:{title:"Live Load Reduction",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.7 / 🇺🇸 ASCE 7-16 §4.7",pts:[
    "<strong>L = Lo·(0.25 + 4.57/√(KLL·AT))</strong> (SI; AT in m²) — applies only where KLL·AT ≥ 37.2 m² (400 ft²)",
    "Lower bound: <strong>L ≥ 0.50·Lo</strong> (one floor) / <strong>0.40·Lo</strong> (≥ two floors)",
    "KLL (Tabel 4.7-1): interior cols 4 · exterior cols w/o cantilever 4 · edge cols w/ cantilever 3 · corner cols w/ cantilever 2 · interior & edge beams 2 · slabs & other members 1",
    "No reduction: assembly occupancies, Lo &gt; 4.79 kN/m² (heavy), passenger-car garages — except −20% max for members carrying ≥ 2 floors",
    "Roof live (§4.8): Lr = Lo·R1·R2, between 0.58 and 0.96 kN/m² by tributary area & slope"]},
   {h:"🇨🇳 GB 50009-2012 §5.1.2 (different method)",pts:[
    "Reduction by a coefficient on the load <strong>area</strong>, not a continuous formula: e.g. office/residential floors reduce when tributary &gt; 25 m²; column/foundation reduction factor by number of floors above (0.85–1.0)",
    "Storage, archives & heavy occupancies: no reduction"]}],
  src:"SNI 1727:2020 §4.7, Tabel 4.7-1, §4.8 · ASCE 7-16 §4.7–4.8 · GB 50009-2012 §5.1.2"},
 zh:{title:"活荷载折减",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.7 / 🇺🇸 ASCE 7-16 §4.7",pts:[
    "<strong>L = Lo·(0.25 + 4.57/√(KLL·AT))</strong>（SI；AT 单位 m²）— 仅当 KLL·AT ≥ 37.2 m²（400 ft²）适用",
    "下限：<strong>L ≥ 0.50·Lo</strong>（单层）/ <strong>0.40·Lo</strong>（≥ 两层）",
    "KLL（表4.7-1）：内柱 4 · 无悬挑外柱 4 · 有悬挑边柱 3 · 有悬挑角柱 2 · 内梁与边梁 2 · 板及其他构件 1",
    "不折减：集会场所、Lo &gt; 4.79 kN/m²（重载）、小汽车库 — 但承托 ≥ 2 层构件最多 −20%",
    "屋面活载（§4.8）：Lr = Lo·R1·R2，按从属面积与坡度取 0.58–0.96 kN/m²"]},
   {h:"🇨🇳 GB 50009-2012 §5.1.2（方法不同）",pts:[
    "按荷载<strong>面积</strong>用折减系数（非连续公式）：如办公/住宅楼面从属面积 &gt; 25 m² 时折减；柱/基础按上部层数取折减系数（0.85–1.0）",
    "储藏、档案及重载：不折减"]}],
  src:"SNI 1727:2020 §4.7、表4.7-1、§4.8 · ASCE 7-16 §4.7–4.8 · GB 50009-2012 §5.1.2"}},

{id:"flood-load",
 kw:["flood load","flood","hydrostatic load","hydrodynamic load","beban banjir","design flood elevation","dfe","breakaway wall","wave load","buoyancy uplift"],
 kw_zh:["洪水荷载","洪水","静水压","动水压","浮力","波浪荷载"],
 en:{title:"Flood Loads",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 Pasal 5 / 🇺🇸 ASCE 7-16 Ch.5",pts:[
    "Design to the <strong>Design Flood Elevation (DFE)</strong> in flood-hazard areas (§5.4.1)",
    "Hydrostatic: full water depth to DFE on all affected surfaces; both-sides-wet → design depth + 0.30 m (§5.4.2)",
    "Hydrodynamic (V ≤ 3.05 m/s): equivalent static head <strong>dh = a·V²/(2g)</strong>, drag a ≥ 1.25, g = 9.81 m/s² (Eq 5.4-1)",
    "Buoyancy/uplift: check flotation of empty tanks/basements; breakaway-wall collapse load ≤ 0.96 kN/m² (§5.3.3)",
    "Wave loads: breaking-wave + debris impact per §5.4.4; combine with other loads per Pasal 2"]},
   {h:"Cross-reference",pts:[
    "🇨🇳 No dedicated flood chapter in GB 50009; hydrostatic/hydrodynamic per hydraulic-structure codes (e.g. SL/GB water-resources standards)",
    "🇺🇸 FEMA P-259 / ASCE 24 (flood-resistant design) supplement ASCE 7 Ch.5"]}],
  src:"SNI 1727:2020 Pasal 5 (§5.3–5.4, Eq 5.4-1) · ASCE 7-16 Ch.5 · ASCE 24 / FEMA P-259"},
 zh:{title:"洪水荷载",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 第5章 / 🇺🇸 ASCE 7-16 第5章",pts:[
    "洪泛区按<strong>设计洪水位（DFE）</strong>设计（§5.4.1）",
    "静水压：至 DFE 的全水深作用于各受影响面；两侧均浸水 → 设计水深 + 0.30 m（§5.4.2）",
    "动水压（V ≤ 3.05 m/s）：等效静水头 <strong>dh = a·V²/(2g)</strong>，拖曳系数 a ≥ 1.25，g = 9.81 m/s²（式5.4-1）",
    "浮力/上托：验算空罐/地下室抗浮；可破断墙体破坏荷载 ≤ 0.96 kN/m²（§5.3.3）",
    "波浪荷载：破碎波 + 漂浮物撞击按 §5.4.4；按第2章与其他荷载组合"]},
   {h:"对照",pts:[
    "🇨🇳 GB 50009 无专门洪水章节；静/动水压按水工结构规范（SL/GB 水利标准）",
    "🇺🇸 ASCE 24 / FEMA P-259（抗洪设计）补充 ASCE 7 第5章"]}],
  src:"SNI 1727:2020 第5章（§5.3–5.4、式5.4-1） · ASCE 7-16 第5章 · ASCE 24 / FEMA P-259"}},

{id:"guardrail-loads",
 kw:["guardrail load","handrail load","railing load","guard load","balustrade","barrier load","vehicle barrier","grab bar","fixed ladder load","parapet load","railing design force","pegangan tangga","pagar pengaman","penghalang kendaraan"],
 kw_zh:["栏杆荷载","护栏荷载","扶手荷载","防撞","车辆防撞","栏杆设计"],
 en:{title:"Handrail, Guardrail & Barrier Loads",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.5 / 🇺🇸 ASCE 7-16 §4.5",pts:[
    "Top rail (handrail/guard): <strong>0.89 kN</strong> concentrated, any direction, any point — OR <strong>0.73 kN/m</strong> uniform (not concurrent)",
    "Guard infill (balusters/panels): <strong>0.22 kN</strong> on 305 × 305 mm",
    "Grab-bar system: 1.11 kN concentrated",
    "Vehicle barrier (passenger cars): <strong>26.70 kN</strong> horizontal at 460–686 mm height, on 305 × 305 mm",
    "Fixed ladder: 1.33 kN + one per 3.05 m of height; rail extension 0.445 kN",
    "Uniform 0.73 kN/m waived: 1–2 family dwellings; factories/warehouses ≤ 50 occupants"]},
   {h:"🇨🇳 GB 50009-2012 §5.5 (horizontal rail load)",pts:[
    "Residential/office/school top rail horizontal line load: <strong>1.0 kN/m</strong>",
    "Assembly, stadium, viewing platforms, high-traffic: <strong>1.5 kN/m</strong> (+ 1.2 kN/m vertical)",
    "🇺🇸 IBC 1607.8 matches ASCE 7: 0.89 kN concentrated / 0.73 kN/m"]}],
  src:"SNI 1727:2020 §4.5.1–4.5.4 · ASCE 7-16 §4.5 / IBC 1607.8 · GB 50009-2012 §5.5"},
 zh:{title:"栏杆、护栏与防撞荷载",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.5 / 🇺🇸 ASCE 7-16 §4.5",pts:[
    "顶杆（扶手/护栏）：<strong>0.89 kN</strong> 集中、任意方向、任意点 — 或 <strong>0.73 kN/m</strong> 均布（不同时）",
    "护栏填充件（栏杆柱/面板）：<strong>0.22 kN</strong> 作用于 305 × 305 mm",
    "抓杆系统：1.11 kN 集中",
    "车辆防撞栏（小汽车）：<strong>26.70 kN</strong> 水平、距地 460–686 mm、作用于 305 × 305 mm",
    "固定爬梯：1.33 kN + 每 3.05 m 高一处；扶手延伸 0.445 kN",
    "0.73 kN/m 均布可免：一/二户住宅；≤ 50 人厂房/仓库"]},
   {h:"🇨🇳 GB 50009-2012 §5.5（栏杆水平荷载）",pts:[
    "住宅/办公/学校顶部水平线荷载：<strong>1.0 kN/m</strong>",
    "集会、体育场、看台、人流密集：<strong>1.5 kN/m</strong>（另加竖向 1.2 kN/m）",
    "🇺🇸 IBC 1607.8 与 ASCE 7 一致：0.89 kN 集中 / 0.73 kN/m"]}],
  src:"SNI 1727:2020 §4.5.1–4.5.4 · ASCE 7-16 §4.5 / IBC 1607.8 · GB 50009-2012 §5.5"}},

{id:"crane-impact-loads",
 kw:["crane load","crane impact","runway beam","bridge crane","monorail","impact load","impact factor","machine impact","beban derek","beban impak","gaya lateral derek","hoist load","wheel load"],
 kw_zh:["吊车荷载","吊车冲击","起重机","冲击系数","机械冲击","吊车横向","轨道梁"],
 en:{title:"Crane & Impact Loads",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.9 Crane (≈ ASCE 7-16 §4.9)",pts:[
    "Vertical impact on max wheel load: monorail (powered) +<strong>25%</strong>; cab/remote bridge (powered) +25%; pendant bridge (powered) +10%; hand-geared +0%",
    "Lateral force = <strong>20%</strong> of (rated capacity + hoist + trolley weight), at the rail top, ⟂ to runway",
    "Longitudinal force = <strong>10%</strong> of max wheel loads, parallel to runway",
    "Max wheel load = bridge self-weight + (capacity + trolley) placed for max effect"]},
   {h:"🇮🇩 §4.6 Impact / 🇨🇳 GB 50009 §6 (动力系数)",pts:[
    "Light shaft/motor machinery +20%; reciprocating/power-driven +50%; elevators per ASME A17.1; façade hoist support 2.5× rated",
    "🇨🇳 GB: crane vertical dynamic factor by working class (A1–A8); soft-hook cranes lateral per code; impact factor μ = 1.05–1.1 for monorail/light cranes",
    "🇺🇸 IBC 1607.6 / AISC Design Guide 7 follow ASCE 7 crane provisions"]}],
  src:"SNI 1727:2020 §4.6 & §4.9 · ASCE 7-16 §4.9 / AISC DG7 · GB 50009-2012 §6 (动力系数), GB/T 3811 (crane design)"},
 zh:{title:"吊车与冲击荷载",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §4.9 吊车（≈ ASCE 7-16 §4.9）",pts:[
    "对最大轮压的竖向冲击：单轨（电动）+<strong>25%</strong>；司机室/遥控桥式（电动）+25%；悬挂桥式（电动）+10%；手动 +0%",
    "横向力 = <strong>20%</strong> ×（额定起重量+吊具+小车重），作用于轨顶、垂直轨道",
    "纵向力 = 最大轮压的 <strong>10%</strong>，平行轨道",
    "最大轮压 = 桥架自重 +（起重量+小车）置于最不利位置"]},
   {h:"🇮🇩 §4.6 冲击 / 🇨🇳 GB 50009 §6（动力系数）",pts:[
    "轻型轴/电机机械 +20%；往复/动力驱动 +50%；电梯按 ASME A17.1；幕墙吊架 2.5× 额定",
    "🇨🇳 GB：吊车竖向动力系数按工作级别（A1–A8）；软钩吊车横向按规范；单轨/轻型冲击系数 μ = 1.05–1.1",
    "🇺🇸 IBC 1607.6 / AISC 设计指南 7 遵循 ASCE 7 吊车规定"]}],
  src:"SNI 1727:2020 §4.6 与 §4.9 · ASCE 7-16 §4.9 / AISC DG7 · GB 50009-2012 §6（动力系数）、GB/T 3811"}},

{id:"soil-lateral-pressure",
 kw:["lateral soil pressure","lateral earth pressure soil load","basement wall pressure","soil load on wall","equivalent fluid pressure","tekanan tanah lateral","beban tanah","at-rest pressure design","retaining wall soil load","backfill pressure"],
 kw_zh:["侧向土压力","土压力","地下室墙","回填土压力","等效流体压力"],
 en:{title:"Design Lateral Soil Pressure (Basement & Retaining Walls)",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 Tabel 3.2-1 (kN/m² per m depth)",pts:[
    "Clean gravels & sands (GW/GP/GM/SW/SP): <strong>5.50</strong> (rigid wall 9.43)",
    "Clayey gravel / silty sand (GC/SM): <strong>7.07</strong> (rigid 9.43)",
    "Silty-clayey sands & inorganic silts (SC/SM-SC/ML): <strong>13.35</strong> (rigid 15.71)",
    "Inorganic clay, low–med plasticity (CL): <strong>15.71</strong>",
    "Organic/high-plasticity (OL/MH/CH/OH): not suitable as backfill",
    "\"Rigid\" = wall restrained at top (braced by floor); submerged soil → buoyant weight + full hydrostatic; design below-grade slabs for uplift"]},
   {h:"Theory & cross-reference",pts:[
    "These equate to an equivalent-fluid density; at-rest K0 = 1−sinφ, active Ka = tan²(45−φ/2)",
    "🇨🇳 GB 50007 §6.7 / pit-support codes use Ka, K0, surcharge & water explicitly",
    "Final design: site-specific geotechnical analysis per SNI 8460:2017 (see Geotechnical module)"]}],
  src:"SNI 1727:2020 Tabel 3.2-1 (§3.2.1) · ASCE 7-16 Table 3.2-1 · SNI 8460:2017 · GB 50007-2011 §6.7"},
 zh:{title:"设计侧向土压力（地下室与挡土墙）",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 表 3.2-1（kN/m² 每米深）",pts:[
    "洁净砾石与砂（GW/GP/GM/SW/SP）：<strong>5.50</strong>（刚性墙 9.43）",
    "含黏土砾石/含粉土砂（GC/SM）：<strong>7.07</strong>（刚性 9.43）",
    "粉黏砂与无机粉土（SC/SM-SC/ML）：<strong>13.35</strong>（刚性 15.71）",
    "低-中塑性无机黏土（CL）：<strong>15.71</strong>",
    "有机/高塑性（OL/MH/CH/OH）：不适合作回填",
    "“刚性” = 顶部受约束的墙（被楼板支撑）；浸水土 → 浮重度 + 全水压；地面以下板须抗浮"]},
   {h:"原理与对照",pts:[
    "相当于等效流体重度；静止 K0 = 1−sinφ，主动 Ka = tan²(45−φ/2)",
    "🇨🇳 GB 50007 §6.7 / 基坑支护规范 明确采用 Ka、K0、超载与水",
    "最终设计：按 SNI 8460:2017 场地专项分析（见岩土模块）"]}],
  src:"SNI 1727:2020 表 3.2-1（§3.2.1） · ASCE 7-16 表 3.2-1 · SNI 8460:2017 · GB 50007-2011 §6.7"}},

{id:"wind-coefficients",
 kw:["velocity pressure","exposure coefficient","kz","kh","wind coefficient","exposure category","directionality kd","internal pressure","gcpi","external pressure coefficient","cp wall","enclosure classification","koefisien tekanan","tekanan velositas","faktor arah angin","gust effect factor","qz wind","components and cladding","c&c","cladding pressure","gcp","rooftop equipment","rooftop wind","force coefficient cf","freestanding wall wind","chimney wind","effective wind area"],
 kw_zh:["风压系数","风荷载系数","速度压","暴露系数","暴露类别","风向系数","内压","体型系数","封闭分类","阵风系数"],
 en:{title:"Wind Pressure Coefficients (Kz, Kd, GCpi, Cp)",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §26 / 🇺🇸 ASCE 7-16 Ch.26",pts:[
    "Velocity pressure: <strong>qz = 0.613·Kz·Kzt·Kd·Ke·V²</strong> (N/m², V in m/s)",
    "Exposure: <strong>B</strong> urban/suburban · <strong>C</strong> open (default) · <strong>D</strong> water/flat — over 45° sectors each side of the wind direction",
    "Kz (Exp C): 0.85 @ ≤4.6 m → 0.98 @ 9.1 m → 1.13 @ 18 m → 1.26 @ 30.5 m → 1.46 @ 61 m (Tabel 26.10-1); Kz = 2.01(z/zg)^(2/α)",
    "Directionality <strong>Kd = 0.85</strong> (buildings), 0.90 square tanks, 0.95 trussed towers (Tabel 26.6-1)",
    "Gust effect <strong>G = 0.85</strong> (rigid, n1 ≥ 1 Hz); Gf for flexible"]},
   {h:"Internal & external coefficients",pts:[
    "Internal pressure <strong>GCpi = ±0.18</strong> (enclosed), <strong>±0.55</strong> (partially enclosed), 0 (open) — Tabel 26.13-1",
    "External wall Cp: windward <strong>+0.8</strong> (qz); leeward −0.5/−0.3/−0.2 by L/B (qh); side <strong>−0.7</strong> (qh)",
    "MWFRS pressure: <strong>p = q·G·Cp − qi·(GCpi)</strong>; min 0.77 kN/m² walls + 0.38 kN/m² roof",
    "🇨🇳 GB 50009: wk = βz·μs·μz·w₀ — μz exposure A–D, μs shape factor (windward +0.8, leeward −0.5), βz gust"]}],
  src:"SNI 1727:2020 Tabel 26.6-1/26.10-1/26.11-1/26.13-1, Gambar 27.3-1 · ASCE 7-16 Ch.26–27 · GB 50009-2012 §8"},
 zh:{title:"风压系数（Kz、Kd、GCpi、Cp）",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 §26 / 🇺🇸 ASCE 7-16 第26章",pts:[
    "速度压：<strong>qz = 0.613·Kz·Kzt·Kd·Ke·V²</strong>（N/m²，V 单位 m/s）",
    "暴露：<strong>B</strong> 城市/郊区 · <strong>C</strong> 开阔（默认）· <strong>D</strong> 水面/平坦 — 在风向两侧各 45° 扇区确定",
    "Kz（C 类）：≤4.6 m 取 0.85 → 9.1 m 0.98 → 18 m 1.13 → 30.5 m 1.26 → 61 m 1.46（表26.10-1）；Kz = 2.01(z/zg)^(2/α)",
    "风向系数 <strong>Kd = 0.85</strong>（建筑）、方形罐 0.90、桁架塔 0.95（表26.6-1）",
    "阵风系数 <strong>G = 0.85</strong>（刚性，n1 ≥ 1 Hz）；柔性取 Gf"]},
   {h:"内压与外压系数",pts:[
    "内压 <strong>GCpi = ±0.18</strong>（封闭）、<strong>±0.55</strong>（部分封闭）、0（敞开）— 表26.13-1",
    "外墙 Cp：迎风 <strong>+0.8</strong>（qz）；背风 −0.5/−0.3/−0.2（按 L/B，qh）；侧墙 <strong>−0.7</strong>（qh）",
    "主体风压：<strong>p = q·G·Cp − qi·(GCpi)</strong>；最小墙 0.77 + 屋面 0.38 kN/m²",
    "🇨🇳 GB 50009：wk = βz·μs·μz·w₀ — μz 暴露 A–D、μs 体型（迎风 +0.8、背风 −0.5）、βz 风振"]}],
  src:"SNI 1727:2020 表26.6-1/26.10-1/26.11-1/26.13-1、图27.3-1 · ASCE 7-16 第26–27章 · GB 50009-2012 §8"}},

{id:"serviceability-limits",
 kw:["serviceability","deflection limit","deflection limits","drift limit","vibration limit","floor vibration","occupant comfort","kemampuan layan","lendutan izin","batas defleksi","batas drift","l/360","l/240","interstorey drift","sag limit","span deflection limit"],
 kw_zh:["正常使用","挠度限值","位移限值","层间位移","楼盖振动","舒适度","变形限值"],
 en:{title:"Serviceability — Deflection, Drift & Vibration Limits",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 App. CC / 🇺🇸 ASCE 7-16 App. CC",pts:[
    "Vertical deflection: <strong>L/360</strong> floors (full live load) · <strong>L/240</strong> roof · L/300 visible/cladding · L/200 doors-windows · cantilever L/150",
    "Absolute: ≤ <strong>10 mm</strong> to non-load-bearing partitions",
    "Wind drift: <strong>H/600 to H/400</strong> of building/storey height (smaller for brittle cladding); absolute interstorey ≤ 10 mm",
    "Serviceability combos: D+L (short-term), D+0.5L (long-term creep), D+0.5L+Wa (wind, 10-yr MRI typical)",
    "Floor vibration: peak accel 0.005–0.01 g (offices/residences annoying), 0.02–0.05 g (active areas); activity 2–6 Hz, target floor freq &gt; 7–8 Hz"]},
   {h:"🇨🇳 GB 50010-2010 Table 3.4.3 (explicit RC deflection)",pts:[
    "Span L ≤ 7 m → <strong>L/200</strong> (L/250 with higher requirement)",
    "7 m &lt; L ≤ 9 m → L/250 (L/300)",
    "L &gt; 9 m → <strong>L/300</strong> (L/400); crane girders L/500–L/600",
    "Seismic drift (GB 50011 Table 5.5.1): RC frame 1/550, frame-wall 1/800, wall 1/1000 (elastic)"]}],
  src:"SNI 1727:2020 App. CC (§CC.2.1–2.3) · ASCE 7-16 App. CC · GB 50010-2010 Table 3.4.3 · GB 50011 Table 5.5.1 · SNI 1726:2019 Tabel 20 · AISC DG11"},
 zh:{title:"正常使用 — 挠度、位移与振动限值",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 附录 CC / 🇺🇸 ASCE 7-16 附录 CC",pts:[
    "竖向挠度：<strong>L/360</strong> 楼面（满活载）· <strong>L/240</strong> 屋面 · L/300 可见/围护 · L/200 门窗 · 悬臂 L/150",
    "绝对值：对非承重隔墙 ≤ <strong>10 mm</strong>",
    "风致位移：建筑/层高的 <strong>H/600 至 H/400</strong>（脆性围护取小值）；层间绝对值 ≤ 10 mm",
    "正常使用组合：D+L（短期）、D+0.5L（长期徐变）、D+0.5L+Wa（风，一般 10 年重现期）",
    "楼盖振动：峰值加速度 0.005–0.01 g（办公/住宅不适）、0.02–0.05 g（活动区）；活动 2–6 Hz，楼面基频宜 &gt; 7–8 Hz"]},
   {h:"🇨🇳 GB 50010-2010 表3.4.3（明确钢筋混凝土挠度）",pts:[
    "跨度 L ≤ 7 m → <strong>L/200</strong>（较高要求 L/250）",
    "7 m &lt; L ≤ 9 m → L/250（L/300）",
    "L &gt; 9 m → <strong>L/300</strong>（L/400）；吊车梁 L/500–L/600",
    "地震位移（GB 50011 表5.5.1）：RC 框架 1/550、框剪 1/800、墙 1/1000（弹性）"]}],
  src:"SNI 1727:2020 附录 CC（§CC.2.1–2.3） · ASCE 7-16 附录 CC · GB 50010-2010 表3.4.3 · GB 50011 表5.5.1 · SNI 1726:2019 表20 · AISC DG11"}},

{id:"steel-compression",
 kw:["steel column","compression member","column buckling","flexural buckling","critical stress fcr","axial compression steel","column capacity","tekuk lentur","kekuatan tekan","kolom baja","kc/r","euler buckling","slenderness column"],
 kw_zh:["钢柱","受压构件","弯曲屈曲","临界应力","轴压","柱承载力","欧拉屈曲"],
 en:{title:"Steel Compression Member Design (Flexural Buckling)",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 BAB E3 / 🇺🇸 AISC 360-16 E3",pts:[
    "Nominal strength <strong>Pn = Fcr·Ag</strong>, φc = 0.90 (Ω = 1.67)",
    "Elastic buckling stress <strong>Fe = π²·E / (Lc/r)²</strong>, E = 200,000 MPa, Lc = K·L",
    "If Lc/r ≤ 4.71√(E/Fy) (Fy/Fe ≤ 2.25): <strong>Fcr = [0.658^(Fy/Fe)]·Fy</strong> (inelastic)",
    "If Lc/r &gt; 4.71√(E/Fy): <strong>Fcr = 0.877·Fe</strong> (elastic)",
    "Threshold 4.71√(E/Fy) = 113 (Fy=345) / 134 (Fy=250); preferred KL/r ≤ 200; check torsional/FT buckling (E4)"]},
   {h:"🇨🇳 GB 50017-2017 §7.2",pts:[
    "Stability: <strong>N / (φ·A·f) ≤ 1.0</strong>, φ = stability factor from class a/b/c/d curves (Appendix tables) by λ = Lc/i",
    "Design strength f = fy/γR (Q235 f≈215, Q355 f≈305 MPa); slenderness λ ≤ 150 (main compression members)"]}],
  src:"SNI 1729:2020 BAB E3 (Pn, Fcr, Fe) · AISC 360-16 E3 · GB 50017-2017 §7.2, App. D"},
 zh:{title:"钢受压构件设计（弯曲屈曲）",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 第 E3 章 / 🇺🇸 AISC 360-16 E3",pts:[
    "名义强度 <strong>Pn = Fcr·Ag</strong>，φc = 0.90（Ω = 1.67）",
    "弹性屈曲应力 <strong>Fe = π²·E / (Lc/r)²</strong>，E = 200,000 MPa，Lc = K·L",
    "Lc/r ≤ 4.71√(E/Fy)（Fy/Fe ≤ 2.25）：<strong>Fcr = [0.658^(Fy/Fe)]·Fy</strong>（非弹性）",
    "Lc/r &gt; 4.71√(E/Fy)：<strong>Fcr = 0.877·Fe</strong>（弹性）",
    "分界 4.71√(E/Fy) = 113（Fy=345）/ 134（Fy=250）；宜 KL/r ≤ 200；验算扭转/弯扭屈曲（E4）"]},
   {h:"🇨🇳 GB 50017-2017 §7.2",pts:[
    "稳定：<strong>N / (φ·A·f) ≤ 1.0</strong>，φ = 稳定系数（a/b/c/d 类曲线，附录表）按 λ = Lc/i",
    "设计强度 f = fy/γR（Q235 f≈215、Q355 f≈305 MPa）；主受压构件 λ ≤ 150"]}],
  src:"SNI 1729:2020 第 E3 章 · AISC 360-16 E3 · GB 50017-2017 §7.2、附录 D"}},

{id:"steel-flexure",
 kw:["steel beam","flexural member","beam design","lateral torsional buckling","ltb","plastic moment","mp fy zx","lp lr","cb factor","beam capacity","balok baja","kekuatan lentur","tekuk torsi lateral","unbraced length"],
 kw_zh:["钢梁","受弯构件","弯扭屈曲","塑性弯矩","梁承载力","无支撑长度"],
 en:{title:"Steel Flexural Member Design (Beam, LTB)",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 BAB F2 / 🇺🇸 AISC 360-16 F2 (doubly-symmetric I)",pts:[
    "Plastic moment <strong>Mn = Mp = Fy·Zx</strong>, φb = 0.90 (when Lb ≤ Lp and section compact)",
    "Lp (yield limit) = <strong>1.76·ry·√(E/Fy)</strong>",
    "Lp &lt; Lb ≤ Lr: Mn = Cb·[Mp − (Mp − 0.7Fy·Sx)·(Lb − Lp)/(Lr − Lp)] ≤ Mp (inelastic LTB)",
    "Lb &gt; Lr: Mn = Fcr·Sx ≤ Mp (elastic LTB)",
    "Cb = 12.5Mmax/(2.5Mmax + 3MA + 4MB + 3MC) ≥ 1.0 (conservatively 1.0)"]},
   {h:"🇨🇳 GB 50017-2017 §6",pts:[
    "Strength: <strong>Mx/(γx·Wnx·f) ≤ 1.0</strong>; overall stability Mx/(φb·Wx·f) ≤ 1.0",
    "φb = overall stability factor (Appendix C); deflection limits per Table (e.g. L/250–L/400)"]}],
  src:"SNI 1729:2020 BAB F2 (Mp, Lp, Lr, Cb) · AISC 360-16 F2 · GB 50017-2017 §6"},
 zh:{title:"钢受弯构件设计（梁、弯扭屈曲）",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 第 F2 章 / 🇺🇸 AISC 360-16 F2（双轴对称 I 型）",pts:[
    "塑性弯矩 <strong>Mn = Mp = Fy·Zx</strong>，φb = 0.90（Lb ≤ Lp 且截面厚实时）",
    "Lp（屈服限）= <strong>1.76·ry·√(E/Fy)</strong>",
    "Lp &lt; Lb ≤ Lr：Mn = Cb·[Mp − (Mp − 0.7Fy·Sx)·(Lb − Lp)/(Lr − Lp)] ≤ Mp（非弹性 LTB）",
    "Lb &gt; Lr：Mn = Fcr·Sx ≤ Mp（弹性 LTB）",
    "Cb = 12.5Mmax/(2.5Mmax + 3MA + 4MB + 3MC) ≥ 1.0（偏保守取 1.0）"]},
   {h:"🇨🇳 GB 50017-2017 第 6 章",pts:[
    "强度：<strong>Mx/(γx·Wnx·f) ≤ 1.0</strong>；整体稳定 Mx/(φb·Wx·f) ≤ 1.0",
    "φb = 整体稳定系数（附录 C）；挠度限值按表（如 L/250–L/400）"]}],
  src:"SNI 1729:2020 第 F2 章 · AISC 360-16 F2 · GB 50017-2017 第 6 章"}},

{id:"steel-tension-classification",
 kw:["steel tension member","tension capacity","gross net section","shear lag","effective net area","section classification","compact noncompact slender","width thickness ratio","lambda p lambda r","kekuatan tarik","penampang kompak","klasifikasi penampang"],
 kw_zh:["受拉构件","净截面","剪力滞后","截面分类","厚实","宽厚比"],
 en:{title:"Steel Tension Members & Section Classification",
  sections:[
   {h:"Tension — SNI 1729:2020 BAB D2 / AISC D2",pts:[
    "Yielding (gross): φt·Pn = <strong>0.90·Fy·Ag</strong> (Ω = 1.67)",
    "Rupture (net): φt·Pn = <strong>0.75·Fu·Ae</strong> (Ω = 2.00), Ae = U·An",
    "Shear-lag U: 1.0 (all elements connected); U = 1 − x̄/L general; bolt holes = db + 2 mm in An",
    "Preferred slenderness L/r ≤ 300"]},
   {h:"Section classification — BAB B4.1 / AISC Table B4.1 (λ = b/t)",pts:[
    "I-flange flexure: λp = <strong>0.38√(E/Fy)</strong>, λr = 1.00√(E/Fy)",
    "I-web flexure: λp = <strong>3.76√(E/Fy)</strong>, λr = 5.70√(E/Fy)",
    "Compression: flange λr = 0.56√(E/Fy), web λr = 1.49√(E/Fy)",
    "Compact ⇒ full Mp; noncompact/slender ⇒ local-buckling reduction. 🇨🇳 GB 50017 §3.5 uses width-thickness classes S1–S5"]}],
  src:"SNI 1729:2020 BAB D2, BAB B4.1 (Tabel B4.1) · AISC 360-16 D2, Table B4.1 · GB 50017-2017 §3.5, §7.1"},
 zh:{title:"钢受拉构件与截面分类",
  sections:[
   {h:"受拉 — SNI 1729:2020 第 D2 章 / AISC D2",pts:[
    "屈服（毛截面）：φt·Pn = <strong>0.90·Fy·Ag</strong>（Ω = 1.67）",
    "断裂（净截面）：φt·Pn = <strong>0.75·Fu·Ae</strong>（Ω = 2.00），Ae = U·An",
    "剪力滞后 U：1.0（全部板件相连）；通式 U = 1 − x̄/L；螺栓孔 = db + 2 mm 计入 An",
    "宜 L/r ≤ 300"]},
   {h:"截面分类 — 第 B4.1 章 / AISC 表 B4.1（λ = b/t）",pts:[
    "I 翼缘受弯：λp = <strong>0.38√(E/Fy)</strong>，λr = 1.00√(E/Fy)",
    "I 腹板受弯：λp = <strong>3.76√(E/Fy)</strong>，λr = 5.70√(E/Fy)",
    "受压：翼缘 λr = 0.56√(E/Fy)，腹板 λr = 1.49√(E/Fy)",
    "厚实 ⇒ 全截面 Mp；非厚实/细长 ⇒ 局部屈曲折减。🇨🇳 GB 50017 §3.5 用 S1–S5 宽厚比等级"]}],
  src:"SNI 1729:2020 第 D2、B4.1 章（表 B4.1） · AISC 360-16 D2、表 B4.1 · GB 50017-2017 §3.5、§7.1"}},

{id:"block-shear-bearing",
 kw:["block shear","block shear rupture","bolt bearing","bearing strength","tear out","tearout","connecting element","gusset plate","edge distance","bolt spacing","geser blok","kekuatan tumpu","jarak tepi","whitmore","connection strength steel"],
 kw_zh:["块状剪切","承压","撕裂","节点板","边距","螺栓间距","连接强度"],
 en:{title:"Block Shear, Bolt Bearing & Connecting Elements",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 BAB J4 / 🇺🇸 AISC J4",pts:[
    "Block shear: <strong>Rn = 0.60·Fu·Anv + Ubs·Fu·Ant ≤ 0.60·Fy·Agv + Ubs·Fu·Ant</strong> (φ = 0.75)",
    "Ubs = 1.0 (uniform tension, e.g. gusset/angle) · 0.5 (non-uniform, e.g. coped beam)",
    "Element shear yielding 0.60·Fy·Agv (φ=1.00); rupture 0.60·Fu·Anv (φ=0.75)",
    "Gusset plates: limit tension to the Whitmore-section effective area"]},
   {h:"Bolt bearing & layout — BAB J3",pts:[
    "Bearing: <strong>Rn = 2.4·d·t·Fu</strong> (deformation a consideration); tear-out Rn = 1.2·lc·t·Fu (φ = 0.75)",
    "Min spacing ≥ 2⅔·d (3·d preferred); min edge distance per Tabel J3.4",
    "Net area: deduct hole = bolt d + 2 mm (standard holes)",
    "🇨🇳 GB 50017 §11.4: bearing-type bolt 承压 Nc = d·Σt·fcb; check 端距/边距 per §11.5"]}],
  src:"SNI 1729:2020 BAB J4 (block shear), J3.10 (bearing), J3.3–3.5 (spacing/edge) · AISC 360-16 J3–J4 · GB 50017-2017 §11.4–11.5"},
 zh:{title:"块状剪切、螺栓承压与连接板件",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 第 J4 章 / 🇺🇸 AISC J4",pts:[
    "块状剪切：<strong>Rn = 0.60·Fu·Anv + Ubs·Fu·Ant ≤ 0.60·Fy·Agv + Ubs·Fu·Ant</strong>（φ = 0.75）",
    "Ubs = 1.0（均匀受拉，如节点板/角钢）· 0.5（不均匀，如切角梁）",
    "板件剪切屈服 0.60·Fy·Agv（φ=1.00）；断裂 0.60·Fu·Anv（φ=0.75）",
    "节点板：受拉按 Whitmore 截面有效面积限制"]},
   {h:"螺栓承压与排布 — 第 J3 章",pts:[
    "承压：<strong>Rn = 2.4·d·t·Fu</strong>（考虑变形）；撕裂 Rn = 1.2·lc·t·Fu（φ = 0.75）",
    "最小间距 ≥ 2⅔·d（宜 3·d）；最小边距按表 J3.4",
    "净截面：扣孔 = 螺栓 d + 2 mm（标准孔）",
    "🇨🇳 GB 50017 §11.4：承压型螺栓 Nc = d·Σt·fcb；端距/边距按 §11.5"]}],
  src:"SNI 1729:2020 第 J4 章（块状剪切）、J3.10（承压）、J3.3–3.5（间距/边距） · AISC 360-16 J3–J4 · GB 50017-2017 §11.4–11.5"}},

{id:"composite-steel",
 kw:["composite member","composite column","composite beam","shear stud","headed stud","shear connector","steel concrete composite","encased column","filled tube","cft","komposit","penghubung geser","angkur stud","baja beton komposit"],
 kw_zh:["组合构件","组合柱","组合梁","栓钉","抗剪连接件","钢管混凝土","型钢混凝土"],
 en:{title:"Composite Steel-Concrete Members",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 BAB I / 🇺🇸 AISC 360-16 Ch.I",pts:[
    "Headed stud anchor shear: <strong>Qn = 0.5·Asa·√(f'c·Ec) ≤ Rg·Rp·Asa·Fu</strong> (I8-1)",
    "Rg = 1.0 (no deck) / 0.85 / 0.7; Rp = 0.75 (no deck) / 0.6 (perpendicular deck)",
    "Composite beam ΣQn = least of 0.85·f'c·Ac, Fy·As (full composite if ΣQn ≥ this)",
    "Filled/encased columns: Pno from steel + concrete + rebar; encased min steel ratio 1%, min 4 bars",
    "Concrete bearing transfer φ·1.7·f'c·A1 (φ = 0.65)"]},
   {h:"🇨🇳 GB 50017-2017 §14 / JGJ 138 / GB 50936 (CFST)",pts:[
    "Composite beams (组合梁) per GB 50017 §14: stud connectors Nv^c = 0.43·As·√(Ec·fc) ≤ 0.7·As·γ·f",
    "Concrete-filled steel tube (钢管混凝土): GB 50936; encased SRC: JGJ 138 / YB 9082"]}],
  src:"SNI 1729:2020 BAB I (I2 columns, I3 beams, I8 studs) · AISC 360-16 Ch.I · GB 50017-2017 §14 · GB 50936 (CFST) · JGJ 138 (SRC)"},
 zh:{title:"钢-混凝土组合构件",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 第 I 章 / 🇺🇸 AISC 360-16 第 I 章",pts:[
    "栓钉抗剪：<strong>Qn = 0.5·Asa·√(f'c·Ec) ≤ Rg·Rp·Asa·Fu</strong>（I8-1）",
    "Rg = 1.0（无压型板）/ 0.85 / 0.7；Rp = 0.75（无板）/ 0.6（垂直压型板）",
    "组合梁 ΣQn = 取 0.85·f'c·Ac、Fy·As 中较小者（ΣQn ≥ 此值为完全组合）",
    "填充/包覆柱：Pno 计入 钢+混凝土+钢筋；包覆柱含钢率 ≥ 1%、≥ 4 根纵筋",
    "混凝土承压传递 φ·1.7·f'c·A1（φ = 0.65）"]},
   {h:"🇨🇳 GB 50017-2017 §14 / JGJ 138 / GB 50936（钢管混凝土）",pts:[
    "组合梁按 GB 50017 §14：栓钉连接件 Nv^c = 0.43·As·√(Ec·fc) ≤ 0.7·As·γ·f",
    "钢管混凝土：GB 50936；型钢混凝土（SRC）：JGJ 138 / YB 9082"]}],
  src:"SNI 1729:2020 第 I 章（I2 柱、I3 梁、I8 栓钉） · AISC 360-16 第 I 章 · GB 50017-2017 §14 · GB 50936（钢管混凝土） · JGJ 138（型钢混凝土）"}},

{id:"steel-secondorder-bracing",
 kw:["second order analysis","b1 b2","amplification factor","p-delta","p delta","stability bracing","brace strength stiffness","notional load","direct analysis method","effective length","cm factor","analisis orde kedua","pengekangan","amplifikasi momen"],
 kw_zh:["二阶分析","放大系数","稳定支撑","支撑刚度","概念荷载","直接分析","计算长度"],
 en:{title:"Steel Second-Order Analysis (B1/B2) & Stability Bracing",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 Lampiran 8 / 🇺🇸 AISC App.8",pts:[
    "Amplified: Mr = B1·Mnt + B2·Mlt; Pr = Pnt + B2·Plt",
    "<strong>B1 = Cm / (1 − α·Pr/Pe1) ≥ 1</strong>, α = 1.0 (LRFD); Cm = 0.6 − 0.4·(M1/M2)",
    "<strong>B2 = 1 / (1 − α·Pstory/Pe,story) ≥ 1</strong> (sway amplification)",
    "Direct Analysis Method (BAB C): reduced stiffness 0.8·τb·EI + notional load Ni = 0.002·Yi; K = 1.0"]},
   {h:"Stability bracing — Lampiran 6",pts:[
    "Column panel brace: Vbr = <strong>0.005·Pr</strong>, βbr = (1/φ)·(2Pr/Lbr)",
    "Column point brace: Pbr = <strong>0.01·Pr</strong>, βbr = (1/φ)·(8Pr/Lbr)",
    "Beam point brace: Pbr = 0.02·Mr·Cd/ho",
    "Bracing must provide BOTH strength and stiffness (φ = 0.75)",
    "🇨🇳 GB 50017 §5: second-order via amplified-sway or P-Δ; brace per §7.5"]}],
  src:"SNI 1729:2020 Lampiran 8 (B1/B2), Lampiran 6 (bracing), BAB C (direct analysis) · AISC 360-16 App.6, App.8, Ch.C · GB 50017-2017 §5.1, §7.5"},
 zh:{title:"钢结构二阶分析（B1/B2）与稳定支撑",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 附录 8 / 🇺🇸 AISC 附录 8",pts:[
    "放大：Mr = B1·Mnt + B2·Mlt；Pr = Pnt + B2·Plt",
    "<strong>B1 = Cm / (1 − α·Pr/Pe1) ≥ 1</strong>，α = 1.0（LRFD）；Cm = 0.6 − 0.4·(M1/M2)",
    "<strong>B2 = 1 / (1 − α·Pstory/Pe,story) ≥ 1</strong>（侧移放大）",
    "直接分析法（C 章）：折减刚度 0.8·τb·EI + 概念荷载 Ni = 0.002·Yi；K = 1.0"]},
   {h:"稳定支撑 — 附录 6",pts:[
    "柱节间支撑：Vbr = <strong>0.005·Pr</strong>，βbr = (1/φ)·(2Pr/Lbr)",
    "柱节点支撑：Pbr = <strong>0.01·Pr</strong>，βbr = (1/φ)·(8Pr/Lbr)",
    "梁节点支撑：Pbr = 0.02·Mr·Cd/ho",
    "支撑须同时满足强度与刚度（φ = 0.75）",
    "🇨🇳 GB 50017 §5：二阶用放大侧移或 P-Δ；支撑按 §7.5"]}],
  src:"SNI 1729:2020 附录 8（B1/B2）、附录 6（支撑）、C 章（直接分析） · AISC 360-16 附录 6、8、C 章 · GB 50017-2017 §5.1、§7.5"}},

{id:"steel-fatigue-fire",
 kw:["fatigue steel","fatigue design","stress range","stress category","fatigue life","fire design steel","elevated temperature steel","critical temperature","structural fire","fatik","kelelahan","desain kebakaran baja","temperatur kritis"],
 kw_zh:["疲劳","应力幅","疲劳寿命","抗火设计","高温钢材","临界温度"],
 en:{title:"Steel Fatigue & Fire Design",
  sections:[
   {h:"Fatigue — SNI 1729:2020 Lampiran 3 / AISC App.3",pts:[
    "Required when live-load stress cycles &gt; <strong>20,000</strong>; use net applied stress range from service loads",
    "Allowable stress range <strong>FSR = (6900·Cf/nSR)^0.333 ≥ FTH</strong> MPa (Cat. A–E')",
    "Shear (Cat. F): FSR = (690·Cf/nSR)^0.167 ≥ 55 MPa",
    "Threshold FTH (no check below): Cat. A 165, Cat. C 69, Cat. E' 18 MPa",
    "Detail category A (base metal) → E' (worst welded); good detailing & NDE reduce category severity"]},
   {h:"Fire — SNI 1729:2020 Lampiran 4 / AISC App.4",pts:[
    "Two methods: structural analysis at elevated temperature, or qualification (fire-rating) testing",
    "Steel retention: at 538°C E ≈ 0.60E, Fy ≈ 0.66Fy; at 600°C ≈ 0.31E, 0.47Fy",
    "Fire load combination: <strong>1.2D + 0.5L + T</strong> (thermal actions)",
    "Fire-resistance ratings (TKA) themselves are in SNI 1741 / Permen 26 — see the Fire module",
    "🇨🇳 GB 51249 (steel structure fire) / GB 50017 §17; fatigue GB 50017 §16"]}],
  src:"SNI 1729:2020 Lampiran 3 (fatigue), Lampiran 4 (fire) · AISC 360-16 App.3, App.4 · GB 50017-2017 §16–17 · GB 51249 (fire)"},
 zh:{title:"钢结构疲劳与抗火设计",
  sections:[
   {h:"疲劳 — SNI 1729:2020 附录 3 / AISC 附录 3",pts:[
    "活载应力循环 &gt; <strong>20,000</strong> 次时需验算；采用使用荷载净应力幅",
    "容许应力幅 <strong>FSR = (6900·Cf/nSR)^0.333 ≥ FTH</strong> MPa（A–E′ 类）",
    "受剪（F 类）：FSR = (690·Cf/nSR)^0.167 ≥ 55 MPa",
    "门槛 FTH（以下不验算）：A 类 165、C 类 69、E′ 类 18 MPa",
    "细节类别 A（母材）→ E′（最不利焊接）；良好构造与无损检测可降低类别严重度"]},
   {h:"抗火 — SNI 1729:2020 附录 4 / AISC 附录 4",pts:[
    "两种方法：高温下结构分析，或耐火（耐火等级）试验鉴定",
    "钢材保留：538°C 时 E ≈ 0.60E、Fy ≈ 0.66Fy；600°C 约 0.31E、0.47Fy",
    "火灾荷载组合：<strong>1.2D + 0.5L + T</strong>（温度作用）",
    "耐火极限（TKA）本身见 SNI 1741 / 条例 26 — 见消防模块",
    "🇨🇳 GB 51249（钢结构防火）/ GB 50017 §17；疲劳 GB 50017 §16"]}],
  src:"SNI 1729:2020 附录 3（疲劳）、附录 4（抗火） · AISC 360-16 附录 3、4 · GB 50017-2017 §16–17 · GB 51249（防火）"}},

{id:"load-combinations",
 kw:["load combination","load combinations","kombinasi beban","load factor","faktor beban","ultimate load","factored load","lrfd combinations"],
 kw_zh:["荷载组合","荷载分项系数","组合"],
 en:{title:"Load Combinations (Strength Design)",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 / 🇺🇸 ASCE 7-22 §2.3",pts:[
    "1.4D",
    "<strong>1.2D + 1.6L + 0.5(Lr or R)</strong>",
    "1.2D + 1.6(Lr or R) + (L or 0.5W)",
    "1.2D + 1.0W + L + 0.5(Lr or R)",
    "1.2D + Ev + Eh + L  ·  0.9D − Ev + Eh  (E with Ω0 for overstrength cases)",
    "0.9D + 1.0W · Service: D+L, D+0.6W …"]},
   {h:"🇨🇳 GB 55001-2021 / GB 50068 (current factors)",pts:[
    "Permanent γG = <strong>1.3</strong> (unfavourable; 1.0 favourable), variable γQ = <strong>1.5</strong>",
    "Basic: 1.3G + 1.5Q · with wind: 1.3G + 1.5W + 1.5×0.7Q (ψc combination factors)",
    "Seismic (GB 55002-2021): <strong>1.3(G + 0.5Q) + 1.4·Eh</strong> (+0.5Ev where applicable); wind ψw·1.5W for tall buildings",
    "Older GB 50009-2012 used 1.2/1.4 — superseded by 1.3/1.5 in the 2021 general codes"]}],
  src:"SNI 1727:2020 §2.3 (= ASCE 7-16) · ASCE 7-22 §2.3.1, §2.3.6 · GB 55001-2021 §3.1 · GB 55002-2021 §4.3"},
 zh:{title:"荷载组合（承载能力极限状态）",
  sections:[
   {h:"🇮🇩 SNI 1727:2020 / 🇺🇸 ASCE 7-22 §2.3",pts:[
    "1.4D",
    "<strong>1.2D + 1.6L + 0.5(Lr 或 R)</strong>",
    "1.2D + 1.6(Lr 或 R) + (L 或 0.5W)",
    "1.2D + 1.0W + L + 0.5(Lr 或 R)",
    "1.2D + Ev + Eh + L · 0.9D − Ev + Eh（超强工况用 Ω0·E）",
    "0.9D + 1.0W · 正常使用：D+L、D+0.6W…"]},
   {h:"🇨🇳 GB 55001-2021 / GB 50068（现行系数）",pts:[
    "恒载 γG = <strong>1.3</strong>（不利；有利取 1.0），活载 γQ = <strong>1.5</strong>",
    "基本：1.3G + 1.5Q；含风：1.3G + 1.5W + 1.5×0.7Q（ψc 组合值系数）",
    "地震（GB 55002-2021）：<strong>1.3(G + 0.5Q) + 1.4·Eh</strong>（必要时 +0.5Ev）",
    "旧 GB 50009-2012 的 1.2/1.4 已被 2021 通用规范 1.3/1.5 取代"]}],
  src:"SNI 1727:2020 §2.3（= ASCE 7-16） · ASCE 7-22 §2.3 · GB 55001-2021 §3.1 · GB 55002-2021 §4.3"}},

{id:"base-shear",
 kw:["base shear","seismic base shear","lateral force","gaya geser dasar","equivalent lateral force","elf","seismic coefficient","cs coefficient"],
 kw_zh:["基底剪力","底部剪力","地震作用","水平地震"],
 en:{title:"Seismic Base Shear — Equivalent Lateral Force",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 §7.8 / 🇺🇸 ASCE 7-22 §12.8",pts:[
    "<strong>V = Cs·W</strong>; Cs = SDS/(R/Ie)",
    "Upper bound: Cs ≤ SD1/(T·R/Ie) (T ≤ TL); lower: Cs ≥ 0.044·SDS·Ie ≥ 0.01; if S1 ≥ 0.6g: ≥ 0.5·S1/(R/Ie)",
    "Period: Ta = Ct·hn^x (RC frame Ct=0.0466, x=0.9; steel frame 0.0724, 0.8)",
    "Distribution: Fx = V·wx·hx^k/Σwi·hi^k (k = 1→2 for T 0.5→2.5 s)"]},
   {h:"🇨🇳 GB 50011-2010 §5.2 (底部剪力法)",pts:[
    "<strong>FEk = α1·Geq</strong>, Geq = 0.85·GE (total representative gravity)",
    "α1 from spectrum (αmax: 7° 0.08, 8° 0.16, 9° 0.32 — frequent EQ); Tg by site & group",
    "Min storey shear coefficient λ (表5.2.5): 7°: <strong>0.016</strong>, 8°: 0.032, 9°: 0.064 (T<3.5s)",
    "Top additional force δn·FEk for whiplash; design uses frequent (small) EQ + capacity adjustments by seismic grade"]}],
  src:"SNI 1726:2019 §7.8 · ASCE 7-22 §12.8 · GB 50011-2010 §5.2.1, 表5.2.5"},
 zh:{title:"地震基底剪力 — 等效侧力 / 底部剪力法",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 §7.8 / 🇺🇸 ASCE 7-22 §12.8",pts:[
    "<strong>V = Cs·W</strong>；Cs = SDS/(R/Ie)",
    "上限 Cs ≤ SD1/(T·R/Ie)（T≤TL）；下限 ≥0.044·SDS·Ie ≥0.01；S1≥0.6g 时 ≥0.5·S1/(R/Ie)",
    "周期 Ta = Ct·hn^x（RC 框架 0.0466/0.9；钢框架 0.0724/0.8）",
    "竖向分配 Fx = V·wx·hx^k/Σwi·hi^k（k 随 T 由 1→2）"]},
   {h:"🇨🇳 GB 50011-2010 §5.2（底部剪力法）",pts:[
    "<strong>FEk = α1·Geq</strong>，Geq = 0.85·GE",
    "α1 按反应谱（多遇 αmax：7 度 0.08、8 度 0.16、9 度 0.32）；Tg 按场地与分组",
    "楼层最小剪力系数 λ（表5.2.5）：7 度 <strong>0.016</strong>、8 度 0.032、9 度 0.064（T<3.5s）",
    "顶部附加 δn·FEk；小震弹性设计 + 按抗震等级的内力调整"]}],
  src:"SNI 1726:2019 §7.8 · ASCE 7-22 §12.8 · GB 50011-2010 §5.2.1、表5.2.5"}},

{id:"r-factor",
 kw:["response modification","r factor","r value","faktor modifikasi respons","behavior factor","ductility factor","seismic force resisting system","design coefficient","design coefficients","seismic coefficient factor","overstrength factor","omega0","omega 0","deflection amplification","cd factor","tabel 12","table 12.2-1","force resisting system","structural system factor","height limit seismic"],
 kw_zh:["反应修正","延性系数","抗震等级","设计系数","超强系数","位移放大系数","抗震体系系数","表12","侧力体系"],
 en:{title:"Response Modification R — System Comparison",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 Tabel 12 / 🇺🇸 ASCE 7-22 Table 12.2-1",pts:[
    "RC: SRPMK/SMF <strong>R=8</strong> (Ω0=3, Cd=5.5) · SRPMM R=5 · SRPMB R=3 · special shear wall R=5–6",
    "Steel: SMF R=8 · IMF 4.5 · OMF 3.5 · SCBF 6 · EBF 8 · BRBF 8 · SPSW 7",
    "Height & SDC limits apply (e.g. OMF/SRPMB prohibited in SDC D+)"]},
   {h:"🇨🇳 GB 50011-2010 (different philosophy)",pts:[
    "<strong>No R factor</strong> — members designed elastic for the frequent (≈63%/50yr) earthquake, ~1/2.8 of the design-basis shaking",
    "Ductility via <strong>seismic grades 一~四 (I–IV)</strong>: internal-force amplification (强柱弱梁 ηc, 强剪弱弯 ηvb) + detailing",
    "Deformation checked at rare EQ: elasto-plastic drift limits (frame 1/50)"]}],
  src:"SNI 1726:2019 Tabel 12 · ASCE 7-22 Table 12.2-1 · GB 50011-2010 §3.4, §6.2"},
 zh:{title:"反应修正系数 R — 体系对比",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 表12 / 🇺🇸 ASCE 7-22 表12.2-1",pts:[
    "混凝土：SRPMK/SMF <strong>R=8</strong>（Ω0=3、Cd=5.5）· SRPMM R=5 · SRPMB R=3 · 特殊剪力墙 5–6",
    "钢：SMF R=8 · IMF 4.5 · OMF 3.5 · SCBF 6 · EBF 8 · BRBF 8 · SPSW 7",
    "受高度与 SDC 限制（如 SDC D 以上禁用 OMF/SRPMB）"]},
   {h:"🇨🇳 GB 50011-2010（不同设计哲学）",pts:[
    "<strong>无 R 系数</strong> — 构件按多遇地震（约小震，≈设防的 1/2.8）弹性设计",
    "延性通过<strong>抗震等级（一~四级）</strong>实现：内力调整（强柱弱梁 ηc、强剪弱弯 ηvb）+ 构造措施",
    "罕遇地震校核弹塑性变形（框架 1/50）"]}],
  src:"SNI 1726:2019 表12 · ASCE 7-22 表12.2-1 · GB 50011-2010 §3.4、§6.2"}},

{id:"drift-limits",
 kw:["drift limit","story drift","storey drift","interstory drift","simpangan","drift ratio","lateral displacement limit","sway limit"],
 kw_zh:["层间位移","位移角","侧移限值","变形限值"],
 en:{title:"Storey Drift Limits",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 Tabel 20 / 🇺🇸 ASCE 7-22 Table 12.12-1 (design EQ, amplified Cd·δe/Ie)",pts:[
    "Most structures ≥ 4 storeys: <strong>Δa = 0.020·hsx</strong> (Risk I/II) · 0.015 (III) · <strong>0.010 (IV)</strong>",
    "Masonry shear-wall buildings: 0.007–0.010·hsx",
    "Wind serviceability (customary, not code-mandated): <strong>H/400–H/500</strong>, storey H/300–H/400 (10-yr wind)"]},
   {h:"🇨🇳 GB 50011-2010 表5.5.1 (frequent EQ, elastic θe)",pts:[
    "RC frame <strong>1/550</strong> · frame-shear wall / frame-tube 1/800 · shear wall & tube-in-tube <strong>1/1000</strong> · steel frame 1/250",
    "Rare EQ elasto-plastic (表5.5.5): RC frame <strong>1/50</strong>, frame-wall 1/100, walls 1/120, steel 1/50",
    "Wind (JGJ 3 / GB 50017): tall RC 1/500–1/1000 by system; steel H/500 typical"]}],
  src:"SNI 1726:2019 Tabel 20 · ASCE 7-22 Table 12.12-1, CC.2 · GB 50011-2010 表5.5.1, 表5.5.5 · JGJ 3-2010 §3.7"},
 zh:{title:"层间位移角限值",
  sections:[
   {h:"🇮🇩 SNI 1726:2019 表20 / 🇺🇸 ASCE 7-22 表12.12-1（设计地震，放大 Cd·δe/Ie）",pts:[
    "一般结构（≥4 层）：<strong>Δa = 0.020·hsx</strong>（I/II 类）· 0.015（III）· <strong>0.010（IV）</strong>",
    "砌体抗震墙建筑：0.007–0.010·hsx",
    "风（惯例非强制）：整体 <strong>H/400–H/500</strong>，层间 H/300–H/400（10 年风）"]},
   {h:"🇨🇳 GB 50011-2010 表5.5.1（多遇地震弹性 θe）",pts:[
    "钢筋混凝土框架 <strong>1/550</strong> · 框剪/框筒 1/800 · 剪力墙/筒中筒 <strong>1/1000</strong> · 钢框架 1/250",
    "罕遇弹塑性（表5.5.5）：RC 框架 <strong>1/50</strong>、框剪 1/100、墙 1/120、钢 1/50",
    "风（JGJ 3 / GB 50017）：高层混凝土按体系 1/500–1/1000；钢结构常取 H/500"]}],
  src:"SNI 1726:2019 表20 · ASCE 7-22 表12.12-1 · GB 50011-2010 表5.5.1、表5.5.5 · JGJ 3-2010 §3.7"}},

{id:"bolt-weld",
 kw:["bolt capacity","bolt strength","bolt shear","weld strength","fillet weld","weld capacity","baut","las","kekuatan baut","high strength bolt","anchor bolt","slip critical","slip-critical","pretension bolt","faying surface","bolt tension","fnv","fnt"],
 kw_zh:["螺栓","焊缝","角焊缝","高强螺栓","抗剪承载","摩擦型","预拉力","螺栓抗拉"],
 en:{title:"Bolt & Weld Design Strengths",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 / 🇺🇸 AISC 360-22 Table J3.2 (nominal Fnv, φ=0.75)",pts:[
    "Group A (A325/M20-30): shear <strong>Fnv = 372 MPa</strong> (threads incl., -N) / 457 (excl., -X); tension Fnt = 620",
    "Group B (A490): 457 / 579 MPa; tension 780",
    "M20 A325-N single shear: φRn = 0.75×372×245 mm² ≈ <strong>68 kN</strong>",
    "Bearing: φ·2.4·d·t·Fu (deformation-controlled); slip-critical per J3.8 (μ=0.30 Class A)"]},
   {h:"🇨🇳 GB 50017-2017 (design values, built-in γ)",pts:[
    "Ordinary bolts C-class (4.6/4.8): fvb = <strong>140 MPa</strong>; A/B class 5.6: 190; 8.8: <strong>250 MPa</strong>",
    "High-strength friction-grip 8.8/10.9: by pre-tension P & μ — design slip resistance 0.9·k·nf·μ·P",
    "Fillet welds: <strong>ffw = 160 MPa</strong> (E43 w/ Q235), 200 (E50 w/ Q355); throat he = 0.7hf",
    "🇺🇸 fillet: φ0.75×0.6×FEXX → E70 (485 MPa): design ≈ 0.218·FEXX per throat area"]}],
  src:"SNI 1729:2020 / AISC 360-22 Tables J3.2, J2.5 · GB 50017-2017 表11.4.2-1, 表11.5.2"},
 zh:{title:"螺栓与焊缝设计强度",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 / 🇺🇸 AISC 360-22 表J3.2（名义 Fnv，φ=0.75）",pts:[
    "A 组（A325）：抗剪 <strong>Fnv=372 MPa</strong>（含丝 -N）/457（不含丝 -X）；抗拉 620",
    "B 组（A490）：457/579；抗拉 780",
    "M20 A325-N 单剪：φRn = 0.75×372×245 ≈ <strong>68 kN</strong>",
    "承压 φ·2.4·d·t·Fu；摩擦型按 J3.8（A 级面 μ=0.30）"]},
   {h:"🇨🇳 GB 50017-2017（设计值，已含分项系数）",pts:[
    "C 级普通螺栓（4.6/4.8）：fvb = <strong>140 MPa</strong>；A/B 级 5.6：190；8.8：<strong>250 MPa</strong>",
    "高强摩擦型 8.8/10.9：按预拉力 P 与 μ — 抗滑移 0.9·k·nf·μ·P",
    "角焊缝：<strong>ffw = 160 MPa</strong>（E43 配 Q235）、200（E50 配 Q355）；喉高 he=0.7hf",
    "🇺🇸 角焊缝 φ0.75×0.6×FEXX → E70（485 MPa）"]}],
  src:"SNI 1729:2020 / AISC 360-22 表J3.2、J2.5 · GB 50017-2017 表11.4.2-1、表11.5.2"}},

{id:"slenderness",
 kw:["slenderness","slenderness ratio","kl/r","kelangsingan","buckling length","effective length","unbraced length"],
 kw_zh:["长细比","计算长度","容许长细比"],
 en:{title:"Slenderness Limits — Steel Members",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 / 🇺🇸 AISC 360-22",pts:[
    "Compression: <strong>KL/r ≤ 200</strong> (recommended, E2 user note)",
    "Tension: L/r ≤ 300 (recommended, D1)",
    "Seismic braces (AISC 341): SCBF KL/r ≤ 200; moderately ductile limits apply"]},
   {h:"🇨🇳 GB 50017-2017 §7.4.6–7.4.7",pts:[
    "Compression members: λ ≤ <strong>150</strong> (columns & main members), ≤ 200 (secondary, bracing)",
    "Tension members: λ ≤ <strong>300</strong> (general structures), ≤ 250 (members under heavy crane duty), ≤ 400 (pre-tensioned rods exempt)",
    "GB 50011 seismic braces: λ ≤ 120·√(235/fy) for concentric braces (Grade I–III)"]}],
  src:"SNI 1729:2020 / AISC 360-22 §D1, §E2 · AISC 341-22 · GB 50017-2017 表7.4.6, 表7.4.7 · GB 50011-2010 §8.4"},
 zh:{title:"钢构件容许长细比",
  sections:[
   {h:"🇮🇩 SNI 1729:2020 / 🇺🇸 AISC 360-22",pts:[
    "受压：<strong>KL/r ≤ 200</strong>（建议值，E2 注）",
    "受拉：L/r ≤ 300（建议值，D1）",
    "抗震支撑（AISC 341）：SCBF KL/r ≤ 200"]},
   {h:"🇨🇳 GB 50017-2017 §7.4.6–7.4.7",pts:[
    "受压构件：λ ≤ <strong>150</strong>（柱及主要构件）、≤200（次要构件、支撑）",
    "受拉构件：λ ≤ <strong>300</strong>（一般）、≤250（重级吊车工作制）",
    "GB 50011 抗震中心支撑：λ ≤ 120·√(235/fy)（一~三级）"]}],
  src:"SNI 1729:2020 / AISC 360-22 §D1、§E2 · AISC 341-22 · GB 50017-2017 表7.4.6、7.4.7 · GB 50011-2010 §8.4"}},

{id:"bearing-capacity",
 kw:["bearing capacity","allowable bearing","daya dukung","soil bearing","qa allowable","ultimate bearing","foundation pressure"],
 kw_zh:["承载力","地基承载力","承载力特征值"],
 en:{title:"Shallow Foundation Bearing Capacity",
  sections:[
   {h:"🧮 Classic ultimate formula (SNI 8460:2017 §7 basis)",pts:[
    "<strong>qu = c·Nc + q·Nq + 0.5·γ·B·Nγ</strong> (Terzaghi/Meyerhof; shape, depth, inclination factors apply)",
    "Allowable qa = qu/FS, <strong>FS ≥ 3.0 static</strong>, ≥ 2.0 seismic (SNI 8460)",
    "Typical presumptive qa: dense sand 300–600 kPa · medium sand 100–300 · stiff clay 150–300 · soft clay < 75"]},
   {h:"🇨🇳 GB 50007-2011 §5.2 (characteristic-value method)",pts:[
    "From load tests/SPT tables → fak, then corrected: <strong>fa = fak + ηb·γ·(b−3) + ηd·γm·(d−0.5)</strong>",
    "ηb, ηd by soil type (表5.2.4): e.g. clay ηb=0.3, ηd=1.6; dense sand ηb=2.0, ηd=3.0",
    "Verify: pk ≤ fa (axial) and pkmax ≤ 1.2·fa (eccentric edge)",
    "Soft underlying layer check §5.2.7; eccentricity e ≤ b/6 recommended"]}],
  src:"SNI 8460:2017 §7.4 · GB 50007-2011 §5.2, 表5.2.4 · Terzaghi/Meyerhof theory"},
 zh:{title:"浅基础地基承载力",
  sections:[
   {h:"🧮 经典极限公式（SNI 8460:2017 §7 基础）",pts:[
    "<strong>qu = c·Nc + q·Nq + 0.5·γ·B·Nγ</strong>（太沙基/迈耶霍夫；含形状、深度、倾斜修正）",
    "容许值 qa = qu/FS，<strong>静载 FS ≥ 3.0</strong>、地震 ≥2.0（SNI 8460）",
    "典型经验值：密砂 300–600 kPa · 中密砂 100–300 · 硬黏土 150–300 · 软黏土 <75"]},
   {h:"🇨🇳 GB 50007-2011 §5.2（特征值法）",pts:[
    "由载荷试验/查表得 fak，再修正：<strong>fa = fak + ηb·γ·(b−3) + ηd·γm·(d−0.5)</strong>",
    "ηb、ηd 按土类（表5.2.4）：黏土 0.3/1.6；密砂 2.0/3.0",
    "验算：pk ≤ fa（轴心）、pkmax ≤ 1.2·fa（偏心边缘）",
    "软弱下卧层验算 §5.2.7；偏心距宜 e ≤ b/6"]}],
  src:"SNI 8460:2017 §7.4 · GB 50007-2011 §5.2、表5.2.4 · 太沙基/迈耶霍夫理论"}},

{id:"pile-capacity",
 kw:["pile capacity","pile bearing","axial pile","kapasitas tiang","daya dukung tiang","pile design","skin friction","end bearing","pile load test"],
 kw_zh:["单桩承载力","桩承载力","侧摩阻","端阻"],
 en:{title:"Single Pile Axial Capacity",
  sections:[
   {h:"🇮🇩 SNI 8460:2017 §9 / general practice",pts:[
    "<strong>Qu = Qs + Qp = Σ(fs·As) + qp·Ap</strong> (skin friction + end bearing)",
    "Allowable Qa = Qu/FS: <strong>FS = 2.5–3.0</strong> (calculation only), 2.0 with static load test",
    "SPT (Meyerhof, driven): qp ≈ 40·N·(L/D) ≤ 400·N kPa (sand); fs ≈ 2·N kPa (sand), α·cu (clay)",
    "Static load test: ≥ 1 test or ≥ 1% of piles (min recommended); PDA dynamic as supplement"]},
   {h:"🇨🇳 JGJ 94-2008 §5.3",pts:[
    "Characteristic: <strong>Quk = u·Σqsik·li + qpk·Ap</strong> (qsik, qpk from 表5.3.5-1/2 by soil & pile type)",
    "Design resistance <strong>Ra = Quk/K, K = 2.0</strong>",
    "Negative skin friction on consolidating soft sites (§5.4); group effect & cap interaction per §5.2",
    "Verification static load test: 1% of piles, ≥ 3 piles (JGJ 106)"]}],
  src:"SNI 8460:2017 §9.3–9.5 · JGJ 94-2008 §5.2–5.4, 表5.3.5 · JGJ 106 (testing) · ACI 543R-12"},
 zh:{title:"单桩轴向承载力",
  sections:[
   {h:"🇮🇩 SNI 8460:2017 §9 / 通用做法",pts:[
    "<strong>Qu = Qs + Qp = Σ(fs·As) + qp·Ap</strong>（侧阻+端阻）",
    "容许值 Qa = Qu/FS：仅计算 <strong>FS=2.5–3.0</strong>；有静载试验 2.0",
    "SPT 法（迈耶霍夫，打入桩）：qp ≈ 40·N·(L/D) ≤ 400·N kPa（砂）；fs ≈ 2·N kPa（砂）、α·cu（黏土）",
    "静载试验 ≥1% 桩数；PDA 动测作补充"]},
   {h:"🇨🇳 JGJ 94-2008 §5.3",pts:[
    "特征值：<strong>Quk = u·Σqsik·li + qpk·Ap</strong>（qsik、qpk 查表5.3.5-1/2）",
    "设计取 <strong>Ra = Quk/K，K = 2.0</strong>",
    "固结软土场地验算负摩阻力（§5.4）；群桩效应按 §5.2",
    "静载检验：1% 且 ≥3 根（JGJ 106）"]}],
  src:"SNI 8460:2017 §9.3–9.5 · JGJ 94-2008 §5.2–5.4、表5.3.5 · JGJ 106（检测） · ACI 543R-12"}},

{id:"retaining-slope",
 kw:["retaining wall","earth pressure","slope stability","dinding penahan","tekanan tanah","kestabilan lereng","active pressure","passive pressure","sliding overturning"],
 kw_zh:["挡土墙","土压力","边坡稳定","抗滑移","抗倾覆"],
 en:{title:"Retaining Walls & Slope Stability — Safety Factors",
  sections:[
   {h:"🌍 Earth pressure (all systems, Rankine/Coulomb)",pts:[
    "Active <strong>Ka = tan²(45°−φ/2)</strong> · Passive Kp = tan²(45°+φ/2) · At-rest K0 = 1−sinφ",
    "φ=30°: Ka=0.333, Kp=3.0, K0=0.50; add water pressure below GWT separately"]},
   {h:"✅ Stability factors",pts:[
    "🇮🇩 SNI 8460:2017: sliding <strong>FS ≥ 1.5</strong> · overturning ≥ 2.0 · bearing ≥ 3.0 · global slope ≥ 1.5 (static), ≥ 1.1–1.2 (seismic)",
    "🇨🇳 GB 50007-2011 §6.7: anti-sliding <strong>Kc ≥ 1.3</strong> · anti-overturning Kt ≥ 1.6 (GB 55003: 1.35/1.6)",
    "🇺🇸 practice (IBC/AASHTO): sliding 1.5, overturning 1.5–2.0; eccentricity within middle third",
    "Seismic earth pressure: Mononobe–Okabe (SNI 8460 §10 / GB 50011 附录)"]}],
  src:"SNI 8460:2017 §8, §11 · GB 50007-2011 §6.7 · GB 55003-2021 · IBC 2021 §1807"},
 zh:{title:"挡土墙与边坡稳定 — 安全系数",
  sections:[
   {h:"🌍 土压力（朗肯/库仑，各体系通用）",pts:[
    "主动 <strong>Ka = tan²(45°−φ/2)</strong> · 被动 Kp = tan²(45°+φ/2) · 静止 K0 = 1−sinφ",
    "φ=30°：Ka=0.333、Kp=3.0、K0=0.50；地下水位以下另加水压"]},
   {h:"✅ 稳定安全系数",pts:[
    "🇮🇩 SNI 8460:2017：抗滑 <strong>FS ≥ 1.5</strong> · 抗倾覆 ≥2.0 · 地基承载 ≥3.0 · 整体边坡 ≥1.5（静）、≥1.1–1.2（震）",
    "🇨🇳 GB 50007-2011 §6.7：抗滑移 <strong>Kc ≥ 1.3</strong> · 抗倾覆 Kt ≥ 1.6（GB 55003：1.35/1.6）",
    "🇺🇸 惯例（IBC/AASHTO）：抗滑 1.5、抗倾覆 1.5–2.0；合力宜在中三分点内",
    "地震土压力：Mononobe–Okabe 法（SNI 8460 §10 / GB 50011 附录）"]}],
  src:"SNI 8460:2017 §8、§11 · GB 50007-2011 §6.7 · GB 55003-2021 · IBC 2021 §1807"}},

{id:"rebar-areas",
 kw:["rebar area","bar area","luas tulangan","diameter tulangan","rebar table","bar sizes","d16 area","reinforcement area per meter"],
 kw_zh:["钢筋面积","钢筋直径","每米面积","钢筋表"],
 en:{title:"Rebar Areas — Quick Table",
  sections:[
   {h:"Single bar areas (mm²) — Indonesian D / Chinese φ (same nominal)",pts:[
    "D10/φ10: <strong>78.5</strong> · D13: 132.7 · φ12: 113.1 · D16/φ16: <strong>201.1</strong> · D19: 283.5 · φ20: 314.2",
    "D22/φ22: 380.1 · D25/φ25: <strong>490.9</strong> · φ28: 615.8 · D29: 660.5 · D32/φ32: 804.2",
    "US: #4 (12.7) = 129 · #5 = 200 · #6 = 284 · #8 = 510 mm²"]},
   {h:"Per metre of slab: As = 1000·Ab/s",pts:[
    "D10: @200 → 393 · @150 → <strong>523</strong> · @100 → 785 mm²/m",
    "D13: @200 → 663 · @150 → 885 · D16: @200 → 1005 · @150 → <strong>1340</strong> mm²/m",
    "Pick spacing so As ≥ As,min (e.g. 0.0018×120×1000 = 216 mm²/m → D10-300 OK)"]}],
  src:"SNI 2052:2017 (bar series) · GB 1499.2 (HRB series) · ASTM A615 (#bars)"},
 zh:{title:"钢筋面积速查表",
  sections:[
   {h:"单根面积（mm²）— 印尼 D / 中国 φ（同公称直径）",pts:[
    "D10/φ10：<strong>78.5</strong> · D13：132.7 · φ12：113.1 · D16/φ16：<strong>201.1</strong> · D19：283.5 · φ20：314.2",
    "D22/φ22：380.1 · D25/φ25：<strong>490.9</strong> · φ28：615.8 · D32/φ32：804.2",
    "美标：#4=129 · #5=200 · #6=284 · #8=510 mm²"]},
   {h:"板每米面积：As = 1000·Ab/s",pts:[
    "D10：@200→393 · @150→<strong>523</strong> · @100→785 mm²/m",
    "D13：@200→663 · @150→885；D16：@200→1005 · @150→<strong>1340</strong> mm²/m",
    "按 As ≥ As,min 选间距（如 0.0018×120×1000=216 mm²/m → D10-300 即可）"]}],
  src:"SNI 2052:2017 · GB 1499.2（HRB 系列） · ASTM A615（#钢筋）"}},

{id:"concrete-cover-card",
 kw:["concrete cover","selimut beton","cover requirement","clear cover","cover thickness"],
 kw_zh:["保护层","保护层厚度","混凝土保护层"],
 en:{title:"Concrete Cover — Quick Answer",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847:2019 / ACI 318-19 (cast-in-place, non-prestressed)",pts:[
    "Cast against earth: <strong>75 mm</strong> · exposed to weather: 50 mm (>D16) / 40 mm (≤D16)",
    "Not exposed: beams/columns <strong>40 mm</strong> · slabs/walls 20 mm",
    "Marine splash: 65 mm practice; corrosive environments per durability chapter"]},
   {h:"🇨🇳 GB 50010-2010 表8.2.1 (C30+, to OUTERMOST bar incl. stirrup)",pts:[
    "Env 一 (indoor dry): slab/wall <strong>15 mm</strong>, beam/column <strong>20 mm</strong>",
    "二a: 20/25 · 二b: 25/35 · 三a: 30/40 · 三b: 40/50 mm",
    "≤C25 concrete: +5 mm; foundations with blinding: ≥ 40 mm; note GB measures to stirrup, ACI/SNI to same (outermost reinforcement) — definitions align"]}],
  src:"SNI 2847:2019 表20.6.1.3 · ACI 318-19 Table 20.6.1.3 · GB 50010-2010 表8.2.1"},
 zh:{title:"混凝土保护层 — 快速解答",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847:2019 / ACI 318-19（现浇非预应力）",pts:[
    "直接浇筑于土壤：<strong>75 mm</strong> · 露天：50 mm（>D16）/40 mm（≤D16）",
    "非露天：梁柱 <strong>40 mm</strong> · 板墙 20 mm",
    "海洋浪溅区：惯例 65 mm；腐蚀环境按耐久性章节"]},
   {h:"🇨🇳 GB 50010-2010 表8.2.1（C30 及以上，至最外层钢筋含箍筋）",pts:[
    "一类（室内干燥）：板墙 <strong>15 mm</strong>、梁柱 <strong>20 mm</strong>",
    "二a：20/25 · 二b：25/35 · 三a：30/40 · 三b：40/50 mm",
    "≤C25 时 +5 mm；有垫层基础 ≥40 mm"]}],
  src:"SNI 2847:2019 表20.6.1.3 · ACI 318-19 表20.6.1.3 · GB 50010-2010 表8.2.1"}},

{id:"punching-shear",
 kw:["punching shear","two way shear","flat slab shear","geser pons","punching capacity","drop panel"],
 kw_zh:["冲切","抗冲切","板冲切"],
 en:{title:"Punching (Two-Way) Shear — Flat Slabs & Footings",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §22.6 / 🇺🇸 ACI 318-19",pts:[
    "Critical perimeter b0 at <strong>d/2</strong> from column face",
    "vc = min( 0.33λ√fc′ , 0.17(1+2/β)λ√fc′ , 0.083(2+αs·d/b0)λ√fc′ ) — λs size factor in ACI 318-19",
    "φ = 0.75; if vu > φvc → studrails/stirrups (max 0.66√fc′) or thicker slab/drop panel",
    "Moment transfer: γv fraction adds shear stress (§8.4.4)"]},
   {h:"🇨🇳 GB 50010-2010 §6.5",pts:[
    "Critical section at <strong>h0/2</strong>; Fl ≤ 0.7·βh·ft·η·um·h0 (no shear reinforcement)",
    "βh: 1.0 (h ≤ 800) → 0.9 (h ≥ 2000); η accounts for column position/eccentricity",
    "With reinforcement: ≤ 1.2·ft·η·um·h0; capacity with studs/stirrups per §6.5.3"]}],
  src:"SNI 2847:2019 §22.6 · ACI 318-19 §22.6.5 · GB 50010-2010 §6.5.1–6.5.3"},
 zh:{title:"冲切（双向剪切）— 无梁板与基础",
  sections:[
   {h:"🇮🇩 SNI 2847:2019 §22.6 / 🇺🇸 ACI 318-19",pts:[
    "临界周边 b0 距柱边 <strong>d/2</strong>",
    "vc = min( 0.33λ√fc′ , 0.17(1+2/β)λ√fc′ , 0.083(2+αs·d/b0)λ√fc′ )（ACI 318-19 计入尺寸效应 λs）",
    "φ=0.75；vu > φvc 时 → 抗冲切栓钉/箍筋（上限 0.66√fc′）或加厚板/柱帽",
    "不平衡弯矩传递：γv 份额增加剪应力（§8.4.4）"]},
   {h:"🇨🇳 GB 50010-2010 §6.5",pts:[
    "临界截面距柱边 <strong>h0/2</strong>；无抗冲切钢筋：Fl ≤ 0.7·βh·ft·η·um·h0",
    "βh：h≤800 取 1.0 → h≥2000 取 0.9；η 计入柱位置/偏心",
    "配抗冲切钢筋时 ≤1.2·ft·η·um·h0；承载力按 §6.5.3"]}],
  src:"SNI 2847:2019 §22.6 · ACI 318-19 §22.6.5 · GB 50010-2010 §6.5.1–6.5.3"}},

{id:"concrete-test",
 kw:["concrete test","slump","acceptance criteria","uji beton","slump test","cylinder test","sampling","quality control concrete","compressive test"],
 kw_zh:["试块","验收","坍落度","混凝土试验","合格评定"],
 en:{title:"Concrete Testing & Acceptance Criteria",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847 §26.12 / ACI 318 (cylinder 150×300)",pts:[
    "Sampling: ≥ 1 set per <strong>110 m³</strong> or 460 m² slab/wall per class per day (min 5 sets per project)",
    "Acceptance: (a) every 3-consecutive average ≥ fc′ AND (b) no single result < fc′ − 3.5 MPa (fc′ ≤ 35) / < 0.9fc′ (fc′ > 35)",
    "Slump (typical spec): 75 ± 25 mm conventional; SCC by flow table",
    "ASTM C39 (test method) & C94 (ready-mix) govern procedure"]},
   {h:"🇨🇳 GB 50107 / GB 50204 (cube 150)",pts:[
    "Statistical method: mfcu − λ1·Sfcu ≥ fcu,k and fcu,min ≥ λ2·fcu,k",
    "Non-statistical (small lots, <10 groups): mfcu ≥ <strong>1.15·fcu,k</strong> and fcu,min ≥ 0.95·fcu,k",
    "Sampling: 1 group/100 m³ and per shift/floor; standard cure 28 d, 同条件 (field-cured) sets for formwork removal & seismic verification"]}],
  src:"SNI 2847:2019 §26.12 · ACI 318-19 §26.12.3 · ASTM C39 / C94 (in library) · GB 50107-2010 · GB 50204-2015"},
 zh:{title:"混凝土试验与合格评定",
  sections:[
   {h:"🇮🇩🇺🇸 SNI 2847 §26.12 / ACI 318（150×300 圆柱体）",pts:[
    "取样：每 <strong>110 m³</strong> 或 460 m² 板墙、每等级每天 ≥1 组（工程 ≥5 组）",
    "评定：(a) 任意连续 3 组平均 ≥ fc′ 且 (b) 单组不低于 fc′−3.5 MPa（fc′≤35）/0.9fc′（>35）",
    "坍落度（常用规定）：普通 75±25 mm；自密实按扩展度",
    "试验方法 ASTM C39、预拌 C94（库内有原文）"]},
   {h:"🇨🇳 GB 50107 / GB 50204（150 立方体）",pts:[
    "统计法：mfcu − λ1·Sfcu ≥ fcu,k 且 fcu,min ≥ λ2·fcu,k",
    "非统计法（<10 组）：mfcu ≥ <strong>1.15·fcu,k</strong> 且 fcu,min ≥ 0.95·fcu,k",
    "取样：每 100 m³ 且每台班/楼层 1 组；标养 28 d，同条件试件用于拆模与实体检验"]}],
  src:"SNI 2847:2019 §26.12 · ACI 318-19 §26.12.3 · ASTM C39/C94 · GB 50107-2010 · GB 50204-2015"}},

{id:"fire-access-road",
 kw:["fire access road","fire lane","fire apparatus access","access road fire","jalur lingkungan","jalan lingkungan","akses pemadam","hardstanding","perkerasan","fire truck access","jalur akses pemadam","environmental access"],
 kw_zh:["消防车道","登高场地","扑救场地","消防车","环境消防"],
 en:{title:"Fire Apparatus Access Roads & Hardstanding",
  sections:[
   {h:"🇮🇩 SNI 03-1735-2000 §4 (access roads & hardstanding / perkerasan)",pts:[
    "Hardstanding required when top occupied floor <strong>&gt; 10 m</strong> above grade; below that only a 4 m operational strip reachable ≤ 45 m from the truck route",
    "Hardstanding: <strong>width ≥ 6 m, length ≥ 15 m</strong>; other access-road parts ≥ 4 m; nearest edge 2–10 m from the access opening centre",
    "Floor &gt; 24 m: must carry a <strong>44-tonne</strong> fire truck on jack feet; gradient ≤ 1:15 (road ≤ 1:8.5); clear height ≥ 5 m; turning radius ≥ 10.5 m",
    "Access road (floor &gt; 10 m): ≥ 6 m wide, ≥ 2 m off the building, on ≥ 2 sides",
    "Perimeter coverage by building volume (Tabel 4.2.3): &lt;7,100 m³ → 1/6; &gt;28,000 → 1/4; &gt;56,800 → 1/2; &gt;85,200 → 3/4; <strong>&gt;113,600 m³ → full perimeter</strong>"]},
   {h:"🇨🇳 GB 50016-2014 §7 / 🇺🇸 IFC · NFPA 1",pts:[
    "GB fire lane (消防车道): clear width ≥ <strong>4.0 m</strong>, clear height ≥ 4.0 m; high-rise needs a lane on ≥ 1 long side or ≥ 1/4 perimeter; turnaround ≥ 12×12 m (15×15 / 18×18 m high-rise)",
    "US apparatus access road: ≥ <strong>6.1 m (20 ft)</strong> wide, ≥ 4.1 m (13.5 ft) clear, within 46 m (150 ft) of all building portions; dead-end &gt; 46 m → turnaround"]}],
  src:"SNI 03-1735-2000 §4 & Tabel 4.2.3 · GB 50016-2014 §7.1–7.2 · IFC/NFPA 1 §503 (in library: Permen 26/2008)"},
 zh:{title:"消防车道与登高扑救场地",
  sections:[
   {h:"🇮🇩 SNI 03-1735-2000 §4（消防车道与硬地 / perkerasan）",pts:[
    "最高居住楼面 <strong>&gt; 10 m</strong> 时须设扑救硬地；10 m 以下仅需 4 m 操作带，且距消防车道 ≤ 45 m",
    "硬地：<strong>宽 ≥ 6 m、长 ≥ 15 m</strong>；通道其他部位 ≥ 4 m；最近边距扑救口中心 2–10 m",
    "楼面 &gt; 24 m：须承受 <strong>44 吨</strong> 消防车支腿载；坡度 ≤ 1:15（车道 ≤ 1:8.5）；净高 ≥ 5 m；回转半径 ≥ 10.5 m",
    "消防车道（楼面 &gt; 10 m）：宽 ≥ 6 m，距建筑 ≥ 2 m，≥ 2 侧设置",
    "按体积的周长覆盖（表4.2.3）：&lt;7,100 m³→1/6；&gt;28,000→1/4；&gt;56,800→1/2；&gt;85,200→3/4；<strong>&gt;113,600 m³→全周长</strong>"]},
   {h:"🇨🇳 GB 50016-2014 §7 / 🇺🇸 IFC · NFPA 1",pts:[
    "GB 消防车道：净宽 ≥ <strong>4.0 m</strong>、净高 ≥ 4.0 m；高层沿 ≥ 1 长边或 ≥ 1/4 周长；回车场 ≥ 12×12 m（高层 15×15 / 18×18 m）",
    "美标消防车道：净宽 ≥ <strong>6.1 m</strong>、净高 ≥ 4.1 m，距各部位 ≤ 46 m；尽头 &gt; 46 m 设回车场"]}],
  src:"SNI 03-1735-2000 §4、表4.2.3 · GB 50016-2014 §7.1–7.2 · IFC/NFPA 1 §503"}},

{id:"fire-hydrant",
 kw:["yard hydrant","fire hydrant","hidran","hidran halaman","fire water supply","hydrant water supply","hydrant spacing","outdoor hydrant","fire flow","water supply fire","fire pump","standpipe"],
 kw_zh:["消火栓","室外消火栓","消防给水","消防用水","消防水量","消火栓间距"],
 en:{title:"Fire Hydrants & Water Supply",
  sections:[
   {h:"🇮🇩 SNI 03-1735-2000 §5 (yard hydrants / hidran halaman, Tabel 5.4)",pts:[
    "Every part of the fire-truck route must be ≤ <strong>50 m</strong> from a city hydrant, else provide yard hydrants within 50 m radius",
    "Minimum supply ≥ 2,400 L/min (§5.3)",
    "Residential: 1 hydrant, <strong>≥ 38 L/s @ 3.5 bar</strong>, 45 min storage",
    "Non-residential &lt; 1,000 m²: 2 hydrants — 38 L/s + 19 L/s @ 3.5 bar, 45 min; <strong>each +1,000 m² → +1 hydrant +1,200 L/min</strong>"]},
   {h:"🇨🇳 GB 50974-2014 / 🇺🇸 NFPA 24 · IFC App. B",pts:[
    "GB outdoor hydrant flow ≈ 15–40 L/s by volume/occupancy; spacing ≤ <strong>120 m</strong>, ≤ 150 m from building, ≥ 5 m from wall, ≤ 40 m from pumper inlet",
    "US required fire flow (IFC App. B): <strong>1,000–8,000 gpm</strong> by area & construction; hydrant spacing per Table C102.1 (typ. 90–150 m)",
    "Indoor standpipe (NFPA 14 Class I): 500 gpm first riser + 250 gpm each additional, 100 psi residual at top"]}],
  src:"SNI 03-1735-2000 §5 & Tabel 5.4 · GB 50974-2014 · NFPA 14/24 · IFC Appendix B/C"},
 zh:{title:"消火栓与消防给水",
  sections:[
   {h:"🇮🇩 SNI 03-1735-2000 §5（室外消火栓 / hidran halaman，表5.4）",pts:[
    "消防车道各部位距市政消火栓 ≤ <strong>50 m</strong>，否则在 50 m 半径内设室外消火栓",
    "最小供水 ≥ 2,400 L/min（§5.3）",
    "住宅：1 个，<strong>≥ 38 L/s @ 3.5 bar</strong>，储水 45 min",
    "非住宅 &lt; 1,000 m²：2 个 — 38 L/s + 19 L/s @ 3.5 bar，45 min；<strong>每增 1,000 m²→+1 个 +1,200 L/min</strong>"]},
   {h:"🇨🇳 GB 50974-2014 / 🇺🇸 NFPA 24 · IFC 附录 B",pts:[
    "GB 室外消火栓流量约 15–40 L/s（按体积/功能）；间距 ≤ <strong>120 m</strong>，距建筑 ≤ 150 m，距墙 ≥ 5 m，距水泵接合器 ≤ 40 m",
    "美标消防用水量（IFC 附录 B）：按面积与构造 <strong>1,000–8,000 gpm</strong>；间距按表 C102.1（约 90–150 m）",
    "室内消火栓（NFPA 14 I 类）：首立管 500 gpm + 每增 250 gpm，顶部剩余 100 psi"]}],
  src:"SNI 03-1735-2000 §5、表5.4 · GB 50974-2014 · NFPA 14/24 · IFC 附录 B/C"}},

{id:"fire-resistance-rating",
 kw:["fire resistance rating","fire rating","fire resistance","tka","tingkat ketahanan api","ketahanan api","construction type fire","fire resistance hours","compartment","fire separation","fire wall"],
 kw_zh:["耐火等级","耐火极限","防火分区","防火间距","防火墙","构件耐火"],
 en:{title:"Fire Resistance Rating, Compartments & Separation",
  sections:[
   {h:"Fire resistance — highest grade (h)",pts:[
    "🇮🇩 Permen 26/2008 Type I & SNI 1736: columns/load-bearing walls <strong>3 h</strong>, beams 2–3 h, floor 2 h, stair enclosure 2 h (TKA = adequacy/integrity/insulation in min)",
    "🇨🇳 GB 50016 Class I (一级): columns <strong>3.0 h</strong>, beams 2.0 h, floor 1.5 h; Class II 2.5/1.5/1.0 h; Class III 2.0 h columns; Class IV 0.5 h",
    "🇺🇸 IBC Type I-A: primary structure 3 h, floor 2 h; I-B 2 h; II-A 1 h"]},
   {h:"Compartment area & fire separation (🇨🇳 GB 50016-2014)",pts:[
    "Max compartment: single/multi-storey civil (一/二级) <strong>2,500 m²</strong>; high-rise 1,500 m²; underground 500 m² — all <strong>×2 with sprinklers</strong>",
    "Fire separation between buildings: Class I/II↔I/II ≥ <strong>6 m</strong> (≥7 m to III, ≥9 m to IV); high-rise↔high-rise ≥ 13 m",
    "🇺🇸 IBC: allowable area per Table 506.2; separation by fire-separation distance & % unprotected openings (Table 705.8)"]}],
  src:"SNI 03-1736-2000 · Permen 26/2008 Tabel 1 · GB 50016-2014 §5.1–5.3, §5.2.2 · IBC 2018 Tables 506.2, 601, 705.8"},
 zh:{title:"耐火极限、防火分区与防火间距",
  sections:[
   {h:"耐火极限 — 最高等级（h）",pts:[
    "🇮🇩 条例 26/2008 I 型与 SNI 1736：柱/承重墙 <strong>3 h</strong>，梁 2–3 h，楼板 2 h，楼梯间 2 h（TKA = 承载/完整性/隔热，分钟）",
    "🇨🇳 GB 50016 一级：柱 <strong>3.0 h</strong>，梁 2.0 h，楼板 1.5 h；二级 2.5/1.5/1.0 h；三级柱 2.0 h；四级 0.5 h",
    "🇺🇸 IBC I-A 型：主要结构 3 h，楼板 2 h；I-B 2 h；II-A 1 h"]},
   {h:"防火分区面积与防火间距（🇨🇳 GB 50016-2014）",pts:[
    "最大防火分区：单/多层民用（一/二级）<strong>2,500 m²</strong>；高层 1,500 m²；地下 500 m² — 设喷淋均 <strong>×2</strong>",
    "建筑间防火间距：一/二级↔一/二级 ≥ <strong>6 m</strong>（至三级 ≥7 m，至四级 ≥9 m）；高层↔高层 ≥ 13 m",
    "🇺🇸 IBC：允许面积按表 506.2；间距按防火间距与未保护洞口比例（表 705.8）"]}],
  src:"SNI 03-1736-2000 · 条例 26/2008 表1 · GB 50016-2014 §5.1–5.3、§5.2.2 · IBC 2018 表 506.2、601、705.8"}},

{id:"fire-egress",
 kw:["travel distance","egress","means of escape","exit access","jarak tempuh","evacuation distance","dead end corridor","exit width","number of exits","escape route","jalur evakuasi","eksit"],
 kw_zh:["疏散距离","安全疏散","袋形走道","安全出口","疏散宽度","疏散通道","疏散人数"],
 en:{title:"Means of Escape / Egress",
  sections:[
   {h:"🇮🇩 SNI / Permen 26/2008 (≈ NFPA 101)",pts:[
    "Exit-access min width <strong>915 mm</strong> (new) / 710 mm (existing); ≥ 2 exits per storey/area",
    "<strong>Dead-end corridor ≤ 6 m</strong>",
    "Travel distance to exit: office ≈ 45 m (non-sprinklered) / 60–76 m (sprinklered); assembly ≈ 30 / 45 m",
    "Extinguisher (APAR) travel: Class A ≤ 23 m · Class B ≤ 15 m · Class K ≤ 9 m"]},
   {h:"🇨🇳 GB 50016-2014 §5.5",pts:[
    "Door ≥ <strong>0.90 m</strong>, corridor ≥ 1.10–1.40 m, stair ≥ 1.10–1.30 m",
    "Dead-end (袋形走道): room door → nearest exit ≤ <strong>20–22 m</strong> (+25% with sprinklers)",
    "Evacuation width ≈ 0.65–1.00 m per 100 persons (by storey & occupancy); ≥ 2 safe exits (single exit only in limited cases)"]}],
  src:"Permen 26/2008 §3.11 & §5.6 · NFPA 101 · GB 50016-2014 §5.5.8–5.5.18, Table 5.5.17"},
 zh:{title:"安全疏散",
  sections:[
   {h:"🇮🇩 SNI / 条例 26/2008（≈ NFPA 101）",pts:[
    "疏散通道最小宽度 <strong>915 mm</strong>（新）/ 710 mm（既有）；每层/区 ≥ 2 个安全出口",
    "<strong>袋形走道 ≤ 6 m</strong>",
    "至出口疏散距离：办公约 45 m（未喷淋）/ 60–76 m（设喷淋）；集会约 30 / 45 m",
    "灭火器（APAR）保护距离：A 类 ≤ 23 m · B 类 ≤ 15 m · K 类 ≤ 9 m"]},
   {h:"🇨🇳 GB 50016-2014 §5.5",pts:[
    "门 ≥ <strong>0.90 m</strong>，走道 ≥ 1.10–1.40 m，楼梯 ≥ 1.10–1.30 m",
    "袋形走道：房间门 → 最近安全出口 ≤ <strong>20–22 m</strong>（设喷淋 +25%）",
    "疏散宽度 ≈ 每 100 人 0.65–1.00 m（按层与功能）；≥ 2 个安全出口（个别情况可 1 个）"]}],
  src:"条例 26/2008 §3.11、§5.6 · NFPA 101 · GB 50016-2014 §5.5.8–5.5.18、表 5.5.17"}}

];
