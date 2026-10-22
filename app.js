const STORAGE_KEY = 'tabkhaty-state-v1';
const TRENDING_KEY = 'tabkhaty-trending-v1';

const defaultMeals = [
  {
    id: 'mon-lunch',
    day: 'الاثنين',
    meal: 'غداء',
    emoji: '🍛',
    title: 'مزيج أرز وسمك',
    meta: '٣ أشخاص · 20 دقيقة',
    cost: 18,
    items: [
      { name: 'أرز', qty: '1 كيس', price: 6 },
      { name: 'سمك', qty: '400 غ', price: 9 },
      { name: 'خضار', qty: '1 باقة', price: 3 }
    ]
  },
  {
    id: 'mon-dinner',
    day: 'الاثنين',
    meal: 'عشاء',
    emoji: '🥗',
    title: 'سلطة دجاج مشوية',
    meta: '٤ أشخاص · 25 دقيقة',
    cost: 22,
    items: [
      { name: 'دجاج', qty: '500 غ', price: 11 },
      { name: 'خس', qty: '1 رأس', price: 4 },
      { name: 'طماطم', qty: '3 حبات', price: 2 },
      { name: 'زبادي', qty: 'علبة', price: 5 }
    ]
  },
  {
    id: 'tue-lunch',
    day: 'الثلاثاء',
    meal: 'غداء',
    emoji: '🥘',
    title: 'كسكس بالخضار',
    meta: '٤ أشخاص · 30 دقيقة',
    cost: 16,
    items: [
      { name: 'كسكس', qty: '1 كيس', price: 5 },
      { name: 'جزر', qty: '2 حبات', price: 2 },
      { name: 'فلفل', qty: '3 حبات', price: 3 },
      { name: 'زيت', qty: '1 زجاجة', price: 6 }
    ]
  },
  {
    id: 'wed-dinner',
    day: 'الأربعاء',
    meal: 'عشاء',
    emoji: '🍲',
    title: 'حساء عدس',
    meta: '٤ أشخاص · 35 دقيقة',
    cost: 14,
    items: [
      { name: 'عدس', qty: '1 كيس', price: 7 },
      { name: 'بطاطس', qty: '500 غ', price: 3 },
      { name: 'بهارات', qty: 'معبأة', price: 2 },
      { name: 'ليمون', qty: '2 حبات', price: 2 }
    ]
  },
  {
    id: 'thu-lunch',
    day: 'الخميس',
    meal: 'غداء',
    emoji: '🍝',
    title: 'مكرونة بالجبن',
    meta: '٤ أشخاص · 20 دقيقة',
    cost: 19,
    items: [
      { name: 'مكرونة', qty: '1 علبة', price: 6 },
      { name: 'جبن', qty: '250 غ', price: 8 },
      { name: 'ثوم', qty: 'رأس', price: 2 },
      { name: 'حليب', qty: '1 لتر', price: 3 }
    ]
  },
  {
    id: 'fri-dinner',
    day: 'الجمعة',
    meal: 'عشاء',
    emoji: '🍗',
    title: 'دجاج مشوي',
    meta: '٦ أشخاص · 40 دقيقة',
    cost: 26,
    items: [
      { name: 'دجاج', qty: '1 كجم', price: 15 },
      { name: 'بطاطا', qty: '1 كجم', price: 5 },
      { name: 'بهارات', qty: 'معبأة', price: 3 },
      { name: 'ليمون', qty: '3 حبات', price: 3 }
    ]
  },
  {
    id: 'sat-lunch',
    day: 'السبت',
    meal: 'غداء',
    emoji: '🥙',
    title: 'فطائر بالجبن',
    meta: '٤ أشخاص · 28 دقيقة',
    cost: 17,
    items: [
      { name: 'عجين', qty: '1 باكيت', price: 5 },
      { name: 'جبن', qty: '300 غ', price: 8 },
      { name: 'بقدونس', qty: 'حزمة', price: 2 },
      { name: 'زيت', qty: 'زجاجة', price: 2 }
    ]
  }
];

