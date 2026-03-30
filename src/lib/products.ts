export interface Product {
  id: string;
  slug: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  salePrice?: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: string;
  rating: number;
  reviewCount: number;
  isBestseller: boolean;
  isNew: boolean;
  features: { en: string[]; ar: string[] };
  fabric: { en: string; ar: string };
  stockQuantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: { en: string; ar: string };
  avatar: string;
}

export const categories = [
  'all', 'tops', 'bottoms', 'abayas', 'hijabs', 'accessories',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: '22',
    slug: 'long-sleeve-compression-t-shirt',
    name: { en: "Long Sleeves Compression T-shirt", ar: "تيشيرت الضغط الرياضي بأكمام طويلة" },
    description: {
      en: "Long Sleeve Compression T‑Shirt\n\n- ESC‑ing the Average Life.\n\n- Train without distraction. Move without limits. Built as your second skin, this long‑sleeve compression top is engineered to support every sprint, lift, and stretch — while keeping you confidently covered.\n\n- Why You’ll Love It:\n- Second‑Skin Compression: Supports muscles and reduces fatigue during high‑intensity training.\n- Full‑Range Raglan Sleeves: Seam‑free shoulders for unrestricted overhead movement.\n- No‑Chafe Flat Seams: Smooth interior construction that eliminates irritation.\n- Stay‑Put Thumbholes: Extra wrist coverage that keeps sleeves locked in place.\n- Moisture-Wicking & Antibacterial Fabric: Breathable, fast-drying performance blend that pulls sweat away from the skin while the antibacterial treatment helps reduce odor and keeps the fabric fresher for longer. \n\n- Built for Performance:\nCrafted from a high‑stretch technical blend designed for muscle support, sweat control, and long‑lasting shape retention. Reinforced crew neckline ensures durability through repeated training and washing.\n\n- Available Colors:\n- Burgundy\n- Jet Black\n- Slate Lavender\n- Forest Green\n\n- Mix & Match: Style it with the Pro‑Performance Compression Leggings for a sculpted athletic set, or pair it with The Performance High‑Rise Flare Pants for a refined, flared modest silhouette.",
      ar: "تيشيرت الضغط الرياضي بأكمام طويلة\n\n- تم تصميم تيشيرت الضغط طويل الأكمام هذا للأداء الرياضي عالي الكثافة، مع تركيز دقيق على الحركة الانسيابية والراحة المطلقة على البشرة.\n\n- التصميم والبناء:\n- تصميم أكمام راجلان (Raglan): تم اعتماد قصة راجلان حيث يمتد الكم حتى الياقة بقطعة واحدة، مما يلغي خياطة الكتف العلوية ويمنح مدى حركة أوسع ويقلل الاحتكاك أثناء التمارين العلوية.\n- قصة ضغط ملاصقة للجسم: تصميم \"الجلد الثاني\" يدعم العضلات ويثبت مكانه أثناء التمارين المكثفة دون انزلاق.\n- ياقة دائرية معززة: تقفيل منخفض السماكة ومدعم للحفاظ على شكل الياقة ومنع التمدد مع الاستخدام المتكرر.\n\n- التفاصيل التقنية: خياطة مسطحة (Flatlock): جميع الوصلات — على خطوط الراجلان، الجوانب والحافة — منفذة بخياطة مسطحة تقلل الاحتكاك وتزيد المتانة تحت الضغط.\n- فتحات إبهام مدمجة: أطراف الأكمام مزودة بفتحات إبهام معززة لتثبيت الكم وتوفير تغطية إضافية لليد أثناء التمارين الخارجية.\n- شعار عاكس أنيق: شعار ESC بتصميم سهمي عاكس في منتصف الصدر لمظهر احترافي نظيف.\n\n- ققماش طارد للرطوبة ومضاد للبكتيريا: مزيج تقني عالي الأداء، قابل للتهوية وسريع الجفاف، يعمل على سحب العرق بعيدًا عن البشرة للحفاظ على إحساس جاف ومريح. كما تساعد المعالجة المضادة للبكتيريا على تقليل الروائح والحفاظ على نضارة القماش لفترة أطول.\n\n- الألوان المتوفرة:\n- نبيتي داكن (Burgundy)\n- أسود فحمي (Jet Black)\n- لافندر رمادي راقٍ (Slate Lavender)\n- أخضر غابات (Forest Green)\n\n- نسّقيه بطريقتك: يمكنك تنسيقه مع ليغينغز Pro-Performance الضاغط للحصول على طقم رياضي يمنحك مظهراً منحوتاً وأداءً عالياً، أو ارتدائه مع بنطال أداء بخصر عالٍ وقصّة فلير انسيابية لإطلالة محتشمة و أنيقة.",
    },
    price: 699,
    images: ["/products/22/main_69b14b9f54538_1773226911.jpg","/products/22/img0_69b14b9f578e4_1773226911.jpg","/products/22/img1_69b14b9f57ee5_1773226911.jpg","/products/22/img2_69b14b9f58444_1773226911.jpg","/products/22/img3_69b14b9f58987_1773226911.jpg","/products/22/img4_69b14b9f58e7f_1773226911.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Burgundy","hex":"#660033"},{"name":"Deep Olive","hex":"#556b2f"},{"name":"Sleek Lavendar","hex":"#6a6882"},{"name":"True Black","hex":"#000000"}],
    category: 'tops',
    rating: 4.6,
    reviewCount: 121,
    isBestseller: true,
    isNew: false,
    features: {
      en: ["ESC‑ing the Average Life.","Train without distraction. Move without limits. Built as your second skin, this long‑sleeve compression top is engineered to support every sprint, lift, and stretch — while keeping you confidently covered.","Why You’ll Love It:","Second‑Skin Compression: Supports muscles and reduces fatigue during high‑intensity training.","Full‑Range Raglan Sleeves: Seam‑free shoulders for unrestricted overhead movement."],
      ar: ["تم تصميم تيشيرت الضغط طويل الأكمام هذا للأداء الرياضي عالي الكثافة، مع تركيز دقيق على الحركة الانسيابية والراحة المطلقة على البشرة.","التصميم والبناء:","تصميم أكمام راجلان (Raglan): تم اعتماد قصة راجلان حيث يمتد الكم حتى الياقة بقطعة واحدة، مما يلغي خياطة الكتف العلوية ويمنح مدى حركة أوسع ويقلل الاحتكاك أثناء التمارين العلوية.","قصة ضغط ملاصقة للجسم: تصميم \"الجلد الثاني\" يدعم العضلات ويثبت مكانه أثناء التمارين المكثفة دون انزلاق.","ياقة دائرية معززة: تقفيل منخفض السماكة ومدعم للحفاظ على شكل الياقة ومنع التمدد مع الاستخدام المتكرر."],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 91,
  },
  {
    id: '23',
    slug: 'performance-high-rise-flare-pants',
    name: { en: "Performance High-Rise Flare Pants", ar: "بنطال أداء بخصر عالٍ وقصّة فلير انسيابية" },
    description: {
      en: "Performance High‑Rise Flare Pants\n\n- Power in Every Step.\n\n- A modern modest silhouette meets sculpting athletic support. These high‑rise bootcut pants are designed to elongate your frame while staying secure through every squat, sprint, and stretch.\n\n- Why You’ll Love Them:\n- Supportive High‑Rise Waistband: Wide, reinforced band for core stability and zero rolling.\n- Flattering Flare Silhouette: Gentle flare for a sleek, modest profile.\n- Premium Performance Fabric: High‑stretch, sweat‑wicking, fully opaque.\n- Anti‑Chafe Flat Seams: Smooth stitching that moves with you.\n- Reflective Logo Detail: Subtle visibility for low‑light training.\n\n- Designed to Move:\n- Industrial flatlock stitching ensures durability under tension, while the sculpted fit enhances confidence without restricting motion.\n\n- Available Colors:\n- Burgundy\n- Forest Green\n- Jet Black\n- Slate Lavender\n\n- Mix & Match: Pair with the Long Sleeve Compression T‑Shirt in matching tones for a seamless set, or contrast with a bold complementary shade for a statement training look.\nComplete the look with the Long Sleeve Compression T‑Shirt.",
      ar: " بنطال أداء بخصر عالٍ وقصّة فلير انسيابية\n\n- ارتقي بإطلالتك الرياضية مع هذا البنطال المصمم للرياضية التي تطالب بالأداء والشكل الأنيق معًا.\n- المزايا الرئيسية: خصر عالٍ داعم: حزام خصر عريض ومعزز يوفر ثباتًا محكمًا ودعمًا لمنطقة الوسط أثناء الحركات عالية الشدة.\n- قصة فلير عصرية: اتساع خفيف من الركبة للأسفل يمنح مظهرًا محتشمًا مع حرية حركة كاملة.\n- قماش تقني فاخر: خليط مرن يمتص الرطوبة بلمسة مطفية ناعمة لراحة تدوم طوال التمرين.\nشعار عاكس مميز: موضوع على أعلى الفخذ لإطلالة رياضية راقية ورؤية أفضل في الإضاءة المنخفضة.\n- تقفيل تقني — خياطة مسطحة فاخرة\n- تصميم مضاد للاحتكاك يمنع تهيج البشرة\n- خياطة صناعية مرنة تتحرك مع الجسم وتتحمل الشد العالي\n\n- الألوان المتوفرة:\n- أخضر غابات داكن (Forest Green)\n- نبيتي داكن (Burgundy)\n- أسود فحمي (Jet Black)",
    },
    price: 649,
    images: ["/products/23/main_69b14bdd60ae2_1773226973.jpg","/products/23/img0_69b14bdd65585_1773226973.jpg","/products/23/img1_69b16038ae02e_1773232184.jpg","/products/23/img2_69b16038ae502_1773232184.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Burundy","hex":"#660033"},{"name":"Forest Green","hex":"#556b2f"},{"name":"Jet Black","hex":"#000000"},{"name":"Sleek Lavendar","hex":"#6a6882"}],
    category: 'bottoms',
    rating: 4.9,
    reviewCount: 58,
    isBestseller: false,
    isNew: true,
    features: {
      en: ["Power in Every Step.","A modern modest silhouette meets sculpting athletic support. These high‑rise bootcut pants are designed to elongate your frame while staying secure through every squat, sprint, and stretch.","Why You’ll Love Them:","Supportive High‑Rise Waistband: Wide, reinforced band for core stability and zero rolling.","Flattering Flare Silhouette: Gentle flare for a sleek, modest profile."],
      ar: ["ارتقي بإطلالتك الرياضية مع هذا البنطال المصمم للرياضية التي تطالب بالأداء والشكل الأنيق معًا.","المزايا الرئيسية: خصر عالٍ داعم: حزام خصر عريض ومعزز يوفر ثباتًا محكمًا ودعمًا لمنطقة الوسط أثناء الحركات عالية الشدة.","قصة فلير عصرية: اتساع خفيف من الركبة للأسفل يمنح مظهرًا محتشمًا مع حرية حركة كاملة.","قماش تقني فاخر: خليط مرن يمتص الرطوبة بلمسة مطفية ناعمة لراحة تدوم طوال التمرين.","تقفيل تقني — خياطة مسطحة فاخرة"],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 83,
  },
  {
    id: '24',
    slug: 'performance-vented-sports-hijab',
    name: { en: "Performance Vented Sports Hijab", ar: "حجاب رياضي مهوي للأداء" },
    description: {
      en: "Performance Vented Sports Hijab\n\nSecure. Breathable. Unstoppable.\n\n- Finally, a sports hijab that moves with you — not against you. Designed for active performance, this pull‑on hijab stays secure through every rep, run, and stretch.\n\n- Why You’ll Love It:\n- Breathable Mesh Fabric: Lightweight, perforated material for maximum airflow.\n- Slip‑Free Fit: Stretchy face opening that stays secure without pins.\n- Ergonomic Coverage: Extended front coverage with a shorter back for mobility.\n- Flatlock Comfort Seams: Smooth interior finishing to prevent irritation.\n- Reflective Logo Detail: Minimalist athletic finish.\n- Made for Intensity\n- Built from moisture‑wicking technical fabric that keeps you cool and dry even during high‑heat workouts.\n\n- Available Colors:\n- Classic Black\n- Pure White\n\nPair with any ESC performance set for a complete, distraction‑free experience.",
      ar: "حجاب رياضي مهوي للأداء\n\n- حجاب رياضي سهل الارتداء مصمم للمرأة النشطة، يجمع بين الثبات التام والتقنية المتقدمة للتهوية.\n- التصميم والمزايا\n- نسيج شبكي مهوي: قماش خفيف مثقب يسمح بأقصى تدفق للهواء للحفاظ على البرودة أثناء التمرين المكثف.\n- تصميم بدون دبابيس: فتحة وجه مرنة تمنح ثباتًا مريحًا دون الحاجة لمثبتات.\nقصة مريحة ومدروسة: تغطية كاملة من الأمام مع طول أقصر من الخلف لمنع التكتل أثناء الحركة.\n- شعار جانبي أنيق: طباعة عاكسة لشعار ESC لمسة رياضية راقية.\nالتقفيل\n- خياطة مسطحة تقلل السماكة وتمنع أي نقاط احتكاك لضمان راحة طويلة الأمد.\n\n- الألوان المتوفرة:\n- أسود كلاسيكي\n- أبيض نقي عاكس للحرارة",
    },
    price: 319,
    images: ["/products/24/main_69b16e2804b6a_1773235752.jpg","/products/24/img0_69b14ca31361b_1773227171.jpg","/products/24/img1_69b14ca313c50_1773227171.jpg","/products/24/img2_69b14ca314a53_1773227171.jpg"],
    sizes: ["M","L"],
    colors: [{"name":"Classic Black","hex":"#000000"},{"name":"Pure White","hex":"#fdfeff"}],
    category: 'hijabs',
    rating: 4.7,
    reviewCount: 199,
    isBestseller: true,
    isNew: false,
    features: {
      en: ["Finally, a sports hijab that moves with you — not against you. Designed for active performance, this pull‑on hijab stays secure through every rep, run, and stretch.","Why You’ll Love It:","Breathable Mesh Fabric: Lightweight, perforated material for maximum airflow.","Slip‑Free Fit: Stretchy face opening that stays secure without pins.","Ergonomic Coverage: Extended front coverage with a shorter back for mobility."],
      ar: ["حجاب رياضي سهل الارتداء مصمم للمرأة النشطة، يجمع بين الثبات التام والتقنية المتقدمة للتهوية.","التصميم والمزايا","نسيج شبكي مهوي: قماش خفيف مثقب يسمح بأقصى تدفق للهواء للحفاظ على البرودة أثناء التمرين المكثف.","تصميم بدون دبابيس: فتحة وجه مرنة تمنح ثباتًا مريحًا دون الحاجة لمثبتات.","شعار جانبي أنيق: طباعة عاكسة لشعار ESC لمسة رياضية راقية."],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 19,
  },
  {
    id: '25',
    slug: 'performance-hipcover-wrap',
    name: { en: "Performance Hip-Cover Wrap", ar: "قطعة لف رياضية بتغطية كاملة" },
    description: {
      en: "Performance Hip‑Cover Wrap\n\nLayer with Confidence.\n\n- An essential modest layer designed to give you full coverage without limiting movement. Lightweight, secure, and built to stay in place.\n\n-Why You’ll Love It:\n- Asymmetric Wrap Design: Modern, neat silhouette with full coverage.\n- Freedom Side Slit: Strategic overlap for unrestricted squats and lunges.\n- Low‑Profile Waistband: Slim elastic band that layers smoothly.\n- Flatlock Construction: Zero bulk, zero irritation.\n- Hidden back pocket with a smart design: Provides secure space for your small essentials — without adding bulk or disrupting the silhouette.\nReflective Branding: Subtle performance detail.\nDesigned to Stay Put\nBalanced fabric weight prevents shifting or riding up during dynamic movement.\n\nAvailable Colors:\nJet Black\n\nStyle over compression leggings for a unified ESC performance look.",
      ar: " قطعة لف رياضية بتغطية كاملة\n\nقطعة إضافية تمنح احتشامًا أنيقًا دون التأثير على الأداء الرياضي.\nالتصميم\nقصة لف غير متماثلة:\n تصميم متداخل عصري يمنح مظهرًا أنيقا مع تغطية كاملة.\nمثالية للطبقات:\n مصممة للارتداء فوق الليغينغ أو البنطال الرياضي لمزيد من الاحتشام أثناء التمارين المكثفة.\nفتحة جانبية مرنة:\n موضوعة بدقة لتسمح بمدى حركة كامل دون مقاومة.\nجيب خلفي مخفي بتصميم ذكي:\nيوفر مساحة آمنة لحمل احتياجاتك الخفيفة، دون إضافة سماكة أو إزعاج.\nالتفاصيل التقنية\nحزام خصر منخفض السماكة\nخياطة مسطحة دقيقة\nشعار عاكس مضغوط حراريًا\nحافة بخياطة عالية الكثافة للحفاظ على الشكل\nالثبات والحركة\nتبقى ثابتة أثناء الحركة دون انزلاق\n\nمتوفرة بألوان أسود فحمي لدمج أحادي أنيق مع ليغينغ الضغط",
    },
    price: 349,
    images: ["/products/25/main_69b171e930c55_1773236713.jpg","/products/25/img0_69b14a9702d4c_1773226647.jpg","/products/25/img1_69b14a9703772_1773226647.jpg"],
    sizes: ["L - XL","M - L"],
    colors: [{"name":"Jet Black","hex":"#000000"}],
    category: 'accessories',
    rating: 4.6,
    reviewCount: 128,
    isBestseller: false,
    isNew: true,
    features: {
      en: ["An essential modest layer designed to give you full coverage without limiting movement. Lightweight, secure, and built to stay in place.","Why You’ll Love It:","Asymmetric Wrap Design: Modern, neat silhouette with full coverage.","Freedom Side Slit: Strategic overlap for unrestricted squats and lunges.","Low‑Profile Waistband: Slim elastic band that layers smoothly."],
      ar: [],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 64,
  },
  {
    id: '26',
    slug: 'properformance-compression-leggings',
    name: { en: "Pro-Performance Compression Leggings", ar: "ليغينغ الضغط الاحترافي Pro-Performance" },
    description: {
      en: "Pro‑Performance Compression Leggings\n\nSculpted. Supported. Ready.\n\nEngineered for high‑intensity performance, these leggings deliver muscle support, full opacity, and uncompromised modest coverage.\n\nWhy You’ll Love Them:\nHigh‑Rise Sculpting Waistband: Double‑layered support that stays locked in place.\nMuscle‑Mapping Panels: Anatomical construction to reduce fatigue.\n100% Squat‑Proof Fabric: High‑density, fully opaque performance knit.\nFour‑Way Stretch: Maximum flexibility without sheerness.\nReflective Details: Enhanced visibility at the ankles and thigh.\nFlatlock Seams: Smooth interior to eliminate chafing.\nBuilt to Endure\nDesigned for explosive movement, endurance training, and everything in between.\n\nAvailable Colors:\nJet Black\nSlate Lavender\nForest Green\n\nMix & Match: Complete the look with the Long Sleeve Compression T‑Shirt for a streamlined performance set, or layer with the Performance High‑Rise Bootcut Pants for elevated studio‑to‑street styling.",
      ar: "ليغينغ الضغط الاحترافي Pro-Performance\n\nمصمم للدعم عالي الكثافة بقصة جلد ثانية مع تغطية احترافية كاملة.\n\nخصر عالٍ منحوت:\n حزام مزدوج الطبقات يثبت في مكانه أثناء القفز والجري.\nتصميم بانلات تشريحية:\n يتبع خطوط العضلات لتقليل الاهتزاز والإجهاد.\nخياطة Flatlock مميزة:\n داخلية ناعمة بالكامل لمنع الاحتكاك حتى في الجلسات الطويلة.\nمرونة رباعية الاتجاه:\n نسيج عالي الكثافة غير شفاف بالكامل حتى مع التمدد.\n\nالألوان المتوفرة:\nأسود فحمي (Jet Black)\nلافندر رمادي راقٍ (Slate Lavender)\nأخضر غابات داكن (Forest Green)",
    },
    price: 749,
    images: ["/products/26/main_69b14d0bcc0d3_1773227275.jpg","/products/26/img0_69b14abd09350_1773226685.jpg","/products/26/img1_69b14d0bcebd8_1773227275.jpg","/products/26/img2_69b14d0bcf684_1773227275.jpg","/products/26/img3_69b14d0bcfcce_1773227275.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Jet Black","hex":"#000000"},{"name":"oilve","hex":"#556b2f"},{"name":"Sleek Lavendar","hex":"#6a6882"}],
    category: 'bottoms',
    rating: 4.9,
    reviewCount: 73,
    isBestseller: true,
    isNew: false,
    features: {
      en: [],
      ar: [],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 87,
  },
  {
    id: '27',
    slug: 'modest-tracksuit-top',
    name: { en: "Modest Tracksuit Top", ar: "هودي رياضي محتشم" },
    description: {
      en: "Modest Tracksuit Top\n\nPerformance Meets Presence.\n\n- A refined blend of athletic performance and modest streetwear design. \n- The Signature Modest Tracksuit Top is crafted for women who move confidently while embracing elevated everyday style.\n- With its relaxed long-line silhouette and varsity-inspired detailing, this piece delivers both structure and comfort—making it an effortless choice for training sessions, casual outings, or active days on the go.\n\n- Design Features:\n- Long-Line Relaxed Silhouette: a straight relaxed cut with an extended hem that provides comfortable hip coverage while maintaining a clean athletic shape.\n\n- Reinforced Crew Neckline: a structured ribbed neckline designed to hold its shape and maintain durability over time.\n\n- Contrast Varsity Piping: athletic piping details that add a bold varsity edge while enhancing the shoulder structure.\n\n- Ribbed Secure Cuffs: flexible ribbed cuffs keep sleeves comfortably in place during movement.\n\n:Fabric & Feel:\n- Mid-Weight Performance Knit\n- Soft-touch performance knit that remains opaque while delivering breathable comfort throughout the day.\n\n- Available Colors:\n- Signature Mocha\n- Blush Pink\n\n- Style It With:\n- Pair it with the Signature Modest Tracksuit Trousers for a complete coordinated set, or style it with the Performance High-Rise Bootcut Pants for a refined modest silhouette.",
      ar: "- مزيج متقن بين الأداء الرياضي وأسلوب الستريت وير المحتشم. صُممت القطعة العلوية من Signature Modest Tracksuit للمرأة التي تتحرك بثقة وتبحث عن إطلالة رياضية أنيقة تناسب يومها بالكامل.\n\n- بفضل قصتها الطويلة المريحة وتفاصيلها المستوحاة من أسلوب الـVarsity، تمنحك هذه القطعة مزيجًا مثاليًا من البنية الأنيقة والراحة العملية.\n\n- تفاصيل التصميم:\n- قصة طويلة مريحة: تصميم مستقيم بقصة واسعة نسبيًا مع طول إضافي يوفر تغطية مريحة لمنطقة الورك.\n- ياقة دائرية مدعّمة: ياقة محاكة تحافظ على شكلها وتمنح متانة تدوم مع الاستخدام.\n- تفاصيل خطوط Varsity متباينة: خطوط رياضية تضيف لمسة جريئة وتبرز بنية الكتفين بأسلوب أنيق.\n- أساور محاكة ثابتة: أساور مرنة تثبت الأكمام في مكانها وتمنح حرية الحركة.\n\n- القماش والإحساس:\n- قماش Performance Knit متوسط السماكة\n- قماش ناعم الملمس يمنح تهوية مريحة مع الحفاظ على تغطية غير شفافة.\n\n- الألوان المتوفرة:\n- موكا سيغنتشر\n- وردي بلاش\n\n- تنسيق الإطلالة:\n- نسّقيها مع بنطال  Modest Tracksuit للحصول على طقم متكامل، أو ارتديها مع بنطال Performance High-Rise flare pants لإطلالة رياضية محتشمة أكثر أناقة.",
    },
    price: 669,
    images: ["/products/27/main_69b14dc7b7eb4_1773227463.jpg","/products/27/img0_69b14dc7bb190_1773227463.jpg","/products/27/img1_69b14dc7bb679_1773227463.jpg","/products/27/img2_69b14dc7bbbef_1773227463.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Blush Pink","hex":"#de5d83"},{"name":"Signature Mocha","hex":"#bea493"}],
    category: 'tops',
    rating: 4.8,
    reviewCount: 148,
    isBestseller: true,
    isNew: false,
    features: {
      en: ["A refined blend of athletic performance and modest streetwear design.","The Signature Modest Tracksuit Top is crafted for women who move confidently while embracing elevated everyday style.","With its relaxed long-line silhouette and varsity-inspired detailing, this piece delivers both structure and comfort—making it an effortless choice for training sessions, casual outings, or active days on the go.","Design Features:","Long-Line Relaxed Silhouette: a straight relaxed cut with an extended hem that provides comfortable hip coverage while maintaining a clean athletic shape."],
      ar: ["مزيج متقن بين الأداء الرياضي وأسلوب الستريت وير المحتشم. صُممت القطعة العلوية من Signature Modest Tracksuit للمرأة التي تتحرك بثقة وتبحث عن إطلالة رياضية أنيقة تناسب يومها بالكامل.","بفضل قصتها الطويلة المريحة وتفاصيلها المستوحاة من أسلوب الـVarsity، تمنحك هذه القطعة مزيجًا مثاليًا من البنية الأنيقة والراحة العملية.","تفاصيل التصميم:","قصة طويلة مريحة: تصميم مستقيم بقصة واسعة نسبيًا مع طول إضافي يوفر تغطية مريحة لمنطقة الورك.","ياقة دائرية مدعّمة: ياقة محاكة تحافظ على شكلها وتمنح متانة تدوم مع الاستخدام."],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 40,
  },
  {
    id: '28',
    slug: 'the-elite-performance-abaya-hoodie',
    name: { en: "Elite Performance Abaya Hoodie", ar: "عباية الهودي Elite Performance" },
    description: {
      en: "The Elite Performance Abaya Hoodie\n\nRedefining Modest Power.\n\nA statement piece that merges the elegance of an abaya with the technical edge of performance outerwear.\n\nWhy It Stands Apart:\nUltra‑Long A‑Line Silhouette: Full‑body coverage with breathable flow.\nIntegrated Scuba Hood: Structured design that frames securely.\nTwo‑Way Performance Zipper: Adjustable mobility for dynamic training.\nHidden Utility Pockets: Functional storage without bulk.\nElasticated Cuffs: Stay‑put sleeves during intense movement.\n\nTechnical Flow Fabric:\nMid‑weight cotton knit that drapes beautifully while maintaining stretch and breathability.\n\nAvailable Colors:\nSterling Silver\nJet Black\nSignature Mocha\n\nCommand the gym. Command the street. ESC‑ing the average life.",
      ar: "عباية الهودي Elite Performance\n\nالابتكار الأقصى في الأزياء الرياضية المحتشمة.\n\nالتصميم:\nقصة طويلة دراماتيكية:\n تصل لأسفل الساق لتغطية كاملة بحضور قوي.\nاتساع A-Line انسيابي:\n ينساب دون التصاق بالجسم مع تهوية ممتازة.\nهودي مدمج عميق\n يغني عن طبقة إضافية ويوفر ثباتًا محكمًا.\n\nالتفاصيل التقنية:\nسحاب ثنائي الاتجاه Auto-Lock\nجيوب جانبية مخفية\nأساور مطاطية عالية الثبات\n\nالقماش:\nنسيج قطن تقني بوزن مثالي للانسياب والمرونة\n\nالألوان المتاحة:\nفضي Sterling Silver\nأسود فحمي Jet Black\nموكا Signature Mocha",
    },
    price: 779,
    images: ["/products/28/main_69b14e1ae1aca_1773227546.jpg","/products/28/img0_69b14e1ae48b8_1773227546.jpg","/products/28/img1_69b14e1ae51b0_1773227546.jpg","/products/28/img2_69b14e1ae5698_1773227546.jpg","/products/28/img3_69b14e1ae5c4c_1773227546.jpg","/products/28/img4_69b173121ecdd_1773237010.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Jet Black","hex":"#000000"},{"name":"Signature Mocha","hex":"#bea493"},{"name":"Sterling Silver","hex":"#e0f0ff"}],
    category: 'abayas',
    rating: 4.7,
    reviewCount: 160,
    isBestseller: true,
    isNew: false,
    features: {
      en: [],
      ar: [],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 170,
  },
  {
    id: '29',
    slug: 'the-signature-varsity-modest-set-softutility-edition',
    name: { en: "Relaxed Performance Pants", ar: "بنطال رياضي مريح" },
    description: {
      en: "The Relaxed Performance Pant\n\n- Non-Clinging Straight-Leg Taper\n- Relaxed structure designed to move naturally without clinging to the body.\n- Vertical Side Stripe Detail\n- Athletic stripe elongates the silhouette while enhancing the varsity aesthetic.\n- Wide Stay-Put Waistband\n- Supportive waistband designed for comfort and stability throughout movement.\n\n- Performance Fabric:\n- Soft-Touch Performance Knit\n- Cotton-blend fabric with a smooth hand feel that combines softness with durability.\n- Moisture-Wicking Technology\n- Helps pull sweat away from the body to keep you cool and comfortable.\n- Flat Interior Seams\n- Smooth interior construction minimizes friction for all-day comfort.\n\n- Available Colors:\n- Sterling Silver\n- Jet Black\n\n- Style Note:\nWear the full coordinated set for a bold varsity statement, or mix each piece with your everyday essentials for elevated athletic styling.",
      ar: "البنطال الرياضي المريح\n\n- قصة مستقيمة مريحة\n- تصميم مستقيم يمنح حرية الحركة دون الالتصاق بالجسم.\n- خطوط جانبية طولية\n- تفاصيل جانبية تمنح مظهرًا أطول وأكثر انسيابية مع طابع رياضي أنيق.\n- حزام خصر عريض وثابت\n- حزام خصر مريح يوفر ثباتًا ودعمًا أثناء الحركة.\n\n-القماش المستخدم:\n- قماش Performance Knit بملمس ناعم\n- مزيج قطني يمنح نعومة استثنائية مع متانة للاستخدام اليومي.\n- تقنية امتصاص الرطوبة\n- تساعد على سحب العرق بعيدًا عن الجسم للحفاظ على الانتعاش والراحة.\n- خياطات داخلية مسطحة\n- تصميم داخلي يقلل الاحتكاك ويوفر راحة أكبر أثناء الحركة.\n\n- الألوان المتوفرة:\n- فضي سترلينغ\n- أسود فحمي\n\n- ملاحظة تنسيق:\nارتدي الطقم كاملًا لإطلالة Varsity متكاملة، أو نسّقي كل قطعة مع ملابسك اليومية لتحصلي على مظهر رياضي أنيق ومتجدد.",
    },
    price: 599,
    images: ["/products/29/main_69b1556301466_1773229411.jpg","/products/29/img0_69b14e84bc0f3_1773227652.jpg","/products/29/img1_69b14e84bc8b2_1773227652.jpg","/products/29/img2_69b14e84bcf7e_1773227652.jpg","/products/29/img3_69b15f3ae7b7b_1773231930.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Jet Black","hex":"#000000"},{"name":"Sterling Silver","hex":"#e0f0ff"}],
    category: 'bottoms',
    rating: 4.5,
    reviewCount: 122,
    isBestseller: false,
    isNew: false,
    features: {
      en: ["Non-Clinging Straight-Leg Taper","Relaxed structure designed to move naturally without clinging to the body.","Vertical Side Stripe Detail","Athletic stripe elongates the silhouette while enhancing the varsity aesthetic.","Wide Stay-Put Waistband"],
      ar: ["قصة مستقيمة مريحة","تصميم مستقيم يمنح حرية الحركة دون الالتصاق بالجسم.","خطوط جانبية طولية","تفاصيل جانبية تمنح مظهرًا أطول وأكثر انسيابية مع طابع رياضي أنيق.","حزام خصر عريض وثابت"],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 43,
  },
  {
    id: '32',
    slug: 'comfy-t-shirt',
    name: { en: "Signature Long-Sleeve T-shirt", ar: "تيشيرت بأكمام طويلة" },
    description: {
      en: "The Signature Long-Sleeve T-shirt\n\n- Extended Long-Line Silhouette\n- Designed with an elongated cut that provides full hip coverage for confident modest movement.\n- Contrast Athletic Piping\n- Bold piping lines enhance the shoulder structure while adding a sharp varsity-inspired edge.\n- Reinforced Ribbed Crew Neck\n- Structured ribbed neckline designed to maintain shape and durability.\n- Secure Ribbed Cuffs\n- Comfortable cuffs that stay in place while allowing flexible movement.\n\n- Style Note:\nWear the full coordinated set for a bold varsity statement, or mix each piece with your everyday essentials for elevated athletic styling.",
      ar: "\n تيشيرت بأكمام طويلة\n- قصة طويلة ممتدة\n- تصميم أطول يمنح تغطية كاملة لمنطقة الورك مع الحفاظ على مظهر رياضي أنيق.\n- تفاصيل خطوط متباينة\n- خطوط بارزة تضيف تحديدًا أنيقًا لمنطقة الكتفين ولمسة مستوحاة من أسلوب الـVarsity الرياضي.\n- ياقة دائرية محاكة ومدعّمة\n- ياقة مرنة تحافظ على شكلها وتمنح متانة تدوم.\n- أساور محاكة ثابتة\n- أساور مريحة تثبت في مكانها وتمنحك حرية الحركة.\n\n:ملاحظة تنسيق:\nارتدي الطقم كاملًا لإطلالة Varsity متكاملة، أو نسّقي كل قطعة مع ملابسك اليومية لتحصلي على مظهر رياضي أنيق ومتجدد.",
    },
    price: 549,
    images: ["/products/32/main_69b14ec4a76cc_1773227716.jpg","/products/32/img0_69b14ec4a9c95_1773227716.jpg","/products/32/img1_69b14ec4aa531_1773227716.jpg","/products/32/img2_69b159b85306c_1773230520.jpg","/products/32/img3_69b17059ac356_1773236313.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Jet Black","hex":"#000000"},{"name":"Sterling Silver","hex":"#e0f0ff"}],
    category: 'tops',
    rating: 4.7,
    reviewCount: 112,
    isBestseller: false,
    isNew: true,
    features: {
      en: ["Extended Long-Line Silhouette","Designed with an elongated cut that provides full hip coverage for confident modest movement.","Contrast Athletic Piping","Bold piping lines enhance the shoulder structure while adding a sharp varsity-inspired edge.","Reinforced Ribbed Crew Neck"],
      ar: ["قصة طويلة ممتدة","تصميم أطول يمنح تغطية كاملة لمنطقة الورك مع الحفاظ على مظهر رياضي أنيق.","تفاصيل خطوط متباينة","خطوط بارزة تضيف تحديدًا أنيقًا لمنطقة الكتفين ولمسة مستوحاة من أسلوب الـVarsity الرياضي.","ياقة دائرية محاكة ومدعّمة"],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 29,
  },
  {
    id: '33',
    slug: 'modest-tracksuit-pants',
    name: { en: "Modest Tracksuit Pants", ar: "بنطال التراكسوت المحتشم" },
    description: {
      en: "Modest Tracksuit Pants\n\nComfort Designed to Move With You.\n\n- The Signature Modest Tracksuit Trousers combine athletic functionality with relaxed everyday comfort. Designed with a clean straight-leg structure, these trousers create a flattering modest silhouette while allowing natural movement throughout the day.\n- Perfect for both active wear and casual styling, they deliver a balance of comfort, structure, and understated sport-inspired design.\n\n- Design Features:\n- Straight-Leg Modest Cut: relaxed straight-leg structure designed to skim the body without clinging.\n- Elongating Side Stripe Detail: continuous athletic side stripe visually lengthens the silhouette.\n- Elastic Comfort Waistband: flexible waistband designed to provide stability and all-day comfort.\n- Double-Needle Hem Finish: durable finishing detail that enhances the clean structured look.\n\n- Fabric & Feel:\n- Mid-Weight Performance Knit\n- Breathable soft-touch fabric designed to remain opaque while allowing comfortable movement.\n\n- Available Colors:\n- Signature Mocha\n- Blush Pink\n\n- Style It With:\nWear it with the Signature Modest Tracksuit Top for a coordinated athletic look, or pair it with the Long Sleeve Compression T-Shirt for a sleek performance outfit.",
      ar: "بنطال التراكسوت المحتشم\n\nراحة تتحرك معك.\n\n- يجمع بنطال Signature Modest Tracksuit بين الأداء الرياضي والراحة اليومية، ليمنحك تصميمًا محتشمًا بقصة مستقيمة أنيقة تسمح بالحركة بسهولة طوال اليوم.\n- مثالي للأنشطة اليومية أو الإطلالات الرياضية العصرية، حيث يقدم توازنًا بين الراحة والبنية الأنيقة والطابع الرياضي البسيط.\n\n- تفاصيل التصميم: \n- قصة مستقيمة محتشمة\n- تصميم مريح ينسدل بسلاسة دون الالتصاق بالجسم.\n\n- تفاصيل الخط الجانبي الطولي: خط جانبي رياضي يمنح مظهرًا أطول وأكثر انسيابية.\n- حزام خصر مرن مريح: حزام خصر مرن يوفر ثباتًا وراحة طوال اليوم.\n- تقفيل بحياكة مزدوجة: تفصيل متين يعزز المظهر النظيف والمنظم للبنطال.\n\n- القماش والإحساس: \n- قماش Performance Knit متوسط السماكة: قماش ناعم يسمح بتهوية مريحة مع الحفاظ على تغطية غير شفافة أثناء الحركة.\n\n- الألوان المتوفرة: \n- موكا سيغنتشر\n- وردي بلاش\n\n- تنسيق الإطلالة:  \n- ارتديه مع القطعة العلوية Modest Tracksuit Top للحصول على طقم متكامل، أو نسّقيه مع Long Sleeve Compression T-Shirt لإطلالة رياضية أكثر احترافية.",
    },
    price: 629,
    images: ["/products/33/main_69b15a40cad48_1773230656.jpg","/products/33/img0_69b15042dfb04_1773228098.jpg","/products/33/img1_69b15a40cd515_1773230656.jpg","/products/33/img2_69b15a40cdaa4_1773230656.jpg","/products/33/img3_69b15a40cdfc1_1773230656.jpg"],
    sizes: ["M","L","XL"],
    colors: [{"name":"Blush Pink","hex":"#de5d83"},{"name":"Signature Mocha","hex":"#bea493"}],
    category: 'bottoms',
    rating: 4.8,
    reviewCount: 52,
    isBestseller: false,
    isNew: true,
    features: {
      en: ["The Signature Modest Tracksuit Trousers combine athletic functionality with relaxed everyday comfort. Designed with a clean straight-leg structure, these trousers create a flattering modest silhouette while allowing natural movement throughout the day.","Perfect for both active wear and casual styling, they deliver a balance of comfort, structure, and understated sport-inspired design.","Design Features:","Straight-Leg Modest Cut: relaxed straight-leg structure designed to skim the body without clinging.","Elongating Side Stripe Detail: continuous athletic side stripe visually lengthens the silhouette."],
      ar: ["يجمع بنطال Signature Modest Tracksuit بين الأداء الرياضي والراحة اليومية، ليمنحك تصميمًا محتشمًا بقصة مستقيمة أنيقة تسمح بالحركة بسهولة طوال اليوم.","مثالي للأنشطة اليومية أو الإطلالات الرياضية العصرية، حيث يقدم توازنًا بين الراحة والبنية الأنيقة والطابع الرياضي البسيط.","تفاصيل التصميم:","قصة مستقيمة محتشمة","تصميم مريح ينسدل بسلاسة دون الالتصاق بالجسم."],
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: 42,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    date: '2026-03-15',
    comment: {
      en: 'Finally sportswear that actually stays in place during my workouts! The hijab is a game-changer.',
      ar: 'أخيراً ملابس رياضية تبقى في مكانها أثناء تمريناتي! الحجاب غيّر كل شيء.',
    },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Fatima K.',
    rating: 5,
    date: '2026-03-10',
    comment: {
      en: 'The quality is unmatched. I own the full tracksuit set and the compression tee — the coverage is perfect.',
      ar: 'الجودة لا مثيل لها. أملك طقم التراكسوت الكامل وتيشيرت الضغط — التغطية مثالية.',
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Noor A.',
    rating: 4,
    date: '2026-02-28',
    comment: {
      en: 'Love the compression leggings — completely squat-proof! The abaya hoodie is such a unique piece.',
      ar: 'أحب ليغينغ الضغط — مقاوم تماماً للشفافية! عباية الهودي قطعة فريدة.',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Aisha R.',
    rating: 5,
    date: '2026-02-20',
    comment: {
      en: 'The tracksuit set is EVERYTHING. Looks amazing and feels so comfortable. Best purchase this year!',
      ar: 'طقم التراكسوت رائع! يبدو مذهلاً ومريح جداً. أفضل شراء هذا العام!',
    },
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'Mariam H.',
    rating: 5,
    date: '2026-02-15',
    comment: {
      en: 'I train 5 days a week and these hold up perfectly. The fabric quality is outstanding.',
      ar: 'أتدرب 5 أيام في الأسبوع وهذه الملابس تصمد بشكل مثالي. جودة القماش ممتازة.',
    },
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}
