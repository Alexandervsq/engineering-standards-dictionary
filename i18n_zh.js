// ================================================================
// Engineering Standards Dictionary — Simplified Chinese (简体中文) pack
// Loaded after the main script; populates window.ZH and merges
// Chinese fields into KB / SITE_GEO. English remains the source HTML.
// ================================================================
(function(){
"use strict";

// ── Static UI + JS-label dictionary ────────────────────────────
window.ZH = {
  // header / nav
  "hdr.title":"工程标准词典",
  "hdr.sub":"多专业土木 / 结构 / 岩土工程参考",
  "hdr.credit":"由 <strong>乔书亚 Alexander</strong> 倾情呈献 — CCEPC Indonesia | 都市环保印尼公司",
  "nav.search":"检索",
  "nav.browse":"标准浏览",
  "nav.seismic":"抗震工具",
  "nav.site":"场地分析",
  "nav.about":"关于 / 部署",
  // hero
  "hero.h1":"工程标准检索",
  "hero.p":"检索 80 余部印尼、美国和中国标准，支持自然语言提问。",
  "hero.btn":"检索",
  "hero.ph":"例如：混凝土保护层要求 · 钢结构抗震构造 · 地基承载力 · 北马鲁古电厂",
  "chip.concrete":"🏗 混凝土",
  "chip.steel":"🔩 钢结构",
  "chip.foundation":"🏚 地基基础",
  "chip.loads":"📐 设计荷载",
  "chip.seismic":"🌍 抗震",
  "chip.wind":"🌬 风荷载",
  "chip.rain":"🌧 雨荷载",
  "chip.purlin":"🏠 檩条",
  "chip.ftype":"🧱 基础类型",
  "chip.pp":"⚡ 电厂（示例）",
  "chip.site":"📡 场地分析（风·雨·土）",
  "badge.sni":"🇮🇩 印尼标准 (SNI)",
  "badge.amer":"🇺🇸 美国标准 (ACI/AISC/ASCE)",
  "badge.cn":"🇨🇳 中国标准 (GB/JGJ)",
  // browse filters
  "b.all":"全部标准","b.sni":"🇮🇩 印尼标准 (SNI)","b.amer":"🇺🇸 美国标准","b.cn":"🇨🇳 中国标准 (GB)",
  "b.seismic":"抗震","b.structural":"结构","b.concrete":"混凝土","b.steel":"钢结构",
  "b.geo":"岩土","b.found":"基础","b.loads":"荷载","b.windrain":"风 / 雨","b.purlin":"檩条","b.fire":"防火 / 安全",
  // browse card labels
  "b.scope":"范围","b.kp":"关键参数","b.preview":"文本摘录预览","b.src":"来源","b.details":"详情",
  "b.ask":"🔎 查询词典","b.dl":"📥 下载 PDF",
  "b.noscope":"<em>内置知识库未描述。</em>",
  "b.nopreview":"该标准暂无PDF文本索引。运行 <code>build_index.ps1</code> 添加。",
  "b.previewFrom":"摘自","b.page":"页码约","b.refresh":"（运行 build_index.ps1 刷新）",
  "b.libTitle":"📥 完整 PDF 库 — 标准下载",
  "b.dwgTitle":"📐 工程图纸 — ACI 配筋手册 MNL-66(20) AutoCAD 文件",
  "b.dwgFiles":"个 DWG 文件",
  "b.pdfs":"部 PDF",
  "b.libNote":"文件由 GitHub Pages 直接提供。点击在浏览器中查看，或右键 → 链接另存为 下载。DWG 文件需 AutoCAD 或免费查看器（如 DWG TrueView）打开。",
  "b.drawings":"张图纸",
  // seismic tool
  "s.title":"🌍 设计反应谱计算器 — SNI 1726:2019",
  "s.preset":"印尼地区预设（自动填充 Ss/S1）",
  "s.preset0":"— 选择省份 / 城市 —",
  "s.ss":"Ss (g) — 短周期",
  "s.s1":"S1 (g) — 1 秒周期",
  "s.siteclass":"场地类别",
  "s.sa":"SA — 坚硬岩石","s.sb":"SB — 岩石","s.sc":"SC — 密实土 / 软岩","s.sd":"SD — 硬土","s.se":"SE — 软土",
  "s.risk":"风险类别 (Ie)",
  "s.risk1":"I/II 类 — Ie = 1.00","s.risk2":"III 类 — Ie = 1.25","s.risk3":"IV 类 — Ie = 1.50",
  "s.calc":"计算",
  "s.lat":"纬度 (°)","s.lon":"经度 (°)",
  "s.openrsa":"🌐 按坐标打开 RSA 门户",
  "s.mapTitle":"📍 在地图上选择位置",
  "s.mapDesc":"点击地图任意位置设置坐标并自动计算设计反应谱。彩色圆点标示 34 个省份的地震危险性等级。",
  "s.lg.vh":"极高危险性","s.lg.h":"高危险性","s.lg.mh":"中-高","s.lg.lm":"低-中",
  "s.mapNote":"Ss/S1 为 SNI 1726:2019 区划图的区域估计值。最终设计请使用 RSA 门户（下方链接）获取精确值。",
  "s.spectrum":"设计反应谱",
  "s.rsaPanel":"RSA 门户 — 印尼地震危险性 (rsa.ciptakarya.pu.go.id)",
  "s.rsaDesc":"印尼公共工程部官方门户提供任意坐标的精确 Ss / S1 与反应谱。下方尝试页内嵌入；多数政府网站禁止嵌入，此时请用按钮在新标签页打开。",
  "s.fa":"Fa — 短周期场地系数（SNI 1726:2019 表 6）",
  "s.fv":"Fv — 长周期场地系数（SNI 1726:2019 表 7）",
  "f.siteclass":"场地类别",
  "f.sa":"SA — 坚硬岩石","f.sb":"SB — 岩石","f.sc":"SC — 密实土/软岩","f.sd":"SD — 硬土","f.se":"SE — 软土",
  "f.sf":"需进行场地专项勘察",
  "s.faNote":"来源：SNI 1726:2019 表 6 与表 7 — 直接提取自 PDF 文本。注意：SB 类 Fa = 0.9（与 ASCE 7-16 取值 1.0 不同）。",
  "s.srcLine":"来源：SNI 1726:2019 §6.3。Fa/Fv 取自表 6 与表 7（提取自 PDF）。SDS = (2/3)·SMS，SD1 = (2/3)·SM1。实线 = 设计反应谱（× Ie）；灰色虚线 = 未放大（Ie = 1）。",
  "s.rsaBlocked":"RSA 门户禁止页内嵌入（X-Frame-Options）。请在新标签页中直接打开：",
  "s.openRsaBtn":"🌐 打开 RSA 门户 (rsa.ciptakarya.pu.go.id)",
  "s.sfAlert":"SF 类场地需进行场地专项分析",
  "sdc.min":"D（最低 — 按表 8/9 核实）",
  "spec.title":"关键周期谱加速度",
  "spec.T":"周期 T (s)","spec.sa1":"Sa, Ie=1 (g)","spec.saIe":"Sa × Ie (g)",
  "spec.note1":"（假定值；请按 SNI 1726:2019 长周期区划图核实区域 TL）",
  "chart.design":"设计反应谱 Sa·Ie (g)","chart.plain":"未放大 Sa, Ie=1 (g)",
  "chart.plateau":"平台段 Sa = SDS·Ie","chart.tail":"T > Ts 段：Sa = SD1·Ie / T",
  // site analysis
  "st.title":"📡 场地分析 — 风 · 雨 · 地形 · 土壤（地质与气候数据）",
  "st.desc":"选择拟建项目位置。本工具获取该坐标的<strong>实时历史气候数据</strong>（ERA5 再分析，最近 3 个完整年度）与高程，结合内置区域地质剖面，并按 SNI 1727:2020、ASCE 7-22 与 GB 50009-2012 推导最低设计要求。",
  "st.preset":"省份 / 地区预设",
  "st.preset0":"— 选择省份 / 城市 —",
  "st.analyze":"🔍 分析场地",
  "st.mapTitle":"📍 在地图上选择位置（点击任意处）",
  "st.srcTitle":"官方数据源（最终设计前请核实）",
  "st.srcDesc":"本工具使用开放的 <strong>Open-Meteo ERA5 再分析档案</strong>（实时获取，无需密钥）提供风/雨历史数据，并使用 Open-Meteo 高程模型（Copernicus DEM 90 m）提供地形数据。下列政府门户不允许浏览器直接访问（无 CORS），请用于最终设计<em>核实</em>：",
  "st.needCoord":"⚠ 请先输入坐标，或选择省份 / 点击地图。",
  "st.projSite":"项目场地",
  "st.selSite":"所选场地",
  "st.fetching":"⏳ 正在获取高程与 3 年 ERA5 气候历史数据：",
  "st.loaded":"✅ 实时数据已加载（ERA5 再分析","st.years":"年）","st.elev":"· 高程",
  "st.failed":"⚠ 实时获取失败（","st.failed2":"）— 仅显示内置区域估计值。有网络后请重试。",
  "st.noData":"气候档案未返回数据",
  "st.windTitle":"🌬 风 — 气候与设计要求",
  "st.meanWind":"日最大风速均值","st.maxGust":"实测最大阵风","st.windiest":"最大风月","st.calmest":"最静风月",
  "st.h10":"10 m 高度，","st.avgDailyMax":"m/s 日最大均值",
  "st.windChartLabel":"日最大风速月均值 (m/s, 10 m)",
  "st.windUnavail":"实时风历史数据不可用 — 区域估计：典型基本风速",
  "st.gust3s":"（3 秒阵风）",
  "st.dReq":"设计要求","st.dVal":"取值","st.dStd":"标准依据",
  "st.vRec":"推荐基本风速 V（3 秒阵风，极限状态）",
  "st.vRec2":"（区域惯例","st.vRec3":"；以 BMKG 极值分析为准）",
  "st.qz":"速度压 qz（10 m，C 类暴露，Kzt=1）",
  "st.qzStd":"qz = 0.613·Kz·Kzt·Kd·V²，Kd=0.85",
  "st.minP":"MWFRS 最小设计风压",
  "st.minPVal":"墙面 0.77 kN/m² + 屋面 0.38 kN/m²",
  "st.w0":"GB 基本风压 w₀（50 年，10 分钟平均）",
  "st.w0Floor":"（下限 0.30）",
  "st.obs":"实测支持","st.obsNote":"ERA5（注：再分析会平滑局地阵风极值 — 设计取值应依据规范区划图，而非原始数据）",
  "st.gustNote":"实测最大日阵风",
  "st.wetDefault":"典型 10–4 月",
  "st.rainTitle":"🌧 降雨 — 气候与设计要求",
  "st.annualRain":"年降雨量（平均）","st.wettest":"最湿月","st.driest":"最干月","st.wetSeason":"雨季（区域）",
  "st.avg":"平均","st.planNote":"安排土方 / 浇筑施工",
  "st.rainChartLabel":"月均降雨量 (mm)",
  "st.rainUnavail":"实时降雨历史数据不可用 — 区域估计：","st.rainPerYr":"mm/年；雨季",
  "st.rainLoad":"屋面雨水荷载",
  "st.rainLoadVal":"R = 0.0098·(ds + dh) kN/m²，主排水堵塞时由溢流排水承担",
  "st.intensity":"屋面排水设计降雨强度",
  "st.intensityVal":"100–200 mm/hr（5 分钟历时）— 最终设计采用 BMKG IDF 曲线",
  "st.intensityStd":"BMKG IDF / SNI 给排水惯例",
  "st.ponding":"积水失稳验算",
  "st.pondingVal":"屋面坡度 < 6.3 mm/m 或柔性区格须验算",
  "st.gbRain":"GB 处理方式",
  "st.gbRainVal":"≥ 0.5 kN/m² 屋面活载 + 按 GB 50015 排水设计",
  "st.topoTitle":"⛰ 地形与高程",
  "st.elevLabel":"场地高程","st.coord":"坐标",
  "st.demSrc":"Copernicus DEM 90 m（Open-Meteo）",
  "st.kztNote":"若场地位于山顶、山脊或陡坎，且 H/Lh ≥ 0.2 且 H ≥ 4.5 m，须采用地形系数 <strong>Kzt = (1 + K1·K2·K3)² &gt; 1.0</strong>（SNI 1727:2020 / ASCE 7-22 §26.8；GB 50009 §8.2.2 山顶 η 修正）。请从下方 BIG 地理门户获取等高线剖面以评估 H 与 Lh。",
  "st.bigLink":"⛰ BIG 地理门户 — 等高线 / DEMNAS",
  "st.elevVerify":"📐 高程查询（核实）",
  "st.relief":"局部高差（±3 km）",
  "st.computing":"计算中…",
  "st.reliefSub":"沿剖面 最大−最小",
  "st.terrain":"地形类别",
  "st.terrainSub":"据高程剖面判定",
  "st.contourMap":"地形等高线图",
  "st.contourSrc":"等高线：OpenTopoMap（SRTM，CC-BY-SA）— 实时",
  "st.profileTitle":"地形横剖面（自西向东穿过场地）",
  "st.profileLoading":"正在采样高程剖面…",
  "st.openTopoLink":"⛰ 打开完整等高线图（OpenTopoMap）",
  "st.profileFail":"高程剖面不可用（离线）。",
  "st.profileCap":"沿 6.6 km 东西向测线的高程 · Copernicus DEM（Open-Meteo）",
  "st.profileCap2":"高程剖面 · Copernicus DEM（Open-Meteo）",
  "st.terrFlat":"平坦",
  "st.terrGentle":"微起伏",
  "st.terrRolling":"波状起伏 / 丘陵",
  "st.terrSteep":"陡峭 / 山地",
  "st.elevM":"高程 (m)",
  "st.distFromSite":"距场地距离 (km)",
  "st.soilTitle":"🧱 土壤与地质 — 区域剖面",
  "st.siteClass":"典型场地类别","st.verify30":"SNI 1726:2019 表 3 — 须以 ≥30 m 钻孔核实",
  "st.hazard":"地震危险性",
  "st.geoLayers":"典型地质 / 土层：",
  "st.fndGuide":"基础选型指引：",
  "st.fndSE":"剖面可能为软弱 / 高压缩性土 → 预计需采用深基础（打入桩 / 钻孔灌注桩至持力层）或地基处理；核算负摩阻力与液化（SNI 8460:2017 §9–10）。",
  "st.fndSC":"浅层可能存在良好持力层 → 通常可采用独立 / 条形基础（FS ≥ 3.0，埋深 ≥ 0.5 m）；按 SNI 8460:2017 §6–7 以 SPT/CPT 确认。",
  "st.fndSD":"中等土质剖面 → 轻中型荷载可采用浅基础（FS ≥ 3.0）；重型或沉降敏感结构采用桩基；以场地勘察为准（SNI 8460:2017 §6）。",
  "st.noGeo":"该坐标未匹配到区域地质剖面。请选择最近的省份预设，且任何情况下均须按 SNI 8460:2017 §6 进行场地勘察。",
  "st.fndLink":"🧱 基础类型选择模块",
  "st.geoLink":"🏚 岩土工程模块",
  "st.seisLink":"🌍 本区域设计反应谱",
  "st.footnote":"区域剖面仅供初步参考 — 最终设计前必须按 SNI 8460:2017 §6 进行场地勘察（钻孔深度：基础底面以下 ≥ 6 m；确定场地类别 ≥ 30 m）。",
  // query / results
  "q.analysis":"查询分析",
  "q.ptype":"项目类型","q.risk":"风险类别","q.ie":"重要性系数 Ie","q.loc":"位置",
  "q.hazard":"地震危险性","q.ss":"典型 Ss","q.s1":"典型 S1","q.topics":"识别的主题",
  "sec.applicable":"适用标准",
  "sec.extracts":"PDF 标准库相关摘录",
  "card.sni":"🇮🇩 印尼标准 (SNI)","card.amer":"🇺🇸 美国标准 (ACI/AISC/ASCE)","card.cn":"🇨🇳 中国标准 (GB/JGJ)",
  "seis.title":"地震设计参数 —",
  "seis.param":"参数","seis.val":"取值","seis.src":"来源",
  "seis.typSs":"典型 Ss","seis.typS1":"典型 S1","seis.useRsa":"使用 RSA 门户",
  "seis.hazMap":"SNI 1726:2019 区划图",
  "seis.recSite":"推荐场地类别（默认）","seis.sd":"SD（硬土）","seis.sdSrc":"SNI 8460:2017 §7 — 须以钻孔核实",
  "seis.tab6":"SNI 1726:2019 表 6","seis.tab7":"SNI 1726:2019 表 7","seis.tab2":"SNI 1726:2019 表 2",
  "seis.cat":"Ie（风险类别","seis.catEnd":"）","seis.assumed":"II — 假定","seis.estSds":"估算 SDS = Ie·(2/3)·Fa·Ss（中值）",
  "seis.estOnly":"仅为估算 — 精确值请用 RSA",
  "seis.rsaLink":"🌐 RSA 门户（印尼地震危险性）","seis.rsaCoord":"📍 RSA —","seis.coords":"坐标",
  "seis.openCalc":"⚙ 打开反应谱计算器",
  "seis.warn":"⚠ 上述为区域估计值。务必使用项目精确坐标从 RSA 门户 (https://rsa.ciptakarya.pu.go.id/2021/) 获取场地专属 Ss/S1。",
  "miss.title":"⚠ 获取场地地震参数所需的补充信息",
  "miss.loc":"场地位置（省、市或 GPS 坐标）","miss.locWhy":"用于从地震区划图（RSA 门户）查取 Ss 与 S1。",
  "miss.gps":"精确 GPS 坐标（纬度 / 经度）","miss.gpsWhy":"用于从 RSA 门户获取精确 Ss/S1。上方已给出省级估计值。",
  "miss.pt":"项目类型 / 使用功能","miss.ptWhy":"决定风险类别与重要性系数 Ie（如电厂 → IV 类，Ie = 1.50）。",
  "fb.title":"全文检索 — 标准库",
  "fb.desc1":"没有匹配","fb.desc2":"的专题模块，但标准文档中以下段落与之相关或等效。可在「标准浏览」中打开 PDF 查看完整条文。",
  "fb.refine":"优化您的查询以获得更详细的答案",
  "fb.tip1":"专题模块提供多标准对照表 — 尝试关键词：<strong>混凝土</strong>、<strong>钢结构</strong>、<strong>檩条</strong>、<strong>基础类型</strong>、<strong>风荷载</strong>、<strong>雨</strong>、<strong>抗震</strong>、<strong>荷载</strong>、<strong>防火</strong>。",
  "fb.tip2":"添加<strong>项目类型</strong>（电厂、医院、学校…）与<strong>位置</strong>（省 / 市）可获得风险类别、Ie 及区域地震与气候信息。",
  "fb.none":"知识库与标准全文库中均未找到匹配内容。<br><br>可尝试：<strong>“混凝土保护层要求”</strong>、<strong>“檩条挠度限值”</strong>、<strong>“软土基础类型”</strong>、<strong>“风荷载”</strong>或<strong>“设计活荷载”</strong>。<br><br>需要按位置查询风 / 雨 / 土壤数据，请打开 <a onclick=\"showView('site',null)\" style=\"cursor:pointer\"><strong>📡 场地分析</strong></a> 页。",
  "mod.sources":"来源：",
  "proc.per":"依据：",
  // AI answer engine
  "ai.title":"工程解答",
  "ai.badgeLocal":"内置知识引擎",
  "ai.badgeDocs":"文档摘录引擎",
  "ai.src":"依据：",
  "ai.alsoRel":"相关解答：",
  "ai.requested":"（按您的询问优先）",
  "ai.extractNote":"以下要点自动摘录自标准全文（最匹配段落）：",
  "ai.hint":"想对任何问题获得 Claude AI 实时解答？点击检索框旁的 <strong>✨ AI</strong> 按钮，连接您自己的 Anthropic API 密钥（仅保存在您的浏览器中）。",
  "ai.keyPrompt":"实时 AI 模式使用您自己的 Anthropic API 密钥（可在 console.anthropic.com 获取）。密钥仅保存在本浏览器（localStorage），且只发送至 api.anthropic.com。\n\n请粘贴 API 密钥（sk-ant-…）：",
  "ai.keyWarn":"这看起来不像 Anthropic 密钥（sk-ant-…）。仍要保存吗？",
  "ai.keyCleared":"已从本浏览器移除 Claude API 密钥。",
  "ai.thinking":"Claude 正在生成实时解答…",
  "ai.byClaude":"由 Claude 实时生成",
  "ai.verify":"最终设计前请对照「标准浏览」中的 PDF 核实条文号",
  "ai.removeKey":"移除 API 密钥",
  "ai.err":"Claude 调用失败",
  "ai.errKept":"已改为显示内置引擎解答。",
  "mod.openSeis":"⚙ 打开抗震反应谱计算器",
  "mod.openSite":"📡 打开场地分析（获取所在位置的实时风 / 雨 / 高程数据）",
  // about
  "a.h1":"关于本词典",
  "a.p1":"面向土木、结构、岩土与建筑工程师的多专业工程标准参考，涵盖印尼 (SNI)、美国 (ACI/AISC/ASCE/ASTM) 与中国 (GB/JGJ) 标准。",
  "a.p2":"用自然语言输入主题 — <code>混凝土</code>、<code>钢结构</code>、<code>基础</code>、<code>荷载</code> 或 <code>抗震</code> — 词典返回跨标准综合答案模块与相关标准卡片。添加项目类型（如“电厂”）与位置（如“北马鲁古”）可获得风险类别、重要性系数 Ie 与区域地震估值。",
  "a.libTitle":"📚 将 PDF 库添加到 GitHub（手动步骤）",
  "a.libP":"全文检索索引 (<code>standards_data.js</code>) 由本地 PDF 生成，但 PDF 文件本身<strong>不会</strong>自动提交（体积大，已被 <code>.gitignore</code> 排除）。如需发布 PDF 供访问者打开，请用以下终端命令手动添加：",
  "a.libNote":"注意：GitHub 单文件限制 100 MB，并建议仓库不超过 1 GB。如 PDF 库过大，请考虑使用 Release 附件、外部存储桶或 Git LFS。",
  "a.p3":"内置知识库源自 80 余部标准 PDF。运行 <code>build_index.ps1</code> 可将检索扩展至本地 PDF 全文。当前已加载：",
  "a.deployTitle":"🚀 部署到 GitHub Pages（免费公共托管）",
  "a.step3":"运行索引生成器提取 PDF 内容：",
  "a.step4":"将网站推送到 GitHub：",
  "a.stdsTitle":"内置知识库收录标准",
  "a.cat.sni":"🇮🇩 印尼标准 (SNI)","a.cat.amer":"🇺🇸 美国标准 (ACI/AISC/ASCE/ASTM)","a.cat.cn":"🇨🇳 中国标准 (GB/JGJ/图集)",
  "a.step1":"安装 <a href=\"https://git-scm.com/\">Git</a> 并在 <a href=\"https://github.com\">github.com</a> 注册免费账户",
  "a.step2":"新建公开仓库，命名为 <code>engineering-standards-dictionary</code>",
  "a.step5":"进入 GitHub 仓库 → Settings → Pages → Source: main 分支 → 保存。网站将发布于 <code>https://YOUR_USERNAME.github.io/engineering-standards-dictionary/</code>",
  "a.step6":"添加 / 删除 PDF 后更新：重新运行 <code>build_index.ps1</code>，然后 <code>git add . ; git commit -m \"Update index\" ; git push</code>",
  // misc dynamic
  "rsa.frameNote":"政府门户多数禁止嵌入，加载失败时请用按钮打开。",
  "hit.page":"页码约",
  "noTopic":"未识别到相关工程主题。",
  "loading":"加载中…",
  "idx.stat1":"部 PDF，","idx.stat2":"条文本块",
  "idx.none":"动态索引未加载 — 请运行 build_index.ps1"
};

// ── Hazard level labels ─────────────────────────────────────────
window.HAZARD_ZH={very_high:"极高",high:"高",moderate_high:"中-高",moderate:"中",low_moderate:"低-中",low:"低"};

// ── key_params term map (longest-first replacement) ────────────
window.PARAM_ZH=[
  ["Risk Category IV Ie","IV 类风险 Ie"],["Risk Category III Ie","III 类风险 Ie"],["Risk Category I/II Ie","I/II 类风险 Ie"],
  ["Site Class SD Fa (Ss=1.0)","SD 类 Fa (Ss=1.0)"],["Site Class SD Fv (S1=0.4)","SD 类 Fv (S1=0.4)"],
  ["Tl (long-period transition)","TL（长周期转换）"],["(varies by region)","（随地区变化）"],
  ["Cover — cast against earth","保护层 — 直接浇筑于土壤"],["Cover — exposed to weather (>D16)","保护层 — 露天（>D16）"],
  ["Cover — exposed to weather (≤D16)","保护层 — 露天（≤D16）"],["Cover — not exposed (beams/cols)","保护层 — 非露天（梁/柱）"],
  ["Cover — not exposed (beam/col)","保护层 — 非露天（梁/柱）"],["Cover — slabs/walls not exposed","保护层 — 非露天板/墙"],
  ["Cover — exposed >#5 bar","保护层 — 露天 >#5 钢筋"],["Cover — exposed ≤#5 bar","保护层 — 露天 ≤#5 钢筋"],
  ["Cover (exposure Class 2)","保护层（暴露等级 2）"],["Min cover (Env I interior)","最小保护层（一类环境·室内）"],
  ["Min cover (Env IIa outdoor)","最小保护层（二a类·室外）"],["Min cover (Env IIb seawater spray)","最小保护层（二b类·浪溅）"],
  ["Min cover (pier/abutment)","最小保护层（墩/台）"],["Min cover (submerged)","最小保护层（水下）"],
  ["Min fc' SRPMB columns","SRPMB 柱最小 fc'"],["Min fc' SRPMK","SRPMK 最小 fc'"],["Min fc' (SMRF cols)","SMRF 柱最小 fc'"],
  ["Min fc' precast","预制最小 fc'"],["Min fc' prestressed","预应力最小 fc'"],["Min fc' driven precast","打入预制桩最小 fc'"],
  ["Min fc' drilled shaft","钻孔桩最小 fc'"],["Min fc'","最小 fc'"],
  ["Min yield strength","最小屈服强度"],["Min yield","最小屈服"],["Min fy grade 60","60 级最小 fy"],["Min fy","最小 fy"],
  ["SRPMK: max ρ","SRPMK 最大配筋率 ρ"],["SMRF max ρ","SMRF 最大配筋率 ρ"],
  ["LRFD φ (flexure)","LRFD φ（受弯）"],["LRFD φ (shear)","LRFD φ（受剪）"],
  ["φ flexure","φ 受弯"],["φ shear","φ 受剪"],["φ tension (fracture)","φ 受拉（断裂）"],["φ axial (RC cols)","φ 轴压（RC 柱）"],
  ["Min bolt A325 Fv","A325 螺栓最小 Fv"],["Bolt A325 Fnv","A325 螺栓 Fnv"],["Bolt 8.8 class fv","8.8 级螺栓 fv"],
  ["Office — live load","办公 — 活荷载"],["Corridor (office)","走廊（办公）"],["Equipment rooms","设备间"],
  ["Mechanical storage","机械储藏"],["Mechanical room","设备机房"],["Roof (access)","上人屋面"],["Roof (inaccessible)","非上人屋面"],
  ["Stairs","楼梯"],["Parking (passenger car)","停车（小汽车）"],["Library stacks","书库"],["Office floor","办公楼面"],["Office live load","办公活荷载"],
  ["Min borehole depth","最小钻孔深度"],["below footing base","基底以下"],["Borehole for seismic site class","场地类别钻孔深度"],
  ["FS bearing capacity (static)","承载力安全系数（静载）"],["FS bearing capacity (seismic)","承载力安全系数（地震）"],
  ["Max settlement (differential)","最大差异沉降"],["Max total settlement","最大总沉降"],["Max settlement (frame)","最大沉降（框架）"],
  ["Max differential (frame)","最大差异（框架）"],["SPT N correction","SPT N 修正"],
  ["Embedment depth min","最小埋深"],["(frost-free, non-collapsible)","（无冻土、非湿陷）"],
  ["Tip resistance qc","锥尖阻力 qc"],["Friction ratio Rf","摩阻比 Rf"],["(clay: >2%, sand: <1%)","（黏土 >2%，砂土 <1%）"],
  ["Min fire rating class A (residential)","A 类（住宅）最低耐火极限"],["Office/commercial","办公/商业"],["High-rise >14m","高层 >14m"],
  ["High-rise (>100m) col fire rating","高层（>100m）柱耐火极限"],["High-rise (>100m) beam","高层（>100m）梁"],["Type I frame cols","一级框架柱"],
  ["Type I-A construction fire rating (cols)","I-A 类构造柱耐火极限"],["Type I-B (cols)","I-B 类（柱）"],
  ["Occupancy Cat IV (essential facilities)","IV 类使用功能（关键设施）"],
  ["Hospitals, fire stations, power plants","医院、消防站、电厂"],
  ["Standard hooks 90°","标准弯钩 90°"],["Standard hooks 180°","标准弯钩 180°"],["extension","延伸"],["Lap splice Class B","B 级搭接"],
  ["Grade 40 Fy","40 级 Fy"],["Grade 60 Fy","60 级 Fy"],["Grade 80 Fy","80 级 Fy"],
  ["Fy actual / Fy specified","实测 Fy / 标准 Fy"],["Fy max","Fy 上限"],["Fu min","Fu 下限"],
  ["Type I — General purpose","I 型 — 通用"],["Type II — Moderate sulfate","II 型 — 中抗硫酸盐"],
  ["Type III — High early strength","III 型 — 早强"],["Type V — High sulfate resistance","V 型 — 高抗硫酸盐"],
  ["w/c max (exposure Class 2)","最大水灰比（暴露等级 2）"],["Max crack width","最大裂缝宽度"],
  ["Seismic intensity","抗震设防烈度"],["Damping ratio RC (elastic)","RC 阻尼比（弹性）"],
  ["(Site II, Group 1)","（II 类场地，第一组）"],["(Site II, Group 2)","（II 类场地，第二组）"],
  ["SDC D (when Sds≥0.50, S1≥0.20)","SDC D（当 SDS≥0.50，S1≥0.20）"],
  ["SDC D min (Sds)","SDC D 下限（SDS）"],["Min seismic base shear Vmin","最小地震基底剪力 Vmin"],
  ["Max shear wall reinforcement ratio","剪力墙最大配筋率"],["Min ρ core wall","核心筒最小配筋率 ρ"],
  ["Axial compression ratio RC col (8-degree)","RC 柱轴压比（8 度）"],["Beam-col joint Min Ae/Aj","梁柱节点最小 Ae/Aj"],
  ["Min reinforcement ratio bored pile","钻孔桩最小配筋率"],["Min concrete grade","最低混凝土等级"],
  ["Min waterproof grade basement","地下室最低防水等级"],["Grade 2 (0.1 mm crack)","二级（0.1 mm 裂缝）"],
  ["Grade 1 (0.05 mm crack)","一级（0.05 mm 裂缝）"],["Water-treatment, archives","水处理、档案馆"],
  ["Purlin deflection (profiled sheet roof)","檩条挠度（压型钢板屋面）"],["Purlin deflection (with ceiling)","檩条挠度（有吊顶）"],
  ["Purlin deflection (common spec)","檩条挠度（常用规定）"],["Wall girt deflection","墙梁挠度"],
  ["Rafter deflection limit","斜梁挠度限值"],["Rafter deflection","斜梁挠度"],
  ["Column drift (wind/EQ)","柱顶位移（风/震）"],["Column top drift","柱顶位移"],
  ["Partial factors","分项系数"],["Permanent/variable factors","恒/活分项系数"],["Frame span range","刚架跨度范围"],
  ["Section types","截面类型"],["C/Z cold-formed, hot-rolled channel","C/Z 冷弯、热轧槽钢"],
  ["Typical spacing","常用间距"],["Sag rods","拉条"],["midspan (4–6 m), third-points (>6 m)","跨中（4–6 m）、三分点（>6 m）"],
  ["Thickness range","厚度范围"],["G550 t<0.9mm design fy","G550 t<0.9mm 设计 fy"],
  ["Design method","设计方法"],["Effective width / DSM","有效宽度法 / 直接强度法"],
  ["SMF Ry A992","SMF Ry（A992）"],["SMF max Pr/Pc for columns","SMF 柱最大 Pr/Pc"],
  ["SMF link rotation angle (EBF)","EBF 连梁转角"],["rad (short), 0.02 rad (long)","rad（短连梁），0.02 rad（长连梁）"],
  ["roof, L/120 girt","屋面，墙梁 L/120"],["roof","屋面"],
  ["N60 = (Em/0.6)·N","N60 = (Em/0.6)·N"]
];

// ── Topic names + Chinese keywords ──────────────────────────────
var TOPIC_ZH={
  seismic:{name:"抗震设计",kw:["抗震","地震","反应谱","谱加速度","烈度","场地类别","风险类别","液化","基底剪力","设防"]},
  structural_concrete:{name:"结构混凝土",kw:["混凝土","钢筋","保护层","柱","梁","板","剪力墙","配筋","强度等级","砼"]},
  steel_structure:{name:"钢结构",kw:["钢结构","钢材","焊接","螺栓","抗弯框架","支撑","屈曲","稳定","型钢","受压构件","受拉构件","受弯构件","钢柱","钢梁","弯曲屈曲","弯扭屈曲","临界应力","塑性弯矩","截面分类","厚实","宽厚比","剪力滞后","抗力系数","长细比"]},
  geotechnical:{name:"岩土与地基",kw:["地基","承载力","沉降","桩","勘察","钻孔","边坡","挡土","岩土","侧向土压力","土压力","地下室墙","回填","等效流体"]},
  design_loads:{name:"设计荷载",kw:["荷载","活荷载","恒荷载","楼面荷载","屋面荷载","活荷载折减","集中荷载","从属面积","洪水荷载","洪水","静水压","动水压","材料容重","自重"]},
  fire:{name:"消防",kw:["防火","耐火","消防","疏散","喷淋","耐火极限","消火栓","室外消火栓","消防车道","防火分区","防火间距","疏散距离","安全出口","袋形走道","灭火器","防火墙","消防水","耐火等级","消防车","防排烟","自动喷水","消防给水"]},
  precast:{name:"预制与预应力",kw:["预制","预应力","先张","后张","叠合"]},
  wind:{name:"风荷载设计",kw:["风","风荷载","风速","风压","阵风","台风","地形系数","风振","速度压","暴露系数","暴露类别","风向系数","内压","体型系数","封闭分类","阵风系数","围护"]},
  rain:{name:"雨荷载与降雨",kw:["雨","降雨","雨荷载","排水","积水","雨季","降水","暴雨"]},
  purlin:{name:"檩条与墙梁设计",kw:["檩条","墙梁","冷弯","拉条","轻钢","门式刚架","压型钢板","檩"]},
  foundation_type:{name:"基础类型选择",kw:["基础类型","浅基础","深基础","独立基础","条形基础","筏板","桩基","钻孔桩","预制桩","沉箱","微型桩","承台"]},
  serviceability:{name:"正常使用（挠度/位移/振动）",kw:["正常使用","挠度","挠度限值","位移","层间位移","振动","楼盖振动","变形","舒适度","起拱"]}
};
for(var tk in TOPIC_ZH){
  if(KB.topics[tk]){
    KB.topics[tk].name_zh=TOPIC_ZH[tk].name;
    KB.topics[tk].keywords=KB.topics[tk].keywords.concat(TOPIC_ZH[tk].kw);
  }
}

// ── Project types: Chinese names + keywords ─────────────────────
var PT_ZH={
  power_plant:{name:"电厂 / 发电站与变电设施",note:"发电站与输变电设施按 SNI 1726:2019 表 2 属 IV 类风险",kw:["电厂","发电厂","发电站","变电站","开关站","燃机","汽轮机","冷却塔","核电","输电"]},
  hospital:{name:"医院 / 医疗设施",note:"含急诊/手术/ICU（>50 床）的医院按 SNI 1726:2019 表 2 属 IV 类风险",kw:["医院","诊所","医疗","急诊","手术"]},
  school:{name:"学校 / 教育设施",note:"容纳 >250 名学生的学校按 SNI 1726:2019 属 III 类风险",kw:["学校","大学","校园","教室","礼堂","教育"]},
  industrial:{name:"工业建筑",note:"一般工业建筑属 II 类风险（储存危险品除外）",kw:["工业","工厂","厂房","仓库","制造","炼油","化工","石化"]},
  office:{name:"办公 / 商业建筑",note:"标准使用功能 — II 类风险",kw:["办公","写字楼","商业","酒店","公寓","商场","零售"]},
  bridge:{name:"桥梁",note:"桥梁采用 SNI 1725:2016（桥梁荷载）与 SNI 2833:2016（桥梁抗震），不适用 SNI 1726:2019",kw:["桥","桥梁","立交","高架","天桥"]},
  water_structure:{name:"贮水结构",note:"服务于关键设施的水池可能需按 III 或 IV 类风险",kw:["水池","水箱","水塔","污水","水处理","贮水"]}
};
for(var pk in PT_ZH){
  if(KB.project_types[pk]){
    KB.project_types[pk].name_zh=PT_ZH[pk].name;
    KB.project_types[pk].note_zh=PT_ZH[pk].note;
    KB.project_types[pk].keywords=KB.project_types[pk].keywords.concat(PT_ZH[pk].kw);
  }
}

// ── Locations: Chinese names + notes ────────────────────────────
var LOC_ZH={
  "aceh":["亚齐","邻近巽他大逆冲断裂带（2004 年 M9.1 印度洋地震）。地震危险性极高。"],
  "north sumatra":["北苏门答腊","毗邻巽他俯冲带。主要城市：棉兰。"],
  "west sumatra":["西苏门答腊","2009 年 M7.6 巴东地震。极高地震区。主要城市：巴东。"],
  "riau":["廖内","苏门答腊内陆 — 地震较低。主要城市：北干巴鲁。"],
  "south sumatra":["南苏门答腊","主要城市：巨港。"],
  "lampung":["楠榜","苏门答腊南端。主要城市：班达楠榜。"],
  "jakarta":["雅加达首都特区","首都。软冲积土显著放大地震动。"],
  "west java":["西爪哇","万隆盆地与加鲁特地区危险性较高。主要城市：万隆。"],
  "central java":["中爪哇","2006 年日惹 M6.3 地震。主要城市：三宝垄。"],
  "east java":["东爪哇","主要城市：泗水。"],
  "bali":["巴厘","邻近 2018 年龙目岛 M6.9 地震。主要城市：登巴萨。"],
  "west nusa tenggara":["西努沙登加拉","2018 年 M7.0 龙目岛地震造成重大破坏。主要城市：马塔兰。"],
  "east nusa tenggara":["东努沙登加拉","邻近爪哇—班达俯冲带。主要城市：古邦。"],
  "west kalimantan":["西加里曼丹","加里曼丹位于稳定的巽他地块 — 地震极低。主要城市：坤甸。"],
  "central kalimantan":["中加里曼丹","主要城市：帕朗卡拉亚。"],
  "east kalimantan":["东加里曼丹","新首都努桑塔拉（IKN）地区：低—中地震。"],
  "north sulawesi":["北苏拉威西","地震高度活跃区。主要城市：万鸦老。"],
  "central sulawesi":["中苏拉威西","2018 年 M7.5 帕卢地震+海啸。危险性极高。主要城市：帕卢。"],
  "south sulawesi":["南苏拉威西","主要城市：望加锡。"],
  "southeast sulawesi":["东南苏拉威西","主要城市：肯达里。"],
  "gorontalo":["哥伦打洛","北苏拉威西地震区。"],
  "west sulawesi":["西苏拉威西","2021 年 M6.2 马穆朱地震。主要城市：马穆朱。"],
  "maluku":["马鲁古","班达海地震区。危险性极高。主要城市：安汶。"],
  "north maluku":["北马鲁古","毗邻菲律宾海板块。2019 年 M7.1 北马鲁古地震。主要城市：特尔纳特、索菲菲。"],
  "west papua":["西巴布亚","主要城市：马诺夸里。"],
  "papua":["巴布亚","邻近新几内亚地震带。主要城市：查亚普拉、蒂米卡。"],
  "bangka belitung":["邦加-勿里洞","地震相对较低。主要城市：槟港。"],
  "bengkulu":["明古鲁","邻近巽他海沟俯冲带。2007 年 M8.4 地震。"],
  "jambi":["占碑","苏门答腊内陆。"],
  "banten":["万丹","邻近巽他海峡。主要城市：西冷。"],
  "yogyakarta":["日惹特区","2006 年 M6.3 地震。默拉皮活火山区。"],
  "ternate":["特尔纳特（北马鲁古）","北马鲁古 — 邻近菲律宾板块的火山岛"],
  "halmahera":["哈马黑拉（北马鲁古）","北马鲁古地震区大型岛屿"]
};
for(var lk in LOC_ZH){
  if(KB.locations[lk]){KB.locations[lk].name_zh=LOC_ZH[lk][0];KB.locations[lk].note_zh=LOC_ZH[lk][1];}
}

// ── SITE_GEO Chinese (wet season + geology) ─────────────────────
var SITE_GEO_ZH={
  "aceh":["10–4 月（11–1 月峰值）","火山弧与抬升沉积；沿海冲积平原 2–8 m 软粉质黏土覆盖密实火山/冲积砂；内陆山地。西海岸海啸风险。"],
  "north sumatra":["10–4 月；4–5 月次峰","内陆为多巴火山凝灰岩高原；棉兰沿海平原 5–15 m 软海相/沼泽黏土覆盖中密砂；东海岸局部泥炭。"],
  "west sumatra":["全年多雨，11–3 月峰值","活火山带；巴东沿海平原软粉质黏土与松散火山砂，地下水位高 — 易液化（2009 M7.6 已证实）。"],
  "riau":["10–4 月，分布较均匀","大面积低地泥炭沼泽（泥炭厚 3–12 m！）覆盖软海相黏土；深厚冲积层。极具挑战：常需地基处理或 20–40 m 桩基。"],
  "south sumatra":["10–4 月（12–2 月峰值）","巨港低地：穆西河沿岸 5–20 m 极软高压缩黏土与泥炭；深部第三纪泥岩。摩擦桩与负摩阻力控制设计。"],
  "lampung":["11–4 月","火山山麓（硬残积黏土、密实火山泥流堆积）过渡至沿海冲积；班达楠榜丘陵浅层风化安山岩。"],
  "jakarta":["11–4 月（1–2 月峰值，易涝）","厚第四纪冲积层：5–15 m 极软—软海相黏土（N<5）覆盖中密砂与硬黏土；地下水位 1–3 m；抽水导致地面沉降。中高层建筑常用 20–40 m 钻孔灌注桩。"],
  "west java":["10–4 月（茂物/本格地形雨极多）","火山高地：硬残积黏土与凝灰岩（2–4 m 处承载力 150–300 kPa）；万隆盆地：20–60 m 湖相软黏土 — 重大沉降风险；北部沿海冲积平原。"],
  "central java":["10–4 月","火山链（默拉皮/信多罗）：密实火山砂与泥流堆积；三宝垄沿海 10–30 m 软海相黏土，沉降与海水倒灌；南部岩溶石灰岩。"],
  "east java":["11–4 月（东部较干）","火山群与布兰塔斯/梭罗河冲积平原；泗水：15–35 m 极软—软海相黏土（著名岩土难题）— 常规采用长桩；马都拉石灰岩脊。"],
  "bali":["11–4 月","年轻火山堆积：中密火山砂、凝灰岩与泥流堆积；南部石灰岩台地（武吉/努沙杜瓦）— 可能有溶洞；沿海松散砂局部可液化。"],
  "west nusa tenggara":["11–3 月（短雨季）","火山（林贾尼）与抬升珊瑚阶地；马塔兰平原冲积砂砾 — 2018 M7.0 北龙目沿海液化实例；旱季缺水。"],
  "east nusa tenggara":["11–3 月（印尼最干燥地区）","抬升珊瑚石灰岩阶地与泥灰岩（古邦：浅层完整石灰岩 — 浅基础条件优良，但注意岩溶空洞）；弗洛勒斯火山区；局部膨胀土。"],
  "west kalimantan":["全年较均匀，10–1 月偏湿","卡普阿斯河沿岸大面积低地泥炭（2–10 m）与软冲积土；内陆花岗岩/砂岩高地。坤甸：泥炭覆盖软黏土 — 传统木桩/混凝土小桩（cerucuk）。"],
  "central kalimantan":["全年较均匀，11–3 月峰值","南部泥炭地与软冲积黏土；北部第三纪沉积。基础：穿越 5–15 m 泥炭的桩基或地基处理。"],
  "east kalimantan":["较均匀，12–5 月偏湿","第三纪沉积：泥岩/砂岩/含煤地层；IKN 努桑塔拉地区：山脊硬残积黏土（浅基础条件好），谷地软冲积土；地震低。"],
  "north sulawesi":["11–4 月；万鸦老 11–5 月","活火山弧（洛贡/索普坦）：火山砂、凝灰岩、泥流堆积；万鸦老沿海狭窄冲积带；地形陡峭 — 边坡稳定与泥流通道是关键。"],
  "central sulawesi":["帕卢河谷极干（约 600 mm！）；山区较湿","帕卢-科罗断裂带：帕卢地堑河流砂砾 — 极端液化与流滑危险（2018 年巴拉罗亚/佩托博）；其他地区山地片岩/花岗岩。"],
  "south sulawesi":["11–4 月（望加锡 12–2 月峰值）","望加锡沿海平原：5–20 m 软海相黏土覆盖火山/沉积岩；马罗斯岩溶石灰岩有溶洞；东部火山高地。"],
  "southeast sulawesi":["11–6 月（过渡型）","超基性岩与变质岩（红土镍矿 — 膨胀/湿陷性残积土）；沿海珊瑚阶地；肯达里湾软海相淤泥。"],
  "gorontalo":["11–5 月，相对较干","火山-沉积岩；林博托湖平原湖相软黏土；沿海冲积；风化边坡易滑坡。"],
  "west sulawesi":["11–4 月","年轻陡峭山地；狭窄沿海冲积带（2021 年 M6.2 马穆朱地震软土震害）；边坡残积黏土。"],
  "maluku":["5–9 月（反向 — 东南季风迎风；安汶 6–7 月最湿）","班达弧岛屿：抬升珊瑚石灰岩+火山岩；安汶：边坡风化火山黏土（滑坡），沿海珊瑚砂砾。"],
  "north maluku":["全年较均匀；11–5 月偏湿","火山岛弧（特尔纳特/加马拉马活火山）+抬升珊瑚阶地（哈马黑拉沿海）；中密火山砂与凝灰岩覆盖玄武岩/安山岩；完整珊瑚石灰岩承载力好。"],
  "west papua":["赤道全年多雨；峰值因地而异","褶皱带石灰岩与碎屑岩（鸟头半岛）；马诺夸里/索龙沿海冲积与抬升珊瑚；地震高 — 沿海砂土注意液化。"],
  "papua":["赤道全年多雨；高地 >3500 mm","查亚普拉：陡峭风化变质岩+沿海冲积；南部低地（马老奇/蒂米卡）：大面积软冲积/沼泽土 10–40 m — 长摩擦桩；高地易滑坡。"],
  "bangka belitung":["10–4 月","花岗岩基底覆盖厚砂质残积土（含锡）；2–5 m 处承载力一般良好；注意旧矿坑/尾矿；地震低。"],
  "bengkulu":["全年多雨，11–3 月峰值","活动大陆边缘弧前沿海平原：冲积砂与软黏土，地下水位高 — 液化有记录（2000、2007 年地震）；内陆火山山麓。"],
  "jambi":["10–4 月","东部低地泥炭与极软黏土（巴当哈里盆地）；西部第三纪沉积与火山山麓；常需穿越压缩层的桩基。"],
  "banten":["11–4 月","西冷—芝勒贡工业走廊：沿海冲积 5–15 m（松砂与软黏土，地下水位浅）覆盖第三纪凝灰岩/泥岩；西海岸有喀拉喀托海啸风险；南部火山高地。"],
  "yogyakarta":["10–4 月","默拉皮火山扇：中密砂与泥流砾石（承载力好，但 2006 M6.3 在厚层堆积上放大）；南部岩溶；奥帕克断裂带。"],
  "ternate":["全年较均匀；11–5 月偏湿","加马拉马活火山岛：年轻火山灰/砂/熔岩；坡陡 — 泥流与落石通道；沿海多回填/珊瑚填土。"],
  "halmahera":["全年较均匀；11–5 月偏湿","西支火山弧+东支蛇绿岩/变质岩；沿海抬升珊瑚石灰岩阶地（承载力好）；局部海湾软土与红树林淤泥。"]
};
for(var gk in SITE_GEO_ZH){
  if(SITE_GEO[gk]){SITE_GEO[gk].wet_zh=SITE_GEO_ZH[gk][0];SITE_GEO[gk].geo_zh=SITE_GEO_ZH[gk][1];}
}

// ── Standards: Chinese titles + scopes ──────────────────────────
var STD_ZH={
  "sni-1726-2019":["建筑与非建筑结构抗震设计规程","地震区划图、谱设计参数、风险类别、场地分类、等效侧力法、反应谱分析"],
  "sni-2847-2019":["建筑结构混凝土要求","等效 ACI 318-14。钢筋混凝土设计：受弯、受剪、柱、墙、基础、抗震构造"],
  "sni-1727-2020":["最小设计荷载及相关准则","直接采用 ASCE 7-16。恒、活、风、雪、雨、地震及特殊荷载"],
  "sni-1729-2020":["结构钢建筑规范","等效 AISC 360-16。热轧与冷弯钢构件、连接、稳定"],
  "sni-8460-2017":["岩土工程设计要求","场地勘察、承载力、沉降、边坡稳定、支挡结构、桩基、液化评估"],
  "sni-03-1734-2000":["混凝土与配筋墙结构设计规程","旧标准，部分已被 SNI 2847:2019 取代"],
  "sni-7833-2012":["建筑预制与预应力混凝土设计规程","预制构件、预应力梁、空心板、连接"],
  "sni-1741-2008":["建筑结构构件耐火试验方法","柱、梁、板耐火试验，遵循 ISO 834"],
  "sni-03-1735-2000":["建筑及环境消防车道与扑救场地设计规程","消防车道与登高扑救场地（perkerasan）、按建筑体积确定的消防车道覆盖比例、室外消火栓（hidran halaman）与供水、消防扑救口"],
  "sni-03-1736-2000":["建筑被动防火系统设计规程","被动防火：防火分隔、耐火极限（TKA）、防火墙、构造类型、洞口保护、防火间距"],
  "permen-26-2008":["建筑及环境消防系统技术要求（部长条例 26/2008）","国家综合消防法规：构造类型与耐火极限（表1）、安全疏散与疏散距离、主动消防系统、消火栓、喷淋、灭火器（APAR）、消防扑救"],
  "nfpa":["NFPA 消防规范（消防规范、灭火器、喷淋、消火栓、生命安全）","NFPA 1 消防规范 · NFPA 10 手提灭火器 · NFPA 13 自动喷水 · NFPA 14 消火栓与水带 · NFPA 101 生命安全规范。被 IBC/IFC 及印尼 SNI 消防系列引用。"],
  "sni-2827-2008":["静力触探（CPT）现场试验方法","CPT 试验方法、数据解释、由 qc 推算承载力"],
  "sni-03-6772-2002":["桥梁抗震设计规程","印尼公路桥梁抗震设计（修订中）"],
  "sni-7971-2013":["冷弯钢结构","等效 AISI S100。冷弯檩条、墙梁与楼承板"],
  "aci-318-19":["结构混凝土建筑规范","完整钢筋混凝土设计：受弯、受剪、扭转、轴力、抗震、墙、基础、预应力"],
  "aisc-360-22":["结构钢建筑规范","热轧与组合钢构件的 LRFD 与 ASD 设计、连接、稳定分析"],
  "aisc-341-22":["结构钢建筑抗震规定","特殊/中等/普通抗弯框架（SMF/IMF/OMF）、EBF、SCBF、SPSW 抗震构造"],
  "asce-7-22":["建筑及其他结构最小设计荷载及相关准则","恒、活、风（MWFRS+C&C）、雪、冰、洪水、地震（ELF、RSA、NLRHA）、海啸"],
  "ibc-2021":["国际建筑规范","建筑行政与技术规定：使用功能、构造类型、防火、结构、无障碍"],
  "aci-350-20":["环境工程混凝土结构规范","贮水结构、污水池、水库。裂缝控制、耐久性、耐化学侵蚀"],
  "astm-a615":["混凝土配筋用变形与光圆碳素钢筋标准","40、60、80 级带肋钢筋"],
  "astm-a706":["低合金钢变形与光圆钢筋标准","专用于抗震/可焊用途的低合金钢筋"],
  "astm-c150":["硅酸盐水泥标准","I 至 V 型硅酸盐水泥"],
  "aci-mnl-66-20":["ACI 配筋详图手册 2020","钢筋混凝土 AutoCAD 补充详图：梁、柱、基础、板、地坪、墙"],
  "aci-543r-12":["混凝土桩设计、制造与安装指南","钢筋与预应力混凝土打入桩与钻孔桩"],
  "gb-50010-2010":["混凝土结构设计规范","钢筋混凝土完整设计：受弯、受剪、轴压、抗震、耐久性、裂缝控制（2015 年版）"],
  "gb-50011-2010":["建筑抗震设计规范","设防烈度区划（VI–IX）、场地分类（I₀–IV）、设计地震分组、反应谱、不规则结构（2016 年版）"],
  "gb-50017-2017":["钢结构设计标准","热轧钢构件、连接、稳定、疲劳、防火"],
  "gb-50007-2011":["建筑地基基础设计规范","浅基础、桩基、变形限值、地基处理、支挡结构"],
  "gb-50009-2012":["建筑结构荷载规范","恒、活、风、雪荷载。全国活荷载取值表"],
  "gb-50016-2018":["建筑设计防火规范","防火分区、疏散、耐火等级、喷淋、防排烟"],
  "jgj-3-2010":["高层建筑混凝土结构技术规程",">10 层或 >28 m 钢筋混凝土结构。剪力墙、框架-剪力墙、筒体、抗震性能目标"],
  "jgj-94-2008":["建筑桩基技术规范","钻孔桩、打入桩、群桩效应、负摩阻力、桩基抗震"],
  "jgj-297-2013":["建筑消能减震技术规程","被动消能装置：粘滞阻尼器、屈曲约束支撑、摩擦阻尼器"],
  "g101-3-2018":["混凝土结构施工图平面整体表示方法（图集）","中国体系结构施工图的柱/梁/墙/板配筋表示标准"],
  "g329-1-2018":["地下工程防水构造（图集）","地下室、地下结构、承台、墙体防水构造"],
  "gb-51022-2015":["门式刚架轻型房屋钢结构技术规范","门式刚架厂房：刚架、檩条、墙梁、支撑、吊车梁、连接、挠度限值"],
  "g518-23-2023":["门式刚架轻型房屋钢结构图集（无吊车）","标准设计图集：跨度 9–36 m 门式刚架、檩条/墙梁布置、支撑、节点。檩条/墙梁参见 G521-1/-2，抗风柱参见 G533"],
  "g521-11-2011":["钢檩条 / 钢墙梁图集","标准 C/Z 冷弯与槽钢檩条详图及荷载-跨度表；墙梁详图、拉条布置"]
};
for(var sk in STD_ZH){
  for(var si=0;si<KB.standards.length;si++){
    if(KB.standards[si].id===sk){KB.standards[si].title_zh=STD_ZH[sk][0];KB.standards[si].scope_zh=STD_ZH[sk][1];break;}
  }
}

// ── Answer modules — full Chinese versions ──────────────────────
var MOD_ZH={
  concrete:{
    title:"结构混凝土 — 设计参数",
    sections:[
      {h:"混凝土强度对比",
       table:{cols:["参数","SNI 2847:2019 / ACI 318-19","GB 50010-2010"],
         rows:[
           ["普通混凝土密度","2400 kg/m³","2400 kg/m³"],
           ["最小 fc' — 一般结构","21 MPa","C20（fck = 13.4 MPa）"],
           ["最小 fc' — 抗震柱（SRPMK / SMRF）","28 MPa","C30（fck = 20.1 MPa）"],
           ["最小 fc' — 预制","35 MPa","C30"],
           ["最小 fc' — 预应力","41 MPa","C40"],
           ["弹性模量 Ec","4700·√fc' MPa","4730·√fck MPa"]
         ]}},
      {h:"GB 50010-2010 混凝土强度等级表（C15–C80）",
       table:{center:true,cols:["等级","fck (MPa)","fc (MPa)","ftk (MPa)","ft (MPa)","Ec (GPa)"],
         rows:[
           ["C15","10.0","7.2","1.27","0.91","22.0"],["C20","13.4","9.6","1.54","1.10","25.5"],
           ["C25","16.7","11.9","1.78","1.27","28.0"],["C30","20.1","14.3","2.01","1.43","30.0"],
           ["C35","23.4","16.7","2.20","1.57","31.5"],["C40","26.8","19.1","2.39","1.71","32.5"],
           ["C45","29.6","21.2","2.51","1.80","33.5"],["C50","32.4","23.1","2.64","1.89","34.5"],
           ["C55","35.5","25.3","2.74","1.96","35.5"],["C60","38.5","27.5","2.85","2.04","36.0"],
           ["C65","41.5","29.7","2.93","2.09","36.5"],["C70","44.5","31.8","2.99","2.14","37.0"],
           ["C75","47.4","33.8","3.05","2.18","37.5"],["C80","50.2","35.9","3.11","2.22","38.0"]
         ]}},
      {h:"混凝土保护层要求（SNI 2847:2019 §20.6.1.3 / ACI 318-19 表 20.6.1.3）",
       table:{cols:["暴露条件","最小保护层"],
         rows:[
           ["直接浇筑于土壤并永久接触","75 mm"],
           ["露天 — 大于 D16 钢筋","50 mm"],
           ["露天 — D16 及以下","40 mm"],
           ["非露天梁 / 柱","40 mm"],
           ["非露天板 / 墙 / 密肋","20 mm"],
           ["海洋 / 浪溅区","65 mm"]
         ]}},
      {h:"钢筋等级（SNI 2052:2017 / SNI 2847:2019 / ASTM）",
       table:{cols:["等级","类型 / 标准","fy (MPa)","fu (MPa)"],
         rows:[
           ["BJTP-24","光圆（SNI 2052:2017）","235","380"],
           ["BJTD-40","带肋（SNI 2052:2017）","390","540"],
           ["BJTD-48","带肋","480","—"],
           ["BJTD-55","带肋","550","—"],
           ["Grade 60","ASTM A615","420","620"],
           ["A706 Grade 60","ASTM A706（抗震、可焊）","420","≥550"]
         ]}},
      {h:"抗震构造 — 体系分类（SNI 2847:2019 第 18 章 / ACI 318-19 第 18 章）",
       table:{cols:["印尼体系","对应 SDC","要求"],
         rows:[
           ["SRPMK（特殊）","SDC D / E / F","最小 ρ = 0.01，最大 ρ = 0.025，最小 fc' = 28 MPa"],
           ["SRPMM（中等）","SDC C","抗震构造适当放宽"],
           ["SRPMB（普通）","SDC A / B","常规非抗震构造"]
         ]},
       notes:["抗震柱约束（SRPMK）：约束区 Lₒ 内箍筋最大间距 = min(柱宽/4，6·db，150 mm)。",
              "Lₒ = max(截面高度，净跨/6，450 mm)，按 SNI 2847:2019 §18.7.5。"]},
    ],
    sources:"SNI 2847:2019 表 20.6.1.3（保护层）、§4.10（最小 fc'）、第 18 章（抗震） · SNI 2052:2017（钢筋） · GB 50010-2010 表 4.1.3（fck）与 4.1.5（Ec） · ACI 318-19 表 19.2.1.1、表 20.6.1.3、第 18 章"
  },
  steel:{
    title:"钢结构 — 设计参数",
    sections:[
      {h:"三标准体系钢材牌号对比",
       table:{cols:["印尼 (SNI)","美国 (AISC/ASTM)","中国 (GB)","fy (MPa)","fu (MPa)","用途"],
         rows:[
           ["BJ37","A36","Q235","240 / 250 / 235","370 / 400 / 370","一般结构"],
           ["BJ41","—","Q355","250 / — / 355","410 / — / 470","一般结构"],
           ["BJ50","A572-50","Q390","290 / 345 / 390","500 / 450 / 490","结构用"],
           ["—","A992","Q420","— / 345 / 420","— / 450 / 520","宽翼缘型钢"],
           ["—","A572 Gr60","—","415","520","高强"]
         ]}},
      {h:"抗力与安全系数 — LRFD φ / ASD Ω（SNI 1729:2020 = AISC 360-16）",
       table:{center:true,cols:["极限状态","φ (LRFD)","Ω (ASD)"],
         rows:[
           ["受拉 — 毛截面屈服（D2）","0.90","1.67"],
           ["受拉 — 净截面断裂（D2）","0.75","2.00"],
           ["受压（E1）","0.90","1.67"],
           ["受弯（F1）","0.90","1.67"],
           ["受剪 — 一般（G1）","0.90","1.67"],
           ["受剪 — 轧制 I 型 h/tw ≤ 2.24√(E/Fy)（G2.1a）","1.00","1.50"],
           ["螺栓与焊缝（J）","0.75","2.00"]
         ]},
       notes:["E（钢弹性模量）= 200,000 MPa；G = 77,200 MPa。设计强度 = φ·Rn（LRFD）或 Rn/Ω（ASD）。"]},
      {h:"截面分类 λ = b/t（SNI 1729:2020 表 B4.1 / AISC B4.1）",
       table:{center:true,cols:["板件","λp（厚实）","λr（非厚实）"],
         rows:[
           ["I 型翼缘 — 受弯（b/t）","0.38√(E/Fy)","1.00√(E/Fy)"],
           ["I 型腹板 — 受弯（h/tw）","3.76√(E/Fy)","5.70√(E/Fy)"],
           ["I 型翼缘 — 受压（b/t）","— (不适用)","0.56√(E/Fy)"],
           ["I 型腹板 — 受压（h/tw）","— (不适用)","1.49√(E/Fy)"],
           ["单角钢肢 — 受弯","0.54√(E/Fy)","0.91√(E/Fy)"],
           ["矩形钢管壁 — 受弯","1.12√(E/Fy)","1.40√(E/Fy)"]
         ]},
       notes:["Fy = 345 MPa（A992/Q345）时 √(E/Fy) = 24.1 → 翼缘 λp = 9.15、腹板 λp = 90.6。厚实 ⇒ 全截面 Mp；非厚实/细长 ⇒ 因局部屈曲折减（翼缘/腹板局部屈曲，第 F、E7 章）。"]},
      {h:"受拉构件（SNI 1729:2020 第 D 章）",
       table:{cols:["极限状态","设计强度"],
         rows:[
           ["毛截面屈服","φt·Pn = <strong>0.90·Fy·Ag</strong>"],
           ["净截面断裂","φt·Pn = <strong>0.75·Fu·Ae</strong>，Ae = U·An（U = 剪力滞后系数，表 D3.1）"],
           ["剪力滞后系数 U","1.0（全部板件相连）；仅翼缘相连 W 型取 0.90/0.85；通式 U = 1 − x̄/L"],
           ["长细比（宜）","L/r ≤ 300（D1）"]
         ]}},
      {h:"受压构件（SNI 1729:2020 第 E3 章 — 弯曲屈曲）",
       table:{cols:["项目","表达式"],
         rows:[
           ["名义强度","Pn = Fcr·Ag；φc = 0.90"],
           ["弹性屈曲应力","Fe = π²·E / (Lc/r)²（Lc = K·L）"],
           ["非弹性（Lc/r ≤ 4.71√(E/Fy)，即 Fy/Fe ≤ 2.25）","<strong>Fcr = [0.658^(Fy/Fe)]·Fy</strong>"],
           ["弹性（Lc/r &gt; 4.71√(E/Fy)）","<strong>Fcr = 0.877·Fe</strong>"],
           ["长细比（宜）","KL/r ≤ 200（E2）"]
         ]},
       notes:["4.71√(E/Fy)：Fy = 345 MPa 时 = 113，Fy = 250 MPa 时 = 134 — 非弹性与弹性柱屈曲的分界。单轴对称与十字形截面可能由扭转/弯扭屈曲（E4）控制。"]},
      {h:"受弯构件（SNI 1729:2020 第 F2 章 — 双轴对称 I 型）",
       table:{cols:["极限状态","承载力"],
         rows:[
           ["塑性弯矩（屈服）","Mn = Mp = <strong>Fy·Zx</strong>（φb = 0.90）"],
           ["弯扭屈曲 — Lb ≤ Lp","无 LTB；Mn = Mp"],
           ["LTB — Lp &lt; Lb ≤ Lr（非弹性）","Mn = Cb·[Mp − (Mp − 0.7Fy·Sx)·(Lb − Lp)/(Lr − Lp)] ≤ Mp"],
           ["LTB — Lb &gt; Lr（弹性）","Mn = Fcr·Sx ≤ Mp"],
           ["Lp（屈服限）","<strong>Lp = 1.76·ry·√(E/Fy)</strong>"],
           ["Lr（非弹性 LTB 限）","Lr = 1.95·rts·(E/0.7Fy)·√(Jc/(Sx·ho) + …)"]
         ]},
       notes:["Cb（弯扭屈曲修正系数）= 12.5·Mmax / (2.5·Mmax + 3·MA + 4·MB + 3·MC) ≥ 1.0；偏保守取 Cb = 1.0。非厚实/细长翼缘或腹板触发翼缘/腹板局部屈曲（F3–F5）。"]},
      {h:"受剪（SNI 1729:2020 第 G2 章）与组合内力（第 H1 章）",
       table:{cols:["项目","表达式"],
         rows:[
           ["名义抗剪","Vn = <strong>0.6·Fy·Aw·Cv1</strong>，Aw = d·tw"],
           ["Cv1（腹板抗剪系数）","轧制 I 型 h/tw ≤ 2.24√(E/Fy) 时取 1.0（φv = 1.00）；否则 &lt; 1.0"],
           ["轴力+弯矩组合（H1-1）","Pr/Pc ≥ 0.2：Pr/Pc + 8/9·(Mrx/Mcx + Mry/Mcy) ≤ 1.0"],
           ["","Pr/Pc &lt; 0.2：Pr/(2Pc) + (Mrx/Mcx + Mry/Mcy) ≤ 1.0"]
         ]}},
      {h:"抗震规定（AISC 341-22 / SNI 1729:2020 抗震章节）",
       table:{cols:["体系","关键要求"],
         rows:[
           ["SMF — 特殊抗弯框架","Ry = 1.1（A992）；高延性柱最大 Pu/φc·Pn = 0.75"],
           ["SCBF — 特殊中心支撑框架","支撑长细比 KL/r ≤ 200"],
           ["EBF — 偏心支撑框架","连梁转角 ≤ 0.08 rad（短连梁），≤ 0.02 rad（长连梁）"]
         ]},
       notes:["Ry 为预期屈服强度与标准最小屈服强度之比，用于抗震体系的能力设计。"]},
    ],
    sources:"SNI 1729:2020（= AISC 360-16）：B3/B4 章（φ/Ω、分类）、D 章（受拉）、E3 章（受压 Fcr）、F2 章（受弯 Mp/Lp/Lr/Cb）、G2 章（受剪）、H1 章（组合）— 提取自 PDF · AISC 360-22 表 B4.1、J3.2 · AISC 341-22（抗震） · GB 50017-2017 表 4.4.1（Q 牌号）、§6（设计强度 f = fy/γR）"
  },
  geotechnical:{
    title:"岩土与地基 — 设计参数",
    sections:[
      {h:"场地勘察要求（SNI 8460:2017 §6 / GB 50007-2011）",
       table:{cols:["要求","数值 / 准则"],
         rows:[
           ["最小钻孔深度","拟建基础底面以下 ≥ 6 m（SNI 8460 §6.3）"],
           ["确定场地类别的钻孔深度","≥ 30 m，以确定 Vs30 或 N60-SPT（SNI 1726:2019 §5.3）"],
           ["CPT 锥尖阻力 qc","以 kPa 或 MPa 计；qc > 15 MPa 通常为密实土 / 岩石"]
         ]}},
      {h:"承载力安全系数",
       table:{center:true,cols:["荷载工况","SNI 8460:2017","GB 50007-2011"],
         rows:[
           ["静载","FS ≥ 3.0","FS ≥ 2.5–3.0"],
           ["地震","FS ≥ 2.0","FS ≥ 1.5"],
           ["抗拔 / 倾覆","FS ≥ 1.5","FS ≥ 1.5"]
         ]}},
      {h:"沉降限值",
       table:{cols:["准则","限值"],
         rows:[
           ["独立基础 — 差异沉降","≤ 25 mm（SNI 8460:2017 §8.6）；L/300 至 L/500"],
           ["总沉降","≤ 50 mm（SNI）/ ≤ 200 mm（GB 50007 框架建筑）"]
         ]}},
      {h:"基于 SPT 的土层分类（SNI 8460:2017 / SNI 1726:2019 表 3）",
       table:{center:true,cols:["SPT N₆₀ / Vs30","分类","场地类别"],
         rows:[
           ["N < 15","软土","SE 或 SD"],["15 ≤ N < 50","硬土","SD"],
           ["N ≥ 50","密实土 / 岩石","SC–SB"],["Vs30 > 760 m/s","岩石","SB–SA"]
         ]}},
      {h:"桩型",
       table:{cols:["类型","说明"],
         rows:[
           ["打入桩","250×250 至 600×600 mm 预制 RC；承载力由静力公式或动测确定"],
           ["钻孔灌注桩","直径 400–2000 mm；最小 fc' = 21 MPa；摩擦+端承"],
           ["微型桩","直径 < 300 mm"]
         ]},
       notes:["群桩效率（Converse-Labarre）：η = 1 − [arctan(d/s)/90°] × (m+n−2)/(m×n)，其中 d = 桩径，s = 桩距，m×n = 桩群排列。"]},
      {h:"设计侧向土压力（SNI 1727:2020 表 3.2-1）— 地下室与挡土墙",
       table:{center:true,cols:["土类（USCS）","侧压力（kN/m² 每米深）"],
         rows:[
           ["GW / GP — 洁净砾石、砂砾混合","5.50（刚性墙：9.43）"],
           ["GM — 含粉土砾石","5.50（刚性：9.43）"],
           ["SW / SP — 洁净砂、砂砾混合","5.50（刚性：9.43）"],
           ["GC — 含黏土砾石","7.07（刚性：9.43）"],
           ["SM — 含粉土砂","7.07（刚性：9.43）"],
           ["SM-SC / SC — 粉黏砂、含黏土砂","13.35（刚性：15.71）"],
           ["ML / ML-CL — 无机粉土与粉黏土","13.35（刚性：15.71）"],
           ["CL — 无机黏土（低-中塑性）","15.71"],
           ["OL、MH、CH、OH — 有机/高塑性","不适合作回填料"]
         ]},
       notes:["为最优密度湿土的等效流体侧压力（主动/无约束）。“刚性墙” = 受约束不能位移的墙（如被楼板支撑）；深度 ≤ 2.44 m 且承轻型楼盖的地下室墙不视为刚性。",
              "浸水/饱和土：采用浮重度（折减）加全水压力。地面以下板与基础还须抗水浮力（§3.2.2）。",
              "为最低经验值；最终设计以 SNI 8460:2017 的场地专项分析（Ka、K0、超载、水）为准。"]},
    ],
    sources:"SNI 8460:2017 §6（勘察）、§8.6（沉降） · SNI 1727:2020 表 3.2-1（侧向土压力，提取自 PDF） · SNI 1726:2019 §5.3 与表 3（场地类别） · GB 50007-2011（安全系数、沉降） · SNI 2827:2008（CPT）"
  },
  design_loads:{
    title:"设计荷载 — 参考值",
    sections:[
      {h:"最小均布（Lo）与集中活荷载（SNI 1727:2020 表 4.3-1 = ASCE 7-16 表 4.3-1）",
       table:{center:true,cols:["使用功能","均布 Lo (kN/m²)","集中 (kN)","GB 50009 (kN/m²)"],
         rows:[
           ["住宅 — 除楼梯外各部位","1.92","—","2.0"],
           ["住宅 — 私用房间及其走廊","1.92","—","2.0"],
           ["住宅 — 公共房间及走廊","4.79","—","2.5"],
           ["办公 — 办公室","2.40","8.90","2.0"],
           ["办公 — 大堂及首层走廊","4.79","8.90","2.5"],
           ["办公 — 首层以上走廊","3.83","8.90","2.5"],
           ["办公 — 档案与计算机室","按使用从重","8.90","—"],
           ["集会 — 固定（锚固）座椅","2.87","—","3.0"],
           ["集会 — 活动座椅","4.79","—","3.5"],
           ["集会 — 大堂与平台","4.79","—","3.5"],
           ["集会 — 舞台地面","7.18","—","—"],
           ["体育场/馆 — 固定座椅","2.87","—","3.5"],
           ["医院 — 手术室、实验室","2.87","4.45","2.5"],
           ["医院 — 病房","1.92","4.45","2.0"],
           ["医院 — 首层以上走廊","3.83","4.45","2.5"],
           ["图书馆 — 阅览室","2.87","4.45","2.0"],
           ["图书馆 — 书库","7.18（≥，净高≥150mm）","4.45","2.5"],
           ["学校 — 教室","1.92","4.45","2.5"],
           ["学校 — 首层以上走廊","3.83","4.45","2.5"],
           ["学校 — 首层走廊","4.79","4.45","2.5"],
           ["楼梯与疏散通道","4.79（一/二户住宅 1.92）","1.33","3.5"],
           ["阳台与露台","1.5× 所服务区域（≤ 4.79）","—","2.5–3.5"],
           ["餐厅","4.79","—","2.5"],
           ["厂房 — 轻型","6.00","13.35","4.0"],
           ["厂房 — 重型","11.97","26.70","8.0–12.0"],
           ["仓库 — 轻型","6.00","—","5.0"],
           ["仓库 — 重型","11.97","—","≥7.0"],
           ["商店 — 零售首层","4.79","4.45","3.5"],
           ["商店 — 零售上层","3.59","4.45","3.5"],
           ["商店 — 批发各层","6.00","4.45","—"],
           ["车库 — 仅小汽车","1.92","见 §4.10","4.0"],
           ["人行道/可通卡车车道","11.97","35.60","—"],
           ["军械库与操练厅","7.18","—","—"],
           ["设备机房","4.79","—","7.0–10.0"],
           ["屋面 — 一般平/坡/拱","0.96","—","0.5"],
           ["屋面 — 上人 / 集会","按使用（集会 ≥4.79）","—","2.0"],
           ["屋面 — 种植 / 绿化","0.96（集会 4.79）","—","—"]
         ]},
       notes:["集中荷载作用于 0.6 m × 0.6 m（2.5 ft²），置于最不利位置 — 均布与集中取较不利者设计（SNI 1727 §4.4）。",
              "隔墙：楼面活载 < 3.83 kN/m² 且可能砌隔墙时加 ≥ 0.72 kN/m²（SNI 1727 §4.3.2）。"]},
      {h:"活荷载折减（SNI 1727:2020 §4.7 = ASCE 7-16 §4.7）",
       table:{cols:["项目","规定"],
         rows:[
           ["折减公式（SI）","<strong>L = Lo·(0.25 + 4.57/√(KLL·AT))</strong>，AT 单位 m²"],
           ["适用条件","仅当 KLL·AT ≥ 37.2 m²（400 ft²）；集会场所、L > 4.79 kN/m²、小汽车库、单向板（§4.7.6 外）不适用"],
           ["楼面下限","L ≥ 0.50·Lo（承托单层）；L ≥ 0.40·Lo（两层及以上）"],
           ["重载（> 4.79 kN/m²）","不折减（承托 ≥ 2 层构件最多 −20%）"]
         ]},
       notes:["KLL — 活荷载构件系数（表4.7-1）：内柱 4 · 无悬挑外柱 4 · 有悬挑边柱 3 · 有悬挑角柱 2 · 内梁与无悬挑边梁 2 · 其他构件（单/双向板、悬挑梁、有悬挑边梁）1。",
              "屋面活载折减（§4.8）：Lr = Lo·R1·R2，按从属面积与坡度取 0.58–0.96 kN/m²。"]},
      {h:"洪水荷载（SNI 1727:2020 第5章）",
       table:{cols:["荷载","确定方法"],
         rows:[
           ["设计依据","洪泛区按设计洪水位（DFE）（§5.4.1）"],
           ["静水压","至 DFE 的全水深作用于各受影响面；两侧均浸水取 设计水深 + 0.30 m（§5.4.2）"],
           ["动水压（V ≤ 3.05 m/s）","等效静水头 <strong>dh = a·V²/(2g)</strong>，拖曳系数 a ≥ 1.25，g = 9.81 m/s²（§5.4.3，式5.4-1）"],
           ["可破断墙体","破坏荷载 ≤ 0.96 kN/m²；基础与上部结构须经受洪水+其他荷载（§5.3.3）"],
           ["波浪荷载","破碎波、上托与漂浮物撞击按 §5.4.4（解析/数值/物理模型）"]
         ]}},
      {h:"栏杆、护栏、防撞与爬梯荷载（SNI 1727:2020 §4.5）",
       table:{cols:["构件","设计荷载"],
         rows:[
           ["栏杆/护栏顶杆 — 集中","<strong>0.89 kN</strong> 单点、任意方向、作用于任意点（§4.5.1）"],
           ["栏杆/护栏顶杆 — 均布","<strong>0.73 kN/m</strong> 任意方向（与 0.89 kN 不同时作用）；一/二户住宅及 ≤ 50 人厂房/仓库可免（§4.5.1.1）"],
           ["护栏填充件（栏杆柱、面板、中间杆）","0.22 kN 作用于 305 × 305 mm（§4.5.1.2）"],
           ["扶手（抓杆）系统","1.11 kN 单点集中（§4.5.2）"],
           ["车辆防撞栏（小汽车）","<strong>26.70 kN</strong> 水平、任意方向、距地 460–686 mm、作用于 305 × 305 mm（§4.5.3）"],
           ["固定爬梯","1.33 kN 集中 + 每 3.05 m 高一处；扶手延伸 0.445 kN（§4.5.4）"]
         ]}},
      {h:"冲击与吊车荷载（SNI 1727:2020 §4.6 与 §4.9）",
       table:{center:true,cols:["来源","增大 / 荷载"],
         rows:[
           ["一般冲击","已计入 §4.3 表列活荷载"],
           ["轻型机械（轴/电机驱动）","重量 +20%（§4.6.3）"],
           ["往复/动力驱动机械","重量 +50%（§4.6.3）"],
           ["电梯","按 ASME A17.1（§4.6.2）"],
           ["幕墙维护吊架支座","2.5 × 额定（或最大）吊载（§4.6.4）"],
           ["防坠落/安全绳锚固","13.8 kN（3,100 lb）活荷载（§4.6.5）"],
           ["吊车竖向冲击 — 单轨（电动）","最大轮压 +25%（§4.9.3）"],
           ["吊车竖向冲击 — 司机室/遥控桥式（电动）","+25%"],
           ["吊车竖向冲击 — 悬挂桥式（电动）","+10%"],
           ["吊车竖向冲击 — 手动","+0%"],
           ["吊车横向力","20% ×（额定起重量+吊具+小车重）（§4.9.4）"],
           ["吊车纵向力","最大轮压的 10%（§4.9.5）"],
           ["车库 — 小汽车集中","13.35 kN 作用于 114 × 114 mm（§4.10.1）"],
           ["停机坪 — 集中","2 个 0.75 × 最大起飞重量，间距 2.44 m，作用于 200 × 200 mm；另加单个 13.35 kN；不折减（§4.11）"]
         ]}},
      {h:"恒荷载与材料容重参考值",
       table:{cols:["构件","荷载"],
         rows:[
           ["RC 板 — 120 mm","2.88 kN/m²"],["RC 板 — 200 mm","4.80 kN/m²"],
           ["找平层 — 50 mm","1.10 kN/m²"],["面砖/石材饰面","0.4–1.1 kN/m²"],
           ["隔墙（轻质折算）","1.0 kN/m²"],["钢筋混凝土","24.0 kN/m³"],
           ["结构钢","78.5 kN/m³"],["砖砌体","18–22 kN/m³"],["水","9.81 kN/m³"]
         ]}},
    ],
    sources:"SNI 1727:2020 表 4.3-1（均布+集中）、§4.5（栏杆/防撞）、§4.6 与 §4.9（冲击/吊车）、§4.7 与表4.7-1（折减、KLL）、§4.8（屋面）、§4.10–4.11（车库/停机坪）、第5章（洪水）— 提取自 PDF · = ASCE 7-16 第4、5章 · GB 50009-2012 表 5.1.1"
  },
  serviceability:{
    title:"正常使用 — 挠度、位移与振动",
    sections:[
      {h:"竖向挠度限值（SNI 1727:2020 附录 CC.2.1 = ASCE 7-16 附录 CC）",
       table:{center:true,cols:["条件","建议限值"],
         rows:[
           ["楼面构件 — 满额定活载","<strong>L/360</strong>"],
           ["屋面构件","<strong>L/240</strong>"],
           ["可见挠度 / 一般建筑损伤 / 围护渗漏","L/300（悬臂 L/150）"],
           ["影响门窗、推拉隔断使用","L/200"],
           ["绝对限值 — 非承重隔墙","≤ 10 mm（除非为差异变形作专门构造）"]
         ]},
       notes:["正常使用荷载组合：短期 <strong>D + L</strong>（CC.2-1）；长期徐变/沉降 <strong>D + 0.5L</strong>（CC.2-2）。D 可取非结构元件安装后施加的恒载。",
              "🇨🇳 GB 50010 表3.4.3 给出明确钢筋混凝土限值：L ≤ 7 m → L/200；7–9 m → L/250；&gt; 9 m → L/300。🇮🇩🇺🇸 上述为建议值，非强制规范值。"]},
      {h:"侧向位移限值（SNI 1727:2020 附录 CC.2.2）",
       table:{cols:["项目","规定"],
         rows:[
           ["风致位移 — 整体与层间","建筑或层高的 <strong>H/600 至 H/400</strong>（脆性围护取小值）"],
           ["正常使用风组合","D + 0.5L + Wa，Wa = 正常使用风（CC.2-3）"],
           ["位移校核的风重现期","10 年（一般建筑）· 50 或 100 年（位移敏感建筑）"],
           ["层间绝对限值","≤ 10 mm 以保护隔墙、围护与玻璃（除非专门构造）"],
           ["地震位移","按 SNI 1726:2019 表20：按风险类别 0.020/0.015/0.010·hsx（Cd·δxe/Ie）"]
         ]}},
      {h:"楼盖振动与人员舒适度（SNI 1727:2020 附录 CC.2.3）",
       table:{center:true,cols:["条件","峰值加速度 (g)"],
         rows:[
           ["持续振动 — 安静活动（办公、住宅）","0.005–0.01 g 引起不适"],
           ["持续 — 活动 / 观演区","0.02–0.05 g 可容忍"],
           ["瞬态（阻尼良好的装修楼面 ζ ≥ 5%）","0.05–0.10 g 可容忍"],
           ["人类活动激励频率","2–6 Hz（节律性：跳舞、健身、欢呼 → 共振）"]
         ]},
       notes:["楼盖基频宜高于活动频率的约 2 倍（节律活动楼面常取 &gt; 7–8 Hz）。仅做静挠度验算不能保证振动合格 — 质量与阻尼同样关键（详评可用 AISC 设计指南 11）。"]},
    ],
    sources:"SNI 1727:2020 附录 C 与 CC（§CC.2.1 挠度、CC.2.2 位移、CC.2.3 振动）— 提取自 PDF · = ASCE 7-16 附录 CC · GB 50010-2010 表3.4.3 · SNI 1726:2019 表20（地震位移） · AISC 设计指南 11（楼盖振动）"
  },
  seismic:{
    title:"抗震设计 — 多标准参数",
    sections:[
      {h:"风险类别与重要性系数 Ie（SNI 1726:2019 / ASCE 7-22）",
       table:{cols:["风险类别","Ie","典型使用功能"],
         rows:[
           ["I","1.00","小型仓储、农业设施"],
           ["II","1.00","标准使用功能（多数建筑）"],
           ["III","1.25",">250 人学校、>300 人集会、无手术/急诊的医疗"],
           ["IV","1.50","关键设施：电厂、含手术/急诊的医院、消防/警察局、应急指挥中心、水处理设施、GIS 变电站"]
         ]}},
      {h:"抗震设计类别（SDC）判定矩阵",
       table:{center:true,cols:["SDC","SDS","SD1","适用"],
         rows:[
           ["A","< 0.167","< 0.067","所有风险类别"],
           ["B","< 0.33","< 0.133","I / II 类"],
           ["C","< 0.50（III/IV 类为 < 0.33）","< 0.20","I/II 类；或 III/IV 类"],
           ["D","≥ 0.50","≥ 0.20","I / II / III / IV 类"]
         ]},
       notes:["来源：SNI 1726:2019 表 8 与表 9。控制 SDC 取基于 SDS 与基于 SD1 两者中较严者。"]},
      {h:"抗震体系设计系数（SNI 1726:2019 表12 = ASCE 7-16/22 表12.2-1）",
       table:{center:true,cols:["抗震（侧力）体系","R","Ω₀","Cd","D 类高度限值 (m)"],
         rows:[
           ["A. 承重墙体系","","","",""],
           ["特殊钢筋混凝土剪力墙","5","2½","5","48"],
           ["普通钢筋混凝土剪力墙","4","2½","4","不允许"],
           ["特殊配筋砌体剪力墙","5","2½","3½","48"],
           ["轻型木/冷弯钢龙骨+结构面板","6½","3","4","20"],
           ["B. 框架（楼盖）体系","","","",""],
           ["钢偏心支撑框架（EBF）","8","2","4","48"],
           ["钢特殊中心支撑框架（SCBF）","6","2","5","48"],
           ["钢普通中心支撑框架（OCBF）","3¼","2","3¼","不允许"],
           ["钢屈曲约束支撑框架（BRBF）","8","2½","5","48"],
           ["特殊钢板剪力墙（SPSW）","7","2","6","48"],
           ["特殊钢筋混凝土剪力墙","6","2½","5","48"],
           ["钢-混凝土组合钢板剪力墙","6½","2½","5½","48"],
           ["C. 框架（抗弯）体系","","","",""],
           ["钢特殊抗弯框架（SMF / SRPMK）","8","3","5½","不限"],
           ["钢中等抗弯框架（IMF / SRPMM）","4½","3","4","不允许*"],
           ["钢普通抗弯框架（OMF / SRPMB）","3½","3","3","不允许"],
           ["钢筋混凝土特殊抗弯框架（SRPMK）","8","3","5½","不限"],
           ["钢筋混凝土中等抗弯框架（SRPMM）","5","3","4½","不允许"],
           ["钢筋混凝土普通抗弯框架（SRPMB）","3","3","2½","不允许"],
           ["D. 含特殊抗弯框架的双重体系（≥25%）","","","",""],
           ["钢 EBF + SMF","8","2½","4","不限"],
           ["钢 SCBF + SMF","7","2½","5½","不限"],
           ["特殊 RC 剪力墙 + SMF","7","2½","5½","不限"],
           ["钢 BRBF + SMF","8","2½","5","不限"],
           ["特殊钢板剪力墙 + SMF","8","2½","6½","不限"],
           ["E. 含中等抗弯框架的双重体系（≥25%）","","","",""],
           ["钢 SCBF + IMF","6","2½","5","10"],
           ["特殊 RC 剪力墙 + IMF","6½","2½","5","48"]
         ]},
       notes:["用法：基底剪力 V = Cs·W，Cs = SDS/(R/Ie)；构件设计内力用 Ω₀（超强系数，如收集器/柱）；设计层间位移 = Cd·δxe/Ie。R 越大 ⇒ 弹性力越小但延性构造越严。",
              "高度限值：不限（TB）· 不允许（TI）· 数字 = 该 SDC 下最大结构高度 hn（米）。*钢 IMF 在 D 类仅允许有限高度（如 ≤10 m，单层 ≤20 m）— 见表12脚注。",
              "🇨🇳 GB 50011 不用 R 系数：构件按多遇地震弹性设计，延性由抗震等级一~四级（强柱弱梁/强剪弱弯内力调整+构造）实现。"]},
      {h:"中国抗震设防烈度与加速度对照（GB 50011-2010）",
       table:{center:true,cols:["设防烈度","设计基本加速度 ag","αmax"],
         rows:[
           ["VI（6 度）","0.05 g","0.04"],["VII（7 度，0.10g）","0.10 g","0.08"],
           ["VII（7 度，0.15g）","0.15 g","0.12"],["VIII（8 度，0.20g）","0.20 g","0.16"],
           ["VIII（8 度，0.30g）","0.30 g","0.24"],["IX（9 度，0.40g）","0.40 g","0.32"]
         ]}},
    ],
    sources:"SNI 1726:2019 表12（R/Ω₀/Cd，提取自 PDF）、表 2（风险/Ie）、表 8 与 9（SDC） · ASCE 7-22 表 12.2-1 与 1.5-2 · GB 50011-2010 表 5.1.4-1（αmax）",
    tool_link:true
  },
  wind:{
    title:"风荷载 — 设计参数（多标准）",
    sections:[
      {h:"设计基础对比",
       table:{cols:["项目","SNI 1727:2020 / ASCE 7-22","GB 50009-2012"],
         rows:[
           ["基本参数","V — 10 m 高 3 秒阵风，极限状态（II 类重现期 700 年，III 类 1700 年，IV 类 3000 年）","w₀ — 基本风压（kN/m²），50 年重现期，10 m 高 10 分钟平均"],
           ["速度压","qz = 0.613·Kz·Kzt·Kd·Ke·V²（N/m²，V 单位 m/s）","wk = βz·μs·μz·w₀"],
           ["暴露 / 地面粗糙度","B（城市）、C（开阔 — 默认）、D（沿海水面）","A（沿海）、B（田野 — 基准）、C（城市）、D（密集城市）"],
           ["方向性系数","Kd = 0.85（建筑）","计入体型系数 μs"],
           ["阵风效应","G = 0.85（刚性）；柔性（T > 1 s）计算 Gf","βz 按高度与地貌的风振系数"],
           ["最小设计风压","MWFRS：墙面 0.77 kN/m² + 屋面 0.38 kN/m²","w₀ ≥ 0.30 kN/m²（绝对下限）"],
           ["印尼基本风速","SNI 1727 无全国风速图 — 由主管部门 / BMKG 极值分析确定。惯例：V = 28–36 m/s（3 秒阵风，极限）；东部岛屿更高","换算：w₀ = v₀²/1600，v₀ = 10 分钟平均 ≈ V(3秒)/1.42"]
         ]}},
      {h:"地形系数 Kzt（山丘、山脊、陡坎）— SNI 1727:2020 §26.8 / ASCE 7-22 §26.8",
       table:{cols:["条件","处理方法"],
         rows:[
           ["平坦地形（多数场地）","Kzt = 1.0"],
           ["山丘/山脊/陡坎，H/Lh ≥ 0.2 且 H ≥ 4.5 m（C/D 类）或 18 m（B 类）","Kzt = (1 + K1·K2·K3)² — 坡顶风速增大，K 系数按 ASCE 7 图 26.8-1"],
           ["GB 50009 等效做法","山顶 μz 乘以修正系数 η = [1 + tanα·(1 − z/2.5H)]²，§8.2.2"]
         ]},
       notes:["使用「场地分析」页获取场地高程，评估项目是否位于需 Kzt > 1.0 的坡顶 / 陡坎。"]},
      {h:"速度压速查表（C 类暴露，z = 10 m，Kzt = 1，Ke = 1）",
       table:{center:true,cols:["V 3 秒阵风 (m/s)","qz = 0.613·1.0·0.85·V² (kN/m²)","≈ GB w₀ 当量 (kN/m²)"],
         rows:[
           ["25","0.33","0.19 → 取下限 0.30"],["30","0.47","0.28 → 取下限 0.30"],
           ["33","0.57","0.34"],["36","0.68","0.40"],["40","0.83","0.50"]
         ]},
       notes:["GB 当量列：3 秒阵风除以 1.42 换算为 10 分钟平均，再按 w₀ = v₀²/1600 计算。低于 GB 下限 0.30 kN/m² 者取 0.30。"]},
      {h:"设计风压公式与流程（SNI 1727:2020 第26–27章）",
       table:{cols:["步骤","表达式 / 取值"],
         rows:[
           ["速度压","<strong>qz = 0.613·Kz·Kzt·Kd·Ke·V²</strong>（N/m²，V 单位 m/s）— 式 26.10-1"],
           ["主体抗风设计风压","<strong>p = q·G·Cp − qi·(GCpi)</strong>（N/m²）— 迎风用 qz，背风/侧/屋面用 qh"],
           ["围护构件（h ≤ 18.3 m）","p = qh·[(GCp) − (GCpi)]"],
           ["Ke — 地面高程系数","Ke = e^(−0.000119·zg)，zg = 场地高程（m）；偏保守取 Ke = 1.0"],
           ["最小设计风荷载","墙面 ≥ 0.77 kN/m² + 屋面 ≥ 0.38 kN/m²（同时作用）；敞开建筑 ≥ 0.77 kN/m²·Af"]
         ]}},
      {h:"暴露类别（SNI 1727:2020 §26.7）",
       table:{cols:["暴露","地貌（上风向地面粗糙度）"],
         rows:[
           ["B","城市/郊区、林地或密集障碍物（≥ 单户住宅尺度）— 上风向须延续 &gt; 457 m（建筑 &gt; 9.1 m 高时 &gt; 792 m）"],
           ["C（默认）","开阔地带、零散障碍物 &lt; 9.1 m 高；平坦开阔田野与草地"],
           ["D","平坦无障碍区与水面；光滑泥滩、盐滩、连续冰面"]
         ]},
       notes:["对每个风向在两侧各 45° 扇区确定暴露；取产生最大荷载者控制该方向。"]},
      {h:"速度压暴露系数 Kz / Kh（SNI 1727:2020 表 26.10-1）",
       table:{center:true,cols:["高度 z (m)","B 类","C 类","D 类"],
         rows:[
           ["0–4.6","0.57（0.70*）","0.85","1.03"],
           ["6.1","0.62（0.70*）","0.90","1.08"],
           ["9.1","0.70","0.98","1.16"],
           ["12.2","0.76","1.04","1.22"],
           ["15.2","0.81","1.09","1.27"],
           ["18.0","0.85","1.13","1.31"],
           ["24.4","0.93","1.21","1.38"],
           ["30.5","0.99","1.26","1.43"],
           ["48.8","1.13","1.39","1.55"],
           ["61.0","1.20","1.46","1.61"],
           ["91.4","1.35","1.59","1.73"],
           ["152.4","1.56","1.77","1.89"]
         ]},
       notes:["公式：4.6 m ≤ z ≤ zg 时 Kz = 2.01·(z/zg)^(2/α)；z &lt; 4.6 m 时 Kz = 2.01·(4.6/zg)^(2/α)。zg 与 α 见表 26.11-1（B：zg=365.76 m，α=7.0 · C：274.32，9.5 · D：213.36，11.5）。*第28章（低层）B 类 z &lt; 9.1 m 取 0.70。"]},
      {h:"风向系数 Kd（SNI 1727:2020 表 26.6-1）",
       table:{center:true,cols:["结构类型","Kd"],
         rows:[
           ["建筑 — 主体抗风体系与围护","0.85"],
           ["拱形屋面","0.85"],
           ["烟囱/储罐 — 方形","0.90"],
           ["烟囱/储罐 — 六边形 / 圆形","0.95 / 1.0"],
           ["独立实体墙与标牌","0.85"],
           ["镂空标牌 / 单层框架","0.85"],
           ["桁架塔 — 三角/方形/矩形","0.85"],
           ["桁架塔 — 其他截面","0.95"]
         ]}},
      {h:"封闭分类与内压 GCpi（SNI 1727:2020 表 26.13-1）",
       table:{center:true,cols:["封闭分类","GCpi"],
         rows:[
           ["封闭建筑","±0.18"],
           ["部分封闭建筑","±0.55"],
           ["部分敞开建筑","±0.18"],
           ["敞开建筑（每面墙 ≥ 80% 敞开）","0.00"]
         ]},
       notes:["+ 与 − 分别表示指向与背离内表面；正负两种工况均须验算。IV 类风险的玻璃须满足 ASTM E1996 抗冲击（风携碎物）。"]},
      {h:"外墙体型系数 Cp（SNI 1727:2020 图 27.3-1，主体抗风）",
       table:{center:true,cols:["表面","Cp","配用"],
         rows:[
           ["迎风墙","+0.8","qz"],
           ["背风墙（L/B ≤ 1）","−0.5","qh"],
           ["背风墙（L/B = 2）","−0.3","qh"],
           ["背风墙（L/B ≥ 4）","−0.2","qh"],
           ["侧墙（全部 L/B）","−0.7","qh"]
         ]},
       notes:["屋面 Cp 随 h/L 与屋面角 θ 变化（图 27.3-1）：迎风屋面 −0.9 至 +0.4，背风屋面 −0.3 至 −0.6。阵风效应系数 G = 0.85（刚性建筑 n1 ≥ 1 Hz）；柔性建筑计算 Gf（§26.11）。"]},
      {h:"围护构件 — C&C（SNI 1727:2020 第30章）",
       table:{cols:["项目","规定"],
         rows:[
           ["设计风压（h ≤ 18.3 m）","<strong>p = qh·[(GCp) − (GCpi)]</strong>（N/m²）"],
           ["有效受风面积","跨度 ×（从属宽度 与 跨度/3 取大）— 面积越大 |GCp| 越小"],
           ["墙面 GCp — 4 区（中部）","1 m² 时 ≈ +0.9 / −0.99 → 50 m² 时 +0.7 / −0.8（图 30.3-1）"],
           ["墙面 GCp — 5 区（角部）","1 m² 时 ≈ +0.9 / −1.26 → 50 m² 时 +0.7 / −0.8（吸力更大）"],
           ["屋面 GCp（平屋面 θ ≤ 7°）","1 区中部 −1.3 · 2 区边缘 −1.8 · 3 区角部 −2.8（上吸，小面积）"],
           ["C&C 最小风压","|p| ≥ 0.77 kN/m²（16 psf）"]
         ]},
       notes:["角部/边缘区（3、5 区）吸力最大 — 对围护连接件与屋面至关重要。风携碎物区 IV 类风险玻璃须抗冲击（ASTM E1996）。完整分区曲线见图 30.3-1 至 30.6。"]},
      {h:"其他结构与屋面设备（SNI 1727:2020 第29章）",
       table:{cols:["构件","设计风力"],
         rows:[
           ["其他结构（烟囱、储罐、标牌、塔架）","<strong>F = qz·G·Cf·Af</strong>（N）— Cf 见图 29.4-1…4，Af = 投影面积"],
           ["屋面设备 — 水平","Fh = qh·(GCr)·Af；Af &lt; 0.1·Bh 时 <strong>GCr = 1.9</strong>，至 Af = Bh 线性减至 1.0"],
           ["屋面设备 — 竖向上吸","Fv = qh·(GCr)·Ar；Ar &lt; 0.1·BL 时 <strong>GCr = 1.5</strong>，至 Ar = BL 减至 1.0"],
           ["独立实体墙 / 标牌","F = qh·G·Cf·As；Cf ≈ 1.2–2.0（按净空比与长宽比，图 29.3-1）"],
           ["烟囱 / 圆形储罐","Cf ≈ 0.5–0.7（光滑圆形）至 1.3–2.0（方形），随 h/D 与粗糙度"]
         ]}},
    ],
    sources:"SNI 1727:2020 表 26.6-1（Kd）、§26.7（暴露）、表 26.10-1（Kz）、表 26.11-1（zg/α）、表 26.13-1（GCpi）、图 27.3-1（Cp）、第29章（Cf、屋面 GCr）、第30章（C&C GCp）、§26.10.2 与 §27.1.5（最小风压）— 提取自 PDF · = ASCE 7-16 第26–30章 · GB 50009-2012 §8",
    tool_link_site:true
  },
  rain:{
    title:"雨荷载与降雨 — 设计参数",
    sections:[
      {h:"屋面雨水荷载（SNI 1727:2020 §8 = ASCE 7-22 第 8 章）",
       table:{cols:["参数","要求"],
         rows:[
           ["设计雨水荷载","R = 0.0098·(ds + dh) kN/m² — ds = 至溢流口静水头 (mm)；dh = 设计流量下溢流口以上水头 (mm)"],
           ["排水系统设计基础","假定主排水系统堵塞；溢流（次级）排水须单独承担设计降雨"],
           ["积水失稳","屋面坡度 < 6.3 mm/m（¼ in/ft）或易积水区格须验算积水连续倒塌（ASCE 7 §8.4 / AISC 360 附录 2）"],
           ["GB 50009-2012 处理方式","无单独雨荷载章节 — 由 ≥ 0.50 kN/m² 非上人屋面活载覆盖 + 按 GB 50015 强制排水设计；以最小屋面坡度防积水"]
         ]}},
      {h:"印尼降雨设计背景（BMKG 气候资料）",
       table:{cols:["项目","典型值 / 指引"],
         rows:[
           ["屋面排水设计降雨强度","多数印尼场地 100–200 mm/hr（5 分钟历时）— 最终设计采用 BMKG IDF 曲线"],
           ["全国年降雨量范围","800 mm（东努沙登加拉）至 4500+ mm（西苏门答腊高地）"],
           ["雨季（印尼西部与南部大部）","10 月 – 4 月（12–2 月峰值，西北季风）"],
           ["反向雨季（马鲁古、苏拉威西部分地区）","5 月 – 9 月（东南季风迎风）"],
           ["施工组织","土方与混凝土浇筑避开雨季高峰；地下水位以下开挖预留降水措施"]
         ]},
       notes:["使用「场地分析」页获取项目坐标的实际逐月降雨历史（3 年，ERA5），识别当地雨季。"]},
    ],
    sources:"SNI 1727:2020 §8（= ASCE 7-16 第 8 章） · ASCE 7-22 第 8 章与 §8.4（积水） · AISC 360-22 附录 2 · GB 50009-2012 §5.3（屋面活载） · GB 50015（排水） · BMKG 气候平均值",
    tool_link_site:true
  },
  purlin:{
    title:"檩条与墙梁设计 — 多标准参数",
    sections:[
      {h:"适用标准",
       table:{cols:["体系","印尼","美国","中国"],
         rows:[
           ["冷弯 C/Z 檩条","SNI 7971:2013（= AISI S100）","AISI S100-16 / AISC 360-22","GB 50018-2002 + GB 51022-2015"],
           ["热轧槽钢檩条","SNI 1729:2020","AISC 360-22","GB 50017-2017"],
           ["标准详图图集","—","ACI/AISC 设计指南","11G521-1（钢檩条）、11G521-2（钢墙梁）、23G518-1（门式刚架，无吊车）"]
         ]}},
      {h:"挠度与位移限值",
       table:{center:true,cols:["构件","GB 51022-2015（附录 A）","IBC 2018 表 1604.3 / 美国惯例","SNI 惯例"],
         rows:[
           ["屋面檩条 — 压型钢板屋面","L/150","L/180（活载）；L/120（总挠度，无吊顶）","常用 L/180"],
           ["屋面檩条 — 有吊顶","L/240","L/240（抹灰吊顶 L/360）","L/240"],
           ["墙梁（水平挠度）","L/100","L/120（支承墙板）","L/120–L/150"],
           ["门式刚架斜梁（竖向）","L/180","L/180","L/180"],
           ["门式刚架柱顶位移（风/震）","h/60","h/60–h/100（正常使用）","h/60"]
         ]},
       notes:["GB 值经本库 23G518-1 门式刚架图集验证：斜梁挠度 ≤ L/180（L 为刚架跨度），风荷载或多遇地震下柱顶位移 ≤ h/60；荷载分项系数恒载 1.3 / 活载 1.5。"]},
      {h:"常用截面、跨度与间距",
       table:{cols:["参数","典型值"],
         rows:[
           ["冷弯 C/Z 截面高度","100 – 300 mm（C100–C300 / Z100–Z300）"],
           ["厚度范围（SNI 7971 适用范围）","0.4 – 3.0 mm（冷弯）；檩条常用 1.5–3.0 mm"],
           ["檩距","1.2 – 1.5 m（金属板屋面）；0.35–0.5 mm 薄板时 ≤ 1.2 m"],
           ["简支经济跨度","4 – 7.5 m；连续搭接 Z 体系可达 9–12 m"],
           ["拉条（trekstang / 拉条）","跨度 4–6 m 跨中一道；>6 m 三分点；墙梁与陡坡屋面必设"],
           ["材料牌号","G300/G450/G550 卷板（SNI 7971；G550 t<0.9 mm 取 0.90·fy）、Q235B/Q355（GB）、ASTM A653 SS Gr 50/55"]
         ]}},
      {h:"必要设计验算（SNI 7971 / AISI S100 / GB 50018）",
       table:{cols:["验算项","关键考虑"],
         rows:[
           ["受弯 — 有效截面","薄壁板件局部屈曲 → 有效宽度法（SNI 7971 §2；AISI S100 附录 1）或直接强度法"],
           ["整体（弯扭）稳定","重力荷载下受压翼缘由自攻钉连接的屋面板约束 — 但风吸力下无约束"],
           ["风吸力反向（关键！）","吸力使弯矩反号：自由翼缘受压且无支撑 — 大风场地常起控制作用；按 R 系数法（AISI D6.1）或完整稳定验算"],
           ["腹板压跛","支座 / 檩托处薄腹板验算（SNI 7971 §3.3.4）"],
           ["弯剪组合","连续体系的搭接与支座处"],
           ["连接","自攻钉连屋面板；檩托常用 M12 螺栓；连续 Z 搭接长度 ≥ 跨度的 10%"]
         ]}},
    ],
    sources:"SNI 7971:2013（= AISI S100-12） · AISI S100-16 / AISC 360-22 · GB 51022-2015 §3 与附录 A · GB 50018-2002 · 23G518-1 图集 §5.9（PDF 提取：斜梁 L/180、位移 h/60、分项系数 1.3/1.5） · 11G521-1/-2 檩条与墙梁图集 · IBC 2018 表 1604.3"
  },
  foundation_type:{
    title:"基础类型选择 — 多标准准则",
    sections:[
      {h:"按土质条件选型矩阵",
       table:{cols:["土质 / 场地条件","推荐基础类型","标准依据"],
         rows:[
           ["浅层密实砂 / 硬黏土（N60 ≥ 15–30，qa ≥ 150 kPa）","独立（扩展）或条形基础，埋深 ≥ 0.5 m","SNI 8460:2017 §7 · GB 50007-2011 §5"],
           ["中等土质、柱距较密（基础面积 > 约 50% 占地）","筏板 / 片筏基础","SNI 8460:2017 §7 · ACI 336.2R"],
           ["软黏土 / 松砂厚 > 3–5 m，中重荷载","打入预制桩 250–600 mm 方桩（fc' ≥ 35 MPa，ACI 543R）或钻孔灌注桩 400–2000 mm","SNI 8460:2017 §9 · ACI 543R-12 · JGJ 94-2008"],
           ["极软 / 有机质土，沉降敏感结构","钻孔桩 / 打入桩至持力层；考虑负摩阻力","SNI 8460:2017 §9.2 · JGJ 94-2008 §5.4"],
           ["可液化土层（松散饱和砂，SDS ≥ 0.50）","桩穿越液化深度 + 延性构造；或地基处理","SNI 1726:2019 §11 · SNI 8460:2017 §10 · JGJ 94 §3.4"],
           ["膨胀土 / 湿陷性土","基础加深至活动区以下、筏板或桩基；控制含水","GB 50007-2011 第 6 章（特殊土）"],
           ["高地下水 / 地下室抗浮","筏板 + 抗拔桩或锚杆；防水等级按 G329 图集","SNI 8460:2017 · G329-1~4（2018）"],
           ["场地受限 / 托换 / 低净空","微型桩（< 300 mm）","SNI 8460:2017 §9 · FHWA 惯例"]
         ]}},
      {h:"安全系数 — 地基承载与单桩承载",
       table:{center:true,cols:["工况","SNI 8460:2017","GB 50007 / JGJ 94","美国惯例（ASD）"],
         rows:[
           ["浅基础承载 — 静载","FS ≥ 3.0","K ≥ 2.5–3.0","FS ≥ 3.0"],
           ["浅基础承载 — 地震","FS ≥ 2.0","K ≥ 1.5","FS ≥ 2.0"],
           ["单桩轴向 — 有静载试验","FS ≥ 2.0","K = 2.0（Ra = Quk/2）","FS ≥ 2.0"],
           ["单桩轴向 — 仅计算","FS ≥ 2.5–3.0","对特征值 K = 2.0","FS ≥ 2.5–3.0"],
           ["抗拔 / 倾覆","FS ≥ 1.5","K ≥ 1.5","FS ≥ 1.5"]
         ]}},
      {h:"桩基构造最低要求",
       table:{cols:["参数","要求"],
         rows:[
           ["桩中心距","≥ 3.0·D（摩擦桩，JGJ 94 §3.3）；绝对最小 ≥ 2.5·D；软土大群桩 3.5–4D"],
           ["边距（桩至承台边）","≥ 1.0·D 且 ≥ 250 mm"],
           ["钻孔桩最小纵筋","0.2 – 0.65%（JGJ 94 表 4.1.1）；抗震区 ≥ 0.5%（SNI 惯例）；最少 6 根 D12"],
           ["最低混凝土等级","C25（JGJ 94）/ 钻孔桩 fc' ≥ 21–28 MPa，打入预制桩 ≥ 35 MPa（ACI 543R）"],
           ["保护层（水下 / 接土）","75 mm（ACI 543R / SNI 2847 浇筑于土壤）；有永久护筒 50 mm"],
           ["桩嵌入承台","50–100 mm + 钢筋锚固；插筋按 SNI 2847 §16"],
           ["群桩效率（摩擦）","Converse-Labarre：η = 1 − [arctan(D/s)/90°]·(m+n−2)/(m·n)"]
         ]}},
      {h:"沉降验收标准",
       table:{center:true,cols:["准则","SNI 8460:2017","GB 50007-2011"],
         rows:[
           ["总沉降 — 独立基础","≤ 50 mm","≤ 200 mm（框架，压缩土）"],
           ["相邻柱差异沉降","≤ 25 mm；角变形 ≤ 1/300（框架），≤ 1/500（敏感结构）","0.002·L（框架结构）"],
           ["筏板平均沉降","≤ 75–100 mm（视情况）","≤ 200 mm；倾斜按高度限值（表 5.3.4）"]
         ]},
       notes:["基础选型必须以 SNI 8460:2017 §6 场地勘察为依据：钻孔至基底以下 ≥ 6 m，确定场地类别 ≥ 30 m（或至基岩）— 区域地质见「场地分析」页，场地类别见「抗震工具」。"]},
    ],
    sources:"SNI 8460:2017 §6（勘察）、§7（浅基础）、§9（桩基）、§10（液化） · GB 50007-2011 §5（承载 K）、第 6 章（特殊土）、表 5.3.4（沉降） · JGJ 94-2008 §3.3（桩距）、表 4.1.1（配筋） · ACI 543R-12（混凝土桩） · ACI 336.2R（筏板） · G329-1~4（防水）",
    tool_link_site:true
  },
  fire:{
    title:"消防 — 设计参数（多标准）",
    sections:[
      {h:"消防车道与登高扑救场地（SNI 03-1735-2000 §4）",
       table:{cols:["参数","要求"],
         rows:[
           ["扑救硬地（perkerasan）— 设置条件","最高居住楼面 &gt; 室外地坪 10 m 时设置。10 m 以下：仅需沿设有扑救口一侧设 4 m 宽操作带，且距消防车通道 ≤ 45 m"],
           ["硬地最小尺寸","<strong>宽 ≥ 6 m，长 ≥ 15 m</strong>；通道其他部位宽 ≥ 4 m"],
           ["相对扑救口位置","最近边距扑救口中心 2–10 m（水平）"],
           ["承载力","居住楼面 &gt; 24 m 的建筑：硬地须承受 <strong>44 吨消防车</strong> 支腿静载"],
           ["坡度","硬地 ≤ 1:15；车道 ≤ 1:8.5"],
           ["长度 / 回转","硬地 ≤ 46 m 否则设回车场；外缘回转半径 ≥ 10.5 m"],
           ["净空","硬地 / 车道上方 ≥ 5 m"],
           ["消防车道（楼面 &gt; 10 m）","宽 ≥ 6 m，距建筑 ≥ 2 m，至少 2 侧设置"]
         ]}},
      {h:"按建筑体积确定的消防车道覆盖比例（SNI 03-1735-2000 表 4.2.3）",
       table:{center:true,cols:["建筑体积","最低消防扑救覆盖范围"],
         rows:[
           ["&lt; 7,100 m³","场地周长的 1/6"],
           ["&gt; 7,100 m³","建筑周长的 1/6"],
           ["&gt; 28,000 m³","建筑周长的 1/4"],
           ["&gt; 56,800 m³","建筑周长的 1/2"],
           ["&gt; 85,200 m³","建筑周长的 3/4"],
           ["&gt; 113,600 m³","建筑全周长（各侧）"]
         ]},
       notes:["🇨🇳 GB 50016-2014 §7：消防车道净宽 ≥ 4.0 m、净高 ≥ 4.0 m；高层须沿 ≥ 1 长边或 ≥ 1/4 周长设车道；内院宽 &gt; 24 m 须设穿过式车道；尽头回车场 ≥ 12×12 m（高层 15×15 / 18×18 m）。",
              "🇺🇸 IFC / NFPA 1：消防车道净宽 ≥ 6.1 m（20 ft）、净高 ≥ 4.1 m（13.5 ft），距建筑各部位 ≤ 46 m（150 ft）；尽头 &gt; 46 m 须设回车场。"]},
      {h:"室外消火栓与供水（SNI 03-1735-2000 §5，表 5.4）",
       table:{cols:["参数","要求"],
         rows:[
           ["覆盖","消防车道各部位距市政消火栓 ≤ <strong>50 m</strong>；否则设室外消火栓使各点处于 50 m 半径内"],
           ["最小供水（总）","≥ 2,400 L/min（§5.3）"],
           ["住宅","1 个消火栓 — <strong>≥ 38 L/s @ 3.5 bar</strong>，储水 45 min"],
           ["非住宅 &lt; 1,000 m²（最大楼层）","2 个消火栓 — 第 1 个 ≥ 38 L/s @ 3.5 bar + 第 2 个 ≥ 19 L/s @ 3.5 bar，45 min"],
           ["每增加 1,000 m²","+1 个消火栓，+1,200 L/min 市政供水，45 min"]
         ]},
       notes:["🇨🇳 GB 50974-2014：室外消火栓流量按体积/功能（约 15–40 L/s）；间距 ≤ 120 m，距被保护建筑 ≤ 150 m，距墙 ≥ 5 m。🇺🇸 NFPA 24 / AWWA：按消防用水量确定流量与间距（IFC 附录 B：1,000–8,000 gpm）。"]},
      {h:"消防扑救口 — Bukaan Akses（SNI 03-1735-2000 §6）",
       table:{cols:["参数","要求"],
         rows:[
           ["最小洞口尺寸","≥ <strong>宽 850 mm × 高 1,000 mm</strong>，下沿距楼面 ≤ 1,000 mm"],
           ["数量（顶层 ≤ 40 m）","每 620 m² 楼面设 1 个；每层 ≥ 2 个"],
           ["标识","红色三角 + “AKSES PEMADAM KEBAKARAN – JANGAN DIHALANGI”（消防扑救口 — 严禁堵塞）"]
         ]}},
      {h:"被动防火 — 耐火极限 / TKA（SNI 03-1736-2000 · 部长条例 26/2008 表 1）",
       table:{center:true,cols:["构件","🇮🇩 I 型（条例 26）","🇨🇳 GB 50016 一级","🇺🇸 IBC I-A 型"],
         rows:[
           ["主要结构 / 柱","3 h","3.0 h","3 h"],
           ["梁","2–3 h","2.0 h","2 h（楼面构件）"],
           ["楼板","2 h","1.5 h","2 h"],
           ["承重外墙","3 h","3.0 h","3 h"],
           ["疏散楼梯间","2 h","1.5 h（不燃）","2 h"]
         ]},
       notes:["TKA 记法为 承载/完整性/隔热（分钟），如 180/180/180。构造类型 I–V（条例 26）↔ GB 一~四级 ↔ IBC I–V 型，耐火极限依次降低。",
              "较低等级：🇨🇳 GB 二级柱 2.5 h、梁 1.5 h、楼板 1.0 h；三级柱 2.0 h；四级柱 0.5 h。"]},
      {h:"防火分区与防火间距",
       table:{cols:["参数","🇨🇳 GB 50016-2014","🇺🇸 IBC / 🇮🇩 SNI 1736"],
         rows:[
           ["单/多层民用最大防火分区（一/二级）","2,500 m²（设喷淋 ×2）","IBC 表 506.2 按功能与类型；SNI 按建筑类别"],
           ["高层民用最大防火分区","1,500 m²（设喷淋 ×2 = 3,000）","高层设喷淋按 IBC 403/506"],
           ["地下最大防火分区","500 m²（设喷淋 ×2）","—"],
           ["建筑间防火间距（一/二级 ↔ 一/二级）","≥ 6 m（至三级 ≥ 7 m，至四级 ≥ 9 m）","IBC 按防火间距与未保护洞口比例"],
           ["高层至高层间距","≥ 13 m","按地方规范 / 暴露"]
         ]}},
      {h:"安全疏散",
       table:{cols:["参数","🇮🇩 SNI / 条例 26（≈ NFPA 101）","🇨🇳 GB 50016-2014"],
         rows:[
           ["疏散通道最小宽度","915 mm（新）/ 710 mm（既有）","门 ≥ 0.90 m，走道 ≥ 1.10–1.40 m，楼梯 ≥ 1.10–1.30 m"],
           ["袋形走道","≤ 6 m","房间门 → 安全出口 ≤ 20–22 m（设喷淋 +25%）"],
           ["至出口疏散距离（设喷淋）","办公约 60–76 m；集会约 45 m","按表 5.5.17 各功能"],
           ["疏散距离（未设喷淋）","办公约 45 m；集会约 30 m","较设喷淋者减小"],
           ["疏散宽度指标","按每 100 人容量","每 100 人 0.65–1.00 m（按层/功能）"],
           ["最少安全出口数","每层/区 ≥ 2 个（按人数增加）","≥ 2 个（个别情况可设 1 个）"]
         ]}},
      {h:"主动消防 — 喷淋、消火栓、灭火器",
       table:{cols:["系统","🇺🇸 NFPA / 🇮🇩 SNI","🇨🇳 GB"],
         rows:[
           ["喷淋设计喷水强度 — 轻危险级","0.10 gpm/ft²（≈ 4.1 mm/min），作用面积 139 m²（NFPA 13 / SNI 03-3989）","GB 50084：0.04–0.06 L/s·m²，面积 160 m²"],
           ["喷淋 — 中危险级","OH1 0.15 / OH2 0.20 gpm/ft²（6.1–8.1 mm/min）","按危险级 0.06–0.16 L/s·m²"],
           ["喷头保护面积","轻 ≤ 20.9 m²；中 ≤ 12.1 m²/头","轻 ≤ 20 m²；间距 ≤ 3.6–4.4 m"],
           ["室内消火栓 / 水带","水带 30 m + 5 m 充实水柱（SNI 03-1745）；I 类 500 gpm + 每立管 250 gpm，剩余 100 psi（NFPA 14）","室内消火栓：1 股充实水柱全覆盖（高层 ≥ 2 股），≥ 5 L/s/股"],
           ["手提灭火器（APAR）保护距离","A 类 ≤ 23 m · B 类 ≤ 15 m · K 类 ≤ 9 m（条例 26 §5.6 / NFPA 10）","GB 50140：轻级 ≤ 25 m（A）/ 15 m（B）"]
         ]},
       notes:["喷淋/消火栓的设置由建筑高度、面积与功能触发 — 如 SNI 对多数 &gt; 8 层或 &gt; 24 m 的建筑要求喷淋；GB 50016 对高层一类民用建筑及大型集会/商业场所强制设自动喷水。"]},
    ],
    sources:"SNI 03-1735-2000 §4（消防车道与硬地）、§5+表5.4（室外消火栓）、§6（扑救口） · SNI 03-1736-2000（被动防火） · 部长条例 26/PRT/M/2008 表1（TKA）、§3.11（疏散）、§5.6（灭火器） · GB 50016-2014/2018 §5（防火分区/间距）、§7（消防车道） · GB 50974-2014 / GB 50084 / GB 50140 · NFPA 1/10/13/14/24/101 · IBC 2018 第 5–10 章"
  }
};
for(var mk in MOD_ZH){
  if(KB.answer_modules[mk])KB.answer_modules[mk].zh=MOD_ZH[mk];
}

})();