const defaultRecipes = [
  {
    title: 'سلطة الشاورما المنزلية',
    time: '20 دقيقة',
    emoji: '🥙',
    blurb: 'سريعة ومشبعة.',
    accent: 'خضار',
    cuisine: 'عربي',
    ingredients: [
      { name: 'خبز', qty: '4 قطع', price: 5 },
      { name: 'دجاج', qty: '300 غ', price: 11 },
      { name: 'خس', qty: '1 رأس', price: 4 },
      { name: 'صوص', qty: '1 علبة', price: 3 }
    ],
    nutrition: { calories: 420, protein: 32, carbs: 38, fat: 17, fiber: 7 }
  },
  {
    title: 'أرز بالدجاج',
    time: '35 دقيقة',
    emoji: '🍚',
    blurb: 'وجبة عائلية مريحة.',
    accent: 'غداء',
    cuisine: 'عربي',
    ingredients: [
      { name: 'أرز', qty: '1 كيس', price: 6 },
      { name: 'دجاج', qty: '500 غ', price: 12 },
      { name: 'بهارات', qty: 'معبأة', price: 3 },
      { name: 'جزر', qty: '2 حبات', price: 2 }
    ],
    nutrition: { calories: 540, protein: 36, carbs: 58, fat: 18, fiber: 8 }
  },
  {
    title: 'كفتة بالطحينة',
    time: '30 دقيقة',
    emoji: '🍢',
    blurb: 'نكهة عربية مميزة.',
    accent: 'عشاء',
    cuisine: 'عربي',
    ingredients: [
      { name: 'لحم مفروم', qty: '400 غ', price: 16 },
      { name: 'طحينة', qty: '1 علبة', price: 5 },
      { name: 'بقدونس', qty: 'حزمة', price: 2 },
      { name: 'خبز', qty: '4 قطع', price: 4 }
    ],
    nutrition: { calories: 610, protein: 39, carbs: 33, fat: 35, fiber: 6 }
  },
  {
    title: 'مكرونة بالفرماج',
    time: '25 دقيقة',
    emoji: '🍝',
    blurb: 'سهل وسريع.',
    accent: 'عائلة',
    cuisine: 'أوروبي',
    ingredients: [
      { name: 'مكرونة', qty: '1 علبة', price: 6 },
      { name: 'جبن', qty: '250 غ', price: 8 },
      { name: 'حليب', qty: '1 لتر', price: 3 },
      { name: 'ثوم', qty: 'رأس', price: 2 }
    ],
    nutrition: { calories: 500, protein: 27, carbs: 54, fat: 20, fiber: 4 }
  },
  {
    title: 'شوربة العدس',
    time: '15 دقيقة',
    emoji: '🥣',
    blurb: 'مفيدة ومشبعة.',
    accent: 'عشاء',
    cuisine: 'عربي',
    ingredients: [
      { name: 'عدس', qty: '1 كيس', price: 7 },
      { name: 'بطاطس', qty: '500 غ', price: 3 },
      { name: 'بهارات', qty: 'معبأة', price: 2 },
      { name: 'ليمون', qty: '2 حبات', price: 2 }
    ],
    nutrition: { calories: 360, protein: 20, carbs: 45, fat: 10, fiber: 11 }
  },
  {
    title: 'سمك مشوي',
    time: '24 دقيقة',
    emoji: '🐟',
    blurb: 'قيمة غذائية عالية.',
    accent: 'غداء',
    cuisine: 'بحري',
    ingredients: [
      { name: 'سمك', qty: '500 غ', price: 13 },
      { name: 'ليمون', qty: '2 حبات', price: 2 },
      { name: 'خضار', qty: '1 باقة', price: 3 },
      { name: 'زيت', qty: 'زجاجة', price: 2 }
    ],
    nutrition: { calories: 430, protein: 41, carbs: 18, fat: 22, fiber: 6 }
  }
];

