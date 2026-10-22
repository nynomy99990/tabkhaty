const STORAGE_KEY = 'tabkhaty-state-v1';

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
    ingredients: [
      { name: 'خبز', qty: '4 قطع', price: 5 },
      { name: 'دجاج', qty: '300 غ', price: 11 },
      { name: 'خس', qty: '1 رأس', price: 4 },
      { name: 'صوص', qty: '1 علبة', price: 3 }
    ]
  },
  {
    title: 'أرز بالدجاج',
    time: '35 دقيقة',
    emoji: '🍚',
    blurb: 'وجبة عائلية مريحة.',
    accent: 'غداء',
    ingredients: [
      { name: 'أرز', qty: '1 كيس', price: 6 },
      { name: 'دجاج', qty: '500 غ', price: 12 },
      { name: 'بهارات', qty: 'معبأة', price: 3 },
      { name: 'جزر', qty: '2 حبات', price: 2 }
    ]
  },
  {
    title: 'كفتة بالطحينة',
    time: '30 دقيقة',
    emoji: '🍢',
    blurb: 'نكهة عربية مميزة.',
    accent: 'عشاء',
    ingredients: [
      { name: 'لحم مفروم', qty: '400 غ', price: 16 },
      { name: 'طحينة', qty: '1 علبة', price: 5 },
      { name: 'بقدونس', qty: 'حزمة', price: 2 },
      { name: 'خبز', qty: '4 قطع', price: 4 }
    ]
  },
  {
    title: 'مكرونة بالفرماج',
    time: '25 دقيقة',
    emoji: '🍝',
    blurb: 'سهل وسريع.',
    accent: 'عائلة',
    ingredients: [
      { name: 'مكرونة', qty: '1 علبة', price: 6 },
      { name: 'جبن', qty: '250 غ', price: 8 },
      { name: 'حليب', qty: '1 لتر', price: 3 },
      { name: 'ثوم', qty: 'رأس', price: 2 }
    ]
  },
  {
    title: 'شوربة العدس',
    time: '15 دقيقة',
    emoji: '🥣',
    blurb: 'مفيدة ومشبعة.',
    accent: 'عشاء',
    ingredients: [
      { name: 'عدس', qty: '1 كيس', price: 7 },
      { name: 'بطاطس', qty: '500 غ', price: 3 },
      { name: 'بهارات', qty: 'معبأة', price: 2 },
      { name: 'ليمون', qty: '2 حبات', price: 2 }
    ]
  },
  {
    title: 'سمك مشوي',
    time: '24 دقيقة',
    emoji: '🐟',
    blurb: 'قيمة غذائية عالية.',
    accent: 'غداء',
    ingredients: [
      { name: 'سمك', qty: '500 غ', price: 13 },
      { name: 'ليمون', qty: '2 حبات', price: 2 },
      { name: 'خضار', qty: '1 باقة', price: 3 },
      { name: 'زيت', qty: 'زجاجة', price: 2 }
    ]
  }
];

const state = {
  budget: 180,
  people: 4,
  shoppingList: [],
  checked: [],
  selectedTab: 'plan'
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
  resetBtn: document.querySelector('#resetBtn'),
  copyList: document.querySelector('#copyList'),
  toast: document.querySelector('#toast'),
  year: document.querySelector('#year'),
  tabs: [...document.querySelectorAll('.tab')],
  panels: [...document.querySelectorAll('.panel')],
  customName: document.querySelector('#customItemName'),
  customQty: document.querySelector('#customItemQty'),
  customPrice: document.querySelector('#customItemPrice'),
  addCustom: document.querySelector('#addCustomItem')
};

function formatCurrency(value) {
  return `${Math.round(value)} ر.س`;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    state.budget = Number(saved.budget) || state.budget;
    state.people = Number(saved.people) || state.people;
    state.selectedTab = saved.selectedTab || state.selectedTab;
    state.shoppingList = Array.isArray(saved.shoppingList) ? saved.shoppingList : [];
    state.checked = Array.isArray(saved.checked) ? saved.checked : [];
  } catch (error) {
    console.warn('Local state could not be read:', error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    budget: state.budget,
    people: state.people,
    selectedTab: state.selectedTab,
    shoppingList: state.shoppingList,
    checked: state.checked
  }));
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
  const recipe = defaultRecipes.find(item => item.title === recipeTitle);
  if (!recipe) return;

  recipe.ingredients.forEach(item => addItemToList(item));
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
        <span>سهل</span>
      </div>
      <button type="button" data-recipe="${recipe.title}">إضافة إلى المقاضي</button>
    </article>
  `).join('');

  refs.recipeGrid.querySelectorAll('[data-recipe]').forEach(button => {
    button.addEventListener('click', () => addRecipeToList(button.dataset.recipe));
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
  refs.budget.value = 180;
  refs.people.value = 4;
  saveState();
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

refs.budget.addEventListener('input', updateBudget);
refs.people.addEventListener('change', updatePeople);
refs.resetBtn.addEventListener('click', resetPlanner);
refs.copyList.addEventListener('click', copyShoppingList);
refs.addCustom.addEventListener('click', addCustomItem);
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
renderMeals();
renderRecipes();
handleTabs();
renderShoppingList();

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

if (!navigator.clipboard) {
  refs.copyList.title = 'نسخ القائمة غير متاح في هذا المتصفح';
}