const worldCuisines = [
  {
    name: 'عربي',
    dishes: [
      { title: 'مندي دجاج', emoji: '🍗', time: '45 دقيقة', difficulty: 'متوسط', cuisine: 'عربي', nutrition: { calories: 580, protein: 40, carbs: 52, fat: 22, fiber: 7 }, ingredients: [{ name: 'دجاج', qty: '1 كجم', price: 18 }, { name: 'أرز', qty: '1 كيس', price: 7 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'ليمون', qty: '2 حبات', price: 2 }] },
      { title: 'كبسة لحم', emoji: '🍲', time: '50 دقيقة', difficulty: 'متوسط', cuisine: 'عربي', nutrition: { calories: 620, protein: 45, carbs: 60, fat: 25, fiber: 8 }, ingredients: [{ name: 'لحم', qty: '500 غ', price: 20 }, { name: 'أرز', qty: '1 كيس', price: 7 }, { name: 'بهارات', qty: 'معبأة', price: 4 }, { name: 'طماطم', qty: '3 حبات', price: 2 }] },
      { title: 'مقليّة خضار', emoji: '🥘', time: '25 دقيقة', difficulty: 'سهل', cuisine: 'عربي', nutrition: { calories: 330, protein: 14, carbs: 26, fat: 16, fiber: 9 }, ingredients: [{ name: 'خضار', qty: '1 باقة', price: 7 }, { name: 'حمص', qty: 'علبة', price: 5 }, { name: 'زيت', qty: 'زجاجة', price: 3 }, { name: 'بهارات', qty: 'معبأة', price: 2 }] }
    ]
  },
  {
    name: 'إيطالي',
    dishes: [
      { title: 'باستا ألبوفريتو', emoji: '🍝', time: '25 دقيقة', difficulty: 'سهل', cuisine: 'إيطالي', nutrition: { calories: 510, protein: 26, carbs: 58, fat: 18, fiber: 5 }, ingredients: [{ name: 'باستا', qty: '1 علبة', price: 6 }, { name: 'جبن', qty: '250 غ', price: 8 }, { name: 'حليب', qty: '1 لتر', price: 3 }, { name: 'ثوم', qty: 'رأس', price: 2 }] },
      { title: 'بيتزا رقيقة', emoji: '🍕', time: '30 دقيقة', difficulty: 'متوسط', cuisine: 'إيطالي', nutrition: { calories: 560, protein: 24, carbs: 62, fat: 21, fiber: 4 }, ingredients: [{ name: 'عجين بيتزا', qty: '1 باكيت', price: 5 }, { name: 'جبن', qty: '300 غ', price: 9 }, { name: 'طماطم', qty: '3 حبات', price: 2 }, { name: 'زيتون', qty: 'علبة', price: 4 }] },
      { title: 'راتاتوي', emoji: '🍅', time: '35 دقيقة', difficulty: 'متوسط', cuisine: 'إيطالي', nutrition: { calories: 390, protein: 16, carbs: 28, fat: 20, fiber: 10 }, ingredients: [{ name: 'طماطم', qty: '4 حبات', price: 4 }, { name: 'باذنجان', qty: '1 حبة', price: 3 }, { name: 'ثوم', qty: 'رأس', price: 2 }, { name: 'زيت', qty: 'زجاجة', price: 2 }] }
    ]
  },
  {
    name: 'هندي',
    dishes: [
      { title: 'شاورما بالدجاج', emoji: '🌯', time: '20 دقيقة', difficulty: 'سهل', cuisine: 'هندي', nutrition: { calories: 460, protein: 35, carbs: 40, fat: 18, fiber: 6 }, ingredients: [{ name: 'خبز', qty: '4 قطع', price: 5 }, { name: 'دجاج', qty: '300 غ', price: 11 }, { name: 'خس', qty: '1 رأس', price: 4 }, { name: 'بهارات هندي', qty: 'علبة', price: 3 }] },
      { title: 'كاري عدس', emoji: '🥘', time: '40 دقيقة', difficulty: 'متوسط', cuisine: 'هندي', nutrition: { calories: 420, protein: 24, carbs: 46, fat: 12, fiber: 12 }, ingredients: [{ name: 'عدس', qty: '1 كيس', price: 7 }, { name: 'حليب جوز هند', qty: '1 علبة', price: 5 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'بصل', qty: '2 حبات', price: 2 }] },
      { title: 'مندي خضار', emoji: '🧺', time: '30 دقيقة', difficulty: 'سهل', cuisine: 'هندي', nutrition: { calories: 360, protein: 17, carbs: 48, fat: 10, fiber: 11 }, ingredients: [{ name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'خضار', qty: '1 باقة', price: 6 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'زيت', qty: 'زجاجة', price: 2 }] }
    ]
  },
  {
    name: 'ياباني',
    dishes: [
      { title: 'سوشي مفرو��', emoji: '🍣', time: '35 دقيقة', difficulty: 'متوسط', cuisine: 'ياباني', nutrition: { calories: 390, protein: 28, carbs: 32, fat: 15, fiber: 4 }, ingredients: [{ name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'سمك', qty: '300 غ', price: 12 }, { name: 'نوري', qty: 'علبة', price: 3 }, { name: 'زنجبيل', qty: 'حزمة', price: 2 }] },
      { title: 'رامن خضار', emoji: '🍜', time: '20 دقيقة', difficulty: 'سهل', cuisine: 'ياباني', nutrition: { calories: 500, protein: 21, carbs: 58, fat: 19, fiber: 8 }, ingredients: [{ name: 'رامن', qty: '1 علبة', price: 7 }, { name: 'خضار', qty: '1 باقة', price: 6 }, { name: 'صلصة', qty: 'علبة', price: 4 }, { name: 'فطر', qty: 'علبة', price: 3 }] },
      { title: 'تيرياكي دجاج', emoji: '🍱', time: '30 دقيقة', difficulty: 'متوسط', cuisine: 'ياباني', nutrition: { calories: 520, protein: 37, carbs: 42, fat: 18, fiber: 5 }, ingredients: [{ name: 'دجاج', qty: '500 غ', price: 15 }, { name: 'صوص تيرياكي', qty: 'علبة', price: 5 }, { name: 'خضار', qty: '1 باقة', price: 4 }, { name: 'أرز', qty: '1 كيس', price: 6 }] }
    ]
  },
  {
    name: 'مكسيكي',
    dishes: [
      { title: 'تاكو لحم', emoji: '🌮', time: '25 دقيقة', difficulty: 'سهل', cuisine: 'مكسيكي', nutrition: { calories: 470, protein: 32, carbs: 45, fat: 18, fiber: 7 }, ingredients: [{ name: 'خبز التاكو', qty: '1 باكيت', price: 5 }, { name: 'لحم', qty: '400 غ', price: 16 }, { name: 'خس', qty: '1 رأس', price: 4 }, { name: 'صلصة', qty: 'علبة', price: 3 }] },
      { title: 'فاهيتا دجاج', emoji: '🍽️', time: '30 دقيقة', difficulty: 'متوسط', cuisine: 'مكسيكي', nutrition: { calories: 510, protein: 34, carbs: 38, fat: 22, fiber: 6 }, ingredients: [{ name: 'دجاج', qty: '500 غ', price: 16 }, { name: 'فلفل', qty: '3 حبات', price: 3 }, { name: 'بصل', qty: '2 حبات', price: 2 }, { name: 'أرز', qty: '1 كيس', price: 6 }] },
      { title: 'غوارا ماشا', emoji: '🥑', time: '28 دقيقة', difficulty: 'سهل', cuisine: 'مكسيكي', nutrition: { calories: 430, protein: 20, carbs: 36, fat: 20, fiber: 10 }, ingredients: [{ name: 'دجاج', qty: '300 غ', price: 12 }, { name: 'أفوكادو', qty: '2 حبات', price: 5 }, { name: 'خس', qty: '1 رأس', price: 4 }, { name: 'ذرة', qty: 'علبة', price: 3 }] }
    ]
  },
  {
    name: 'تركي',
    dishes: [
      { title: 'دونر كبدة', emoji: '🍲', time: '35 دقيقة', difficulty: 'متوسط', cuisine: 'تركي', nutrition: { calories: 560, protein: 33, carbs: 38, fat: 26, fiber: 6 }, ingredients: [{ name: 'كبدة', qty: '500 غ', price: 18 }, { name: 'خبز', qty: '4 قطع', price: 5 }, { name: 'بصل', qty: '2 حبات', price: 2 }, { name: 'بهارات', qty: 'معبأة', price: 3 }] },
      { title: 'بوريك بالجبن', emoji: '🥐', time: '30 دقيقة', difficulty: 'سهل', cuisine: 'تركي', nutrition: { calories: 490, protein: 25, carbs: 43, fat: 20, fiber: 5 }, ingredients: [{ name: 'عجين', qty: '1 باكيت', price: 5 }, { name: 'جبن', qty: '300 غ', price: 9 }, { name: 'بقدونس', qty: 'حزمة', price: 2 }, { name: 'زيت', qty: 'زجاجة', price: 2 }] },
      { title: 'مزيج رز تركي', emoji: '🍚', time: '45 دقيقة', difficulty: 'متوسط', cuisine: 'تركي', nutrition: { calories: 520, protein: 29, carbs: 55, fat: 18, fiber: 6 }, ingredients: [{ name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'دجاج', qty: '500 غ', price: 15 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'خس', qty: '1 رأس', price: 4 }] }
    ]
  },
  {
    name: 'فرنسي',
    dishes: [
      { title: 'كرواسون بالجبن', emoji: '🥐', time: '25 دقيقة', difficulty: 'سهل', cuisine: 'فرنسي', nutrition: { calories: 440, protein: 20, carbs: 46, fat: 18, fiber: 3 }, ingredients: [{ name: 'عجين كرويسان', qty: '1 باكيت', price: 6 }, { name: 'جبن', qty: '250 غ', price: 8 }, { name: 'حليب', qty: '1 لتر', price: 3 }, { name: 'زبدة', qty: 'علبة', price: 4 }] },
      { title: 'فرنسي كروك', emoji: '🥘', time: '40 دقيقة', difficulty: 'متوسط', cuisine: 'فرنسي', nutrition: { calories: 510, protein: 28, carbs: 40, fat: 24, fiber: 7 }, ingredients: [{ name: 'بطاطس', qty: '500 غ', price: 3 }, { name: 'جبن', qty: '250 غ', price: 8 }, { name: 'حليب', qty: '1 لتر', price: 3 }, { name: 'ملح', qty: 'علبة', price: 1 }] },
      { title: 'سلطة نيسواز', emoji: '🥗', time: '15 دقيقة', difficulty: 'سهل', cuisine: 'فرنسي', nutrition: { calories: 360, protein: 17, carbs: 18, fat: 22, fiber: 8 }, ingredients: [{ name: 'خس', qty: '1 رأس', price: 4 }, { name: 'جبن', qty: '200 غ', price: 7 }, { name: 'لوز', qty: 'علبة', price: 5 }, { name: 'زيت زيتون', qty: '1 علبة', price: 4 }] }
    ]
  },
  {
    name: 'صيني',
    dishes: [
      { title: 'أرز مقلي صيني', emoji: '🍚', time: '20 دقيقة', difficulty: 'سهل', cuisine: 'صيني', nutrition: { calories: 430, protein: 24, carbs: 52, fat: 15, fiber: 5 }, ingredients: [{ name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'خضار', qty: '1 باقة', price: 6 }, { name: 'صلصة صويا', qty: 'علبة', price: 4 }, { name: 'دجاج', qty: '300 غ', price: 11 }] },
      { title: 'توفو صيني', emoji: '🥢', time: '22 دقيقة', difficulty: 'سهل', cuisine: 'صيني', nutrition: { calories: 380, protein: 19, carbs: 32, fat: 17, fiber: 8 }, ingredients: [{ name: 'توفو', qty: '400 غ', price: 10 }, { name: 'خضار', qty: '1 باقة', price: 6 }, { name: 'صلصة', qty: 'علبة', price: 4 }, { name: 'أرز', qty: '1 كيس', price: 6 }] },
      { title: 'دجاج كرسبي', emoji: '🍗', time: '30 دقيقة', difficulty: 'متوسط', cuisine: 'صيني', nutrition: { calories: 570, protein: 37, carbs: 36, fat: 29, fiber: 4 }, ingredients: [{ name: 'دجاج', qty: '500 غ', price: 15 }, { name: 'طحين', qty: '1 كيس', price: 4 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'خضار', qty: '1 باقة', price: 5 }] }
    ]
  },
  {
    name: 'جنوب أمريكي',
    dishes: [
      { title: 'سوبا كينانا', emoji: '🌶️', time: '35 دقيقة', difficulty: 'متوسط', cuisine: 'جنوب أمريكي', nutrition: { calories: 600, protein: 36, carbs: 47, fat: 27, fiber: 7 }, ingredients: [{ name: 'لحم', qty: '500 غ', price: 18 }, { name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'فلفل', qty: '3 حبات', price: 3 }, { name: 'بهارات', qty: 'معبأة', price: 3 }] },
      { title: 'كاسرادا بانانا', emoji: '🍌', time: '18 دقيقة', difficulty: 'سهل', cuisine: 'جنوب أمريكي', nutrition: { calories: 330, protein: 12, carbs: 44, fat: 10, fiber: 6 }, ingredients: [{ name: 'موز', qty: '3 حبات', price: 3 }, { name: 'عجين', qty: '1 باكيت', price: 5 }, { name: 'سكر', qty: 'علبة', price: 2 }, { name: 'مكسرات', qty: 'علبة', price: 4 }] },
      { title: 'أكابيليدو', emoji: '🥥', time: '28 دقيقة', difficulty: 'متوسط', cuisine: 'جنوب أمريكي', nutrition: { calories: 520, protein: 23, carbs: 33, fat: 31, fiber: 9 }, ingredients: [{ name: 'لحم', qty: '400 غ', price: 15 }, { name: 'حليب جوز الهند', qty: '1 علبة', price: 5 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'خضار', qty: '1 باقة', price: 5 }] }
    ]
  }
];

const defaultTrending = [
  {
    title: 'بوفيه الشاورما الصحية',
    emoji: '🌯',
    tag: 'Trending',
    score: 96,
    time: '15 دقيقة',
    cuisine: 'عربي',
    nutrition: { calories: 470, protein: 30, carbs: 42, fat: 18, fiber: 9 },
    ingredients: [
      { name: 'خبز', qty: '4 قطع', price: 5 },
      { name: 'دجاج', qty: '300 غ', price: 12 },
      { name: 'خس', qty: '1 رأس', price: 4 },
      { name: 'خضار', qty: 'باقية', price: 4 }
    ]
  },
  {
    title: 'طبق التونة مع سلطة الخضار',
    emoji: '🥗',
    tag: 'Low cost',
    score: 91,
    time: '12 دقيقة',
    cuisine: 'بحري',
    nutrition: { calories: 390, protein: 29, carbs: 20, fat: 18, fiber: 10 },
    ingredients: [
      { name: 'تونة', qty: '2 علب', price: 9 },
      { name: 'خس', qty: '1 رأس', price: 4 },
      { name: 'طماطم', qty: '3 حبات', price: 2 },
      { name: 'زيت زيتون', qty: '1 علبة', price: 4 }
    ]
  },
  {
    title: 'كريب الدجاج الخفيف',
    emoji: '🥞',
    tag: 'High protein',
    score: 88,
    time: '18 دقيقة',
    cuisine: 'أوروبي',
    nutrition: { calories: 480, protein: 38, carbs: 35, fat: 19, fiber: 5 },
    ingredients: [
      { name: 'دقيق', qty: '1 كيس', price: 4 },
      { name: 'دجاج', qty: '300 غ', price: 12 },
      { name: 'زبادي', qty: 'علبة', price: 5 },
      { name: 'خضار', qty: '1 باقة', price: 5 }
    ]
  }
];

const state = {
  budget: 180,
  people: 4,
  shoppingList: [],
  checked: [],
  selectedTab: 'plan',
  trendingRecipes: [],
  globalCuisine: 'الكل',
  deferredPrompt: null
};

const refs = {
  budget: document.querySelector('#budget'),
  people: document.querySelector('#people'),
  mealGrid: document.querySelector('#mealGrid'),
  shoppingList: document.querySelector('#shoppingList'),
  totalCost: document.querySelector('#totalCost'),
  remaining: document.querySelector('#remaining'),
  budgetProgress: document.querySelector('#budgetProgress'),
  countBadge: document.querySelector('#countBadge'),
  recipeGrid: document.querySelector('#recipeGrid'),
  trendingGrid: document.querySelector('#trendingGrid'),
  globalCuisineGrid: document.querySelector('#globalCuisineGrid'),
  cuisineFilters: document.querySelector('#cuisineFilters'),
  resetBtn: document.querySelector('#resetBtn'),
  installBtn: document.querySelector('#installBtn'),
  copyList: document.querySelector('#copyList'),
  toast: document.querySelector('#toast'),
  year: document.querySelector('#year'),
  tabs: [...document.querySelectorAll('.tab')],
  panels: [...document.querySelectorAll('.panel')],
  customName: document.querySelector('#customItemName'),
  customQty: document.querySelector('#customItemQty'),
  customPrice: document.querySelector('#customItemPrice'),
  addCustom: document.querySelector('#addCustomItem'),
  aiPrompt: document.querySelector('#aiPrompt'),
  aiSuggest: document.querySelector('#aiSuggest'),
  aiOutput: document.querySelector('#aiOutput'),
  mealPhoto: document.querySelector('#mealPhoto'),
  photoPreview: document.querySelector('#photoPreview'),
  nutritionPreview: document.querySelector('#nutritionPreview')
};

function formatCurrency(value) {
  return `${Math.round(value)} ر.س`;
}

function getAllRecipes() {
  return [...defaultRecipes, ...state.trendingRecipes, ...worldCuisines.flatMap(cuisine => cuisine.dishes)];
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      state.budget = Number(saved.budget) || state.budget;
      state.people = Number(saved.people) || state.people;
      state.selectedTab = saved.selectedTab || state.selectedTab;
      state.shoppingList = Array.isArray(saved.shoppingList) ? saved.shoppingList : [];
      state.checked = Array.isArray(saved.checked) ? saved.checked : [];
      state.globalCuisine = saved.globalCuisine || 'الكل';
    } catch (error) {
      console.warn('Local state could not be read:', error);
    }
  }

  const trendingRaw = localStorage.getItem(TRENDING_KEY);
  if (trendingRaw) {
    try {
      const loaded = JSON.parse(trendingRaw);
      if (Array.isArray(loaded.recipes) && loaded.recipes.length) {
        state.trendingRecipes = loaded.recipes;
      }
    } catch (error) {
      console.warn('Trending data could not be read:', error);
    }
  }

  if (!state.trendingRecipes.length) {
    state.trendingRecipes = [...defaultTrending];
    saveTrending();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    budget: state.budget,
    people: state.people,
    selectedTab: state.selectedTab,
    shoppingList: state.shoppingList,
    checked: state.checked,
    globalCuisine: state.globalCuisine
  }));
}

function saveTrending() {
  localStorage.setItem(TRENDING_KEY, JSON.stringify({
    updatedAt: Date.now(),
    recipes: state.trendingRecipes
  }));
}

function refreshTrendingRecipes(force = false) {
  const raw = localStorage.getItem(TRENDING_KEY);
  if (!raw) {
    state.trendingRecipes = [...defaultTrending];
    saveTrending();
    return;
  }

  try {
    const data = JSON.parse(raw);
    const lastUpdated = Number(data.updatedAt || 0);
    const stale = Date.now() - lastUpdated > 1000 * 60 * 60 * 6;

    if (force || stale) {
      const next = defaultTrending.map((recipe, index) => ({
        ...recipe,
        score: Math.max(80, Math.min(99, recipe.score + ((index + 1) % 3 === 0 ? 1 : -1))),
        nutrition: {
          calories: recipe.nutrition.calories + (index * 6),
          protein: recipe.nutrition.protein + (index % 2 === 0 ? 2 : 1),
          carbs: recipe.nutrition.carbs + (index % 2 === 1 ? 2 : 1),
          fat: recipe.nutrition.fat + (index === 2 ? 1 : 0),
          fiber: recipe.nutrition.fiber + (index % 3 === 0 ? 1 : 0)
        }
      }));
      state.trendingRecipes = next;
      saveTrending();
    }
  } catch (error) {
    state.trendingRecipes = [...defaultTrending];
    saveTrending();
  }
}

function renderMeals() {
  refs.mealGrid.innerHTML = defaultMeals.map(meal => `
    <article class="meal-card">
      <div class="meal-top">
        <span class="day">${meal.day}</span>
        <span class="meal-emoji">${meal.emoji}</span>
      </div>
      <h3>${meal.title}</h3>
      <div class="meal-meta">
        <span>${meal.meal}</span>
        <span>•</span>
        <span>${meal.meta}</span>
      </div>
      <div class="meal-actions">
        <select aria-label="اختيار نوع الوجبة ${meal.title}">
          <option>خيار مقترح</option>
          <option>بديل نباتي</option>
          <option>خارج المنزل</option>
          <option>أضيف لاحقًا</option>
        </select>
        <button type="button" data-add-meal="${meal.id}">أضف</button>
      </div>
    </article>
  `).join('');

  refs.mealGrid.querySelectorAll('[data-add-meal]').forEach(btn => {
    btn.addEventListener('click', () => addMealToList(btn.dataset.addMeal));
  });
}

function addItemToList(item) {
  const normalized = {
    name: String(item.name || '').trim(),
    qtyLabel: String(item.qty || item.qtyLabel || '').trim(),
    price: Number(item.price) || 0
  };

  if (!normalized.name || !normalized.price) return;

  const existing = state.shoppingList.find(entry => entry.name === normalized.name);
  if (existing) {
    existing.price = Number(existing.price) + normalized.price;
    if (normalized.qtyLabel) existing.qtyLabel = normalized.qtyLabel;
  } else {
    state.shoppingList.push({
      name: normalized.name,
      qtyLabel: normalized.qtyLabel || 'منتج',
      price: normalized.price
    });
  }

  saveState();
  renderShoppingList();
}

function addMealToList(mealId) {
  const meal = defaultMeals.find(item => item.id === mealId);
  if (!meal) return;

  meal.items.forEach(item => addItemToList(item));
  showToast(`تمت إضافة ${meal.title} إلى المقاضي`);
}

function addRecipeToList(recipeTitle) {
  const recipe = getAllRecipes().find(item => item.title === recipeTitle);
  if (!recipe) return;

  (recipe.ingredients || []).forEach(item => addItemToList(item));
  showToast(`تمت إضافة مكونات ${recipe.title}`);
}

function renderRecipes() {
  refs.recipeGrid.innerHTML = defaultRecipes.map(recipe => `
    <article class="recipe-card">
      <div class="meal-top">
        <span class="day">${recipe.accent}</span>
        <span class="meal-emoji">${recipe.emoji}</span>
      </div>
      <h3>${recipe.title}</h3>
      <p>${recipe.blurb}</p>
      <div class="recipe-bottom">
        <span>${recipe.time}</span>
        <span>${recipe.cuisine}</span>
      </div>
      <div class="nutrition-mini">
        <span>كالوري: ${recipe.nutrition.calories}</span>
        <span>بروتين: ${recipe.nutrition.protein}غ</span>
      </div>
      <button type="button" data-recipe="${recipe.title}">إضافة إلى المقاضي</button>
    </article>
  `).join('');

  refs.recipeGrid.querySelectorAll('[data-recipe]').forEach(button => {
    button.addEventListener('click', () => addRecipeToList(button.dataset.recipe));
  });
}

function renderCuisineFilters() {
  const cuisines = ['الكل', ...worldCuisines.map(menu => menu.name)];
  refs.cuisineFilters.innerHTML = cuisines.map(name => `
    <button type="button" class="filter-btn ${state.globalCuisine === name ? 'active' : ''}" data-cuisine="${name}">${name}</button>
  `).join('');

  refs.cuisineFilters.querySelectorAll('[data-cuisine]').forEach(button => {
    button.addEventListener('click', () => {
      state.globalCuisine = button.dataset.cuisine;
      saveState();
      renderCuisineFilters();
      renderGlobalCuisineDishes();
    });
  });
}

function renderGlobalCuisineDishes() {
  const all = worldCuisines.flatMap(cuisine => cuisine.dishes.map(dish => ({ ...dish, cuisineName: cuisine.name })));
  const list = state.globalCuisine === 'الكل' ? all : all.filter(dish => dish.cuisineName === state.globalCuisine);

  refs.globalCuisineGrid.innerHTML = list.map(dish => `
    <article class="global-card">
      <div class="global-head">
        <span class="meal-emoji">${dish.emoji}</span>
        <span class="global-cuisine">${dish.cuisineName}</span>
      </div>
      <h3>${dish.title}</h3>
      <p>${dish.time} · ${dish.difficulty}</p>
      <div class="nutrition-mini">
        <span>${dish.nutrition.calories} kcal</span>
        <span>${dish.nutrition.protein}غ بروتين</span>
      </div>
      <button type="button" data-global-recipe="${dish.title}">إضافة</button>
    </article>
  `).join('');

  refs.globalCuisineGrid.querySelectorAll('[data-global-recipe]').forEach(button => {
    button.addEventListener('click', () => addRecipeToList(button.dataset.globalRecipe));
  });
}

function renderTrendingRecipes() {
  refs.trendingGrid.innerHTML = state.trendingRecipes.map(recipe => `
    <article class="trend-card">
      <div class="trend-head">
        <span class="meal-emoji">${recipe.emoji}</span>
        <span class="trend-badge">${recipe.tag}</span>
      </div>
      <h3>${recipe.title}</h3>
      <p>${recipe.time} · ${recipe.score} نقطة</p>
      <div class="nutrition-mini">
        <span>${recipe.nutrition.calories} kcal</span>
        <span>${recipe.nutrition.protein}غ بروتين</span>
      </div>
      <button type="button" data-trend="${recipe.title}">إضافة</button>
    </article>
  `).join('');

  refs.trendingGrid.querySelectorAll('[data-trend]').forEach(button => {
    button.addEventListener('click', () => addRecipeToList(button.dataset.trend));
  });
}

function toggleChecked(name, checked) {
  if (checked) {
    if (!state.checked.includes(name)) state.checked.push(name);
  } else {
    state.checked = state.checked.filter(item => item !== name);
  }
  saveState();
  renderShoppingList();
}

function deleteItem(name) {
  state.shoppingList = state.shoppingList.filter(item => item.name !== name);
  state.checked = state.checked.filter(item => item !== name);
  saveState();
  renderShoppingList();
}

function editItem(name) {
  const item = state.shoppingList.find(entry => entry.name === name);
  if (!item) return;

  const rawValue = prompt('تعديل العنصر: اكتب "اسم, الكمية, السعر"', `${item.name},${item.qtyLabel},${item.price}`);
  if (rawValue === null) return;

  const parts = rawValue.split(',').map(part => part.trim());
  const nextName = parts[0] || item.name;
  const nextQty = parts[1] || item.qtyLabel;
  const nextPrice = Number(parts[2]) || item.price;

  item.name = nextName;
  item.qtyLabel = nextQty;
  item.price = nextPrice;

  if (state.checked.includes(name)) {
    state.checked = state.checked.filter(itemName => itemName !== name);
    state.checked.push(nextName);
  }

  saveState();
  renderShoppingList();
  showToast('تم تحديث العنصر');
}

function getTotalCost() {
  return state.shoppingList.reduce((sum, item) => sum + Number(item.price || 0), 0);
}

function renderShoppingList() {
  const entries = [...state.shoppingList].sort((a, b) => b.price - a.price);
  refs.countBadge.textContent = entries.length;

  if (!entries.length) {
    refs.shoppingList.innerHTML = `
      <div class="shop-item empty-state">
        <div class="item-info">
          <strong>لا توجد عناصر بعد</strong>
          <small>أضف وجبات من قسم خطة الأسبوع أو أضف عنصرًا يدويًا</small>
        </div>
      </div>
    `;
    refs.totalCost.textContent = '0 ر.س';
    refs.remaining.textContent = `${state.budget} ر.س`;
    refs.budgetProgress.style.width = '0%';
    refs.budgetProgress.parentElement.classList.remove('warning');
    return;
  }

  const total = getTotalCost();
  const remaining = state.budget - total;
  const percent = Math.min((total / Math.max(state.budget, 1)) * 100, 100);

  refs.totalCost.textContent = formatCurrency(total);
  refs.remaining.textContent = formatCurrency(remaining);
  refs.budgetProgress.style.width = `${percent}%`;
  refs.budgetProgress.parentElement.classList.toggle('warning', remaining < 0);

  refs.shoppingList.innerHTML = entries.map(item => {
    const checked = state.checked.includes(item.name) ? 'checked' : '';

    return `
      <div class="shop-item ${checked}">
        <input type="checkbox" ${state.checked.includes(item.name) ? 'checked' : ''} data-item-name="${item.name}">
        <div class="item-info">
          <strong>${item.name}</strong>
          <small>${item.qtyLabel || 'منتج عادي'}</small>
        </div>
        <div class="item-tools">
          <span class="price">${formatCurrency(item.price)}</span>
          <div class="inline-actions">
            <button type="button" class="mini-btn" data-edit-item="${item.name}">تعديل</button>
            <button type="button" class="mini-btn danger" data-delete-item="${item.name}">حذف</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refs.shoppingList.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', (event) => {
      const name = event.target.dataset.itemName;
      toggleChecked(name, event.target.checked);
    });
  });

  refs.shoppingList.querySelectorAll('[data-delete-item]').forEach(button => {
    button.addEventListener('click', () => deleteItem(button.dataset.deleteItem));
  });

  refs.shoppingList.querySelectorAll('[data-edit-item]').forEach(button => {
    button.addEventListener('click', () => editItem(button.dataset.editItem));
  });
}

function updateBudget() {
  state.budget = Number(refs.budget.value) || 0;
  saveState();
  renderShoppingList();
}

function updatePeople() {
  state.people = Number(refs.people.value) || 1;
  saveState();
  renderShoppingList();
}

function handleTabs() {
  refs.tabs.forEach(tab => {
    const isActive = tab.dataset.tab === state.selectedTab;
    tab.classList.toggle('active', isActive);
  });

  refs.panels.forEach(panel => {
    const isActive = panel.id === state.selectedTab;
    panel.classList.toggle('active', isActive);
  });
}

function resetPlanner() {
  state.budget = 180;
  state.people = 4;
  state.shoppingList = [];
  state.checked = [];
  state.globalCuisine = 'الكل';
  refs.budget.value = 180;
  refs.people.value = 4;
  saveState();
  renderCuisineFilters();
  renderGlobalCuisineDishes();
  renderShoppingList();
  showToast('تمت إعادة ضبط الخطة');
}

function addCustomItem() {
  const name = refs.customName.value.trim();
  const qty = refs.customQty.value.trim();
  const price = Number(refs.customPrice.value);

  if (!name || !Number.isFinite(price) || price <= 0) {
    showToast('أدخل اسمًا وسعرًا صحيحًا');
    return;
  }

  addItemToList({ name, qty, price });
  refs.customName.value = '';
  refs.customQty.value = '';
  refs.customPrice.value = '';
  refs.customName.focus();
  showToast('تمت إضافة العنصر المخصص');
}

function buildAiSuggestion(prompt) {
  const text = (prompt || '').toLowerCase();
  let recipe = getAllRecipes()[0];

  if (text.includes('سريع') || text.includes('quick')) {
    recipe = getAllRecipes().find(item => item.title === 'شوربة العدس') || getAllRecipes()[0];
  } else if (text.includes('بروتين') || text.includes('protein')) {
    recipe = getAllRecipes().find(item => item.title === 'سمك مشوي') || getAllRecipes()[1];
  } else if (text.includes('نباتي') || text.includes('vegan')) {
    recipe = getAllRecipes().find(item => item.title === 'سلطة الشاورما المنزلية') || getAllRecipes()[2];
  } else if (text.includes('ميزانية') || text.includes('budget') || text.includes('اقل')) {
    recipe = getAllRecipes().find(item => item.title === 'شوربة العدس') || getAllRecipes()[4];
  } else if (text.includes('عائلة') || text.includes('family')) {
    recipe = getAllRecipes().find(item => item.title === 'أرز بالدجاج') || getAllRecipes()[1];
  } else if (text.includes('ياباني') || text.includes('japanese')) {
    recipe = getAllRecipes().find(item => item.title === 'رامن خضار') || getAllRecipes()[0];
  } else if (text.includes('إيطالي') || text.includes('italian')) {
    recipe = getAllRecipes().find(item => item.title === 'باستا ألبوفريتو') || getAllRecipes()[0];
  } else if (text.includes('هندي') || text.includes('indian')) {
    recipe = getAllRecipes().find(item => item.title === 'شاورما بالدجاج') || getAllRecipes()[0];
  }

  const baseBudget = Number(state.budget) || 180;
  const totalNeeded = (recipe.ingredients || []).reduce((sum, x) => sum + (Number(x.price) || 0), 0);
  const fit = totalNeeded <= baseBudget ? 'مناسب لميزانيتك الحالية' : 'يتطلب تعديلًا بسيطًا في المكونات';

  return {
    title: recipe.title,
    emoji: recipe.emoji,
    note: `${fit}. الوقت المتوقع ${recipe.time}.`,
    nutrition: recipe.nutrition,
    price: totalNeeded
  };
}

function handleAiRequest() {
  const prompt = refs.aiPrompt.value.trim() || 'أريد وجبة مناسبة لميزانيتي';
  const suggestion = buildAiSuggestion(prompt);

  refs.aiOutput.innerHTML = `
    <div class="ai-result-card">
      <div class="ai-header">
        <span>${suggestion.emoji}</span>
        <strong>${suggestion.title}</strong>
      </div>
      <p>${suggestion.note}</p>
      <div class="nutrition-grid">
        <span>كالوري: ${suggestion.nutrition.calories}</span>
        <span>بروتين: ${suggestion.nutrition.protein}غ</span>
        <span>كربوهيدرات: ${suggestion.nutrition.carbs}غ</span>
        <span>دهون: ${suggestion.nutrition.fat}غ</span>
      </div>
      <button type="button" class="primary small" data-ai-add="${suggestion.title}">إضافة إلى المقاضي</button>
    </div>
  `;

  refs.aiOutput.querySelector('[data-ai-add]')?.addEventListener('click', () => addRecipeToList(suggestion.title));
  showToast('تم توليد اقتراح الذكاء الاصطناعي');
}

async function copyShoppingList() {
  const text = state.shoppingList.length
    ? state.shoppingList.map(item => `- ${item.name}: ${formatCurrency(item.price)}`).join('\n')
    : 'قائمة المقاضي فارغة';

  try {
    await navigator.clipboard.writeText(text);
    showToast('تم نسخ قائمة المقاضي');
  } catch (error) {
    showToast('تعذر النسخ، يمكنك نسخ القائمة يدويًا');
  }
}

function showToast(msg) {
  refs.toast.textContent = msg;
  refs.toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => refs.toast.classList.remove('show'), 1800);
}

function renderNutritionPreview(file) {
  if (!file) return;

  const url = URL.createObjectURL(file);
  refs.photoPreview.src = url;
  refs.photoPreview.hidden = false;

  const recipe = getAllRecipes()[Math.floor(Math.random() * getAllRecipes().length)];
  refs.nutritionPreview.innerHTML = `
    <div class="nutrition-card">
      <strong>تحليل الصورة</strong>
      <p>طبق يُشبه: ${recipe.title}</p>
      <div class="nutrition-grid">
        <span>كالوري: ${recipe.nutrition.calories}</span>
        <span>بروتين: ${recipe.nutrition.protein}غ</span>
        <span>كربوهيدرات: ${recipe.nutrition.carbs}غ</span>
        <span>دهون: ${recipe.nutrition.fat}غ</span>
      </div>
    </div>
  `;
}

function handleInstallClick() {
  if (!state.deferredPrompt) {
    showToast('التثبيت غير متاح الآن');
    return;
  }

  state.deferredPrompt.prompt();
  const userChoice = state.deferredPrompt.userChoice || Promise.resolve({ outcome: 'dismissed' });
  userChoice.finally(() => {
    state.deferredPrompt = null;
    if (refs.installBtn) refs.installBtn.classList.add('hidden');
  });
}

refs.budget.addEventListener('input', updateBudget);
refs.people.addEventListener('change', updatePeople);
refs.resetBtn.addEventListener('click', resetPlanner);
if (refs.installBtn) refs.installBtn.addEventListener('click', handleInstallClick);
refs.copyList.addEventListener('click', copyShoppingList);
refs.addCustom.addEventListener('click', addCustomItem);
refs.aiSuggest.addEventListener('click', handleAiRequest);
refs.mealPhoto.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (file) renderNutritionPreview(file);
});

refs.tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    state.selectedTab = tab.dataset.tab;
    saveState();
    handleTabs();
  });
});

refs.year.textContent = new Date().getFullYear();
loadState();
refs.budget.value = state.budget;
refs.people.value = state.people;
refreshTrendingRecipes();
renderMeals();
renderRecipes();
renderCuisineFilters();
renderGlobalCuisineDishes();
renderTrendingRecipes();
handleTabs();
renderShoppingList();

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  state.deferredPrompt = event;
  if (refs.installBtn) refs.installBtn.classList.remove('hidden');
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

if (!navigator.clipboard) {
  refs.copyList.title = 'نسخ القائمة غير متاح في هذا المتصفح';
}
