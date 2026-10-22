const meals = [
  {
    id: 'mon-lunch',
    day: 'الاثنين',
    meal: 'غداء',
    emoji: '🍛',
    title: 'مزيج أرز وسمك',
    meta: '٣ أشخاص · 20 دقيقة',
    cost: 18,
    items: [{ name: 'أرز', qty: '1 كيس', price: 6 }, { name: 'سمك', qty: '400 غ', price: 9 }, { name: 'خضار', qty: '1 باقة', price: 3 }]
  },
  {
    id: 'mon-dinner',
    day: 'الاثنين',
    meal: 'عشاء',
    emoji: '🥗',
    title: 'سلطة دجاج مشوية',
    meta: '٤ أشخاص · 25 دقيقة',
    cost: 22,
    items: [{ name: 'دجاج', qty: '500 غ', price: 11 }, { name: 'خس', qty: '1 رأس', price: 4 }, { name: 'طماطم', qty: '3 حبات', price: 2 }, { name: 'زبادي', qty: 'علبة', price: 5 }]
  },
  {
    id: 'tue-lunch',
    day: 'الثلاثاء',
    meal: 'غداء',
    emoji: '🥘',
    title: 'كسكس بالخضار',
    meta: '٤ أشخاص · 30 دقيقة',
    cost: 16,
    items: [{ name: 'كسكس', qty: '1 كيس', price: 5 }, { name: 'جزر', qty: '2 ��بات', price: 2 }, { name: 'فلفل', qty: '3 حبات', price: 3 }, { name: 'زيت', qty: '1 زجاجة', price: 6 }]
  },
  {
    id: 'wed-dinner',
    day: 'الأربعاء',
    meal: 'عشاء',
    emoji: '🍲',
    title: 'حساء عدس',
    meta: '٤ أشخاص · 35 دقيقة',
    cost: 14,
    items: [{ name: 'عدس', qty: '1 كيس', price: 7 }, { name: 'بطاطس', qty: '500 غ', price: 3 }, { name: 'بهارات', qty: 'معبأة', price: 2 }, { name: 'ليمون', qty: '2 حبات', price: 2 }]
  },
  {
    id: 'thu-lunch',
    day: 'الخميس',
    meal: 'غداء',
    emoji: '🍝',
    title: 'مكرونة بالجبن',
    meta: '٤ أشخاص · 20 دقيقة',
    cost: 19,
    items: [{ name: 'مكرونة', qty: '1 علبة', price: 6 }, { name: 'جبن', qty: '250 غ', price: 8 }, { name: 'ثوم', qty: 'رأس', price: 2 }, { name: 'حليب', qty: '1 لتر', price: 3 }]
  },
  {
    id: 'fri-dinner',
    day: 'الجمعة',
    meal: 'عشاء',
    emoji: '🍗',
    title: 'دجاج مشوي',
    meta: '٦ أشخاص · 40 دقيقة',
    cost: 26,
    items: [{ name: 'دجاج', qty: '1 كجم', price: 15 }, { name: 'بطاطا', qty: '1 كجم', price: 5 }, { name: 'بهارات', qty: 'معبأة', price: 3 }, { name: 'ليمون', qty: '3 حبات', price: 3 }]
  },
  {
    id: 'sat-lunch',
    day: 'السبت',
    meal: 'غداء',
    emoji: '🥙',
    title: 'فطائر بالجبن',
    meta: '٤ أشخاص · 28 دقيقة',
    cost: 17,
    items: [{ name: 'عجين', qty: '1 باكيت', price: 5 }, { name: 'جبن', qty: '300 غ', price: 8 }, { name: 'بقدونس', qty: 'حزمة', price: 2 }, { name: 'زيت', qty: 'زجاجة', price: 2 }]
  }
];

const recipes = [
  { title: 'سلطة الشاورما المنزلية', time: '20 دقيقة', emoji: '🥙', blurb: 'سريعة ومشبعة.', accent: 'خضار' },
  { title: 'أرز بالدجاج', time: '35 دقيقة', emoji: '🍚', blurb: 'وجبة عائلية مريحة.', accent: 'غداء' },
  { title: 'كفتة بالطحينة', time: '30 دقيقة', emoji: '🍢', blurb: 'نكهة عربية مميزة.', accent: 'عشاء' },
  { title: 'مكرونة بالفرماج', time: '25 دقيقة', emoji: '🍝', blurb: 'سهل وسريع.', accent: 'عائلة' },
  { title: 'شوربة العدس', time: '15 دقيقة', emoji: '🥣', blurb: 'مفيدة ومشبعة.', accent: 'عشاء' },
  { title: 'سمك مشوي', time: '24 دقيقة', emoji: '🐟', blurb: 'قيمة غذائية عالية.', accent: 'غداء' }
];

const state = {
  budget: 180,
  people: 4,
  shoppingList: new Map(),
  checked: new Set(),
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
  panels: [...document.querySelectorAll('.panel')]
};

function formatCurrency(value) {
  return `${Math.round(value)} ر.س`;
}

function renderMeals() {
  refs.mealGrid.innerHTML = meals.map(meal => `
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

function addMealToList(mealId) {
  const meal = meals.find(item => item.id === mealId);
  if (!meal) return;

  meal.items.forEach(item => {
    const old = state.shoppingList.get(item.name) || { name: item.name, price: 0, qty: 0 };
    const nextPrice = old.price + item.price;
    const nextQty = old.qty + 1;
    state.shoppingList.set(item.name, { name: item.name, price: nextPrice, qty: nextQty, unit: item.qty });
  });

  renderShoppingList();
  showToast(`تمت إضافة ${meal.title} إلى المقاضي`);
}

function renderRecipes() {
  refs.recipeGrid.innerHTML = recipes.map(recipe => `
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
      <button type="button">إضافة للوصفة</button>
    </article>
  `).join('');
}

function buildShoppingList() {
  const entries = [...state.shoppingList.values()].map(item => ({
    ...item,
    price: Number((item.price / Math.max(state.people, 1)).toFixed(2))
  }));

  return entries.sort((a, b) => b.price - a.price);
}

function renderShoppingList() {
  const entries = buildShoppingList();

  refs.countBadge.textContent = entries.length;

  if (!entries.length) {
    refs.shoppingList.innerHTML = '<div class="shop-item"><div class="item-info"><strong>لا توجد عناصر بعد</strong><small>أضف وجبات من قسم خطة الأسبوع</small></div></div>';
    refs.totalCost.textContent = '0 ر.س';
    refs.remaining.textContent = `${state.budget} ر.س`;
    refs.budgetProgress.style.width = '0%';
    return;
  }

  const total = entries.reduce((sum, item) => sum + item.price, 0);
  const remaining = Math.max(state.budget - total, 0);

  refs.totalCost.textContent = formatCurrency(total);
  refs.remaining.textContent = formatCurrency(remaining);
  refs.budgetProgress.style.width = `${Math.min((total / Math.max(state.budget, 1)) * 100, 100)}%`;

  refs.shoppingList.innerHTML = entries.map(item => {
    const checked = state.checked.has(item.name) ? 'checked' : '';
    return `
      <label class="shop-item ${checked}">
        <input type="checkbox" ${checked ? 'checked' : ''} data-item-name="${item.name}">
        <div class="item-info">
          <strong>${item.name}</strong>
          <small>${item.unit}</small>
        </div>
        <span class="price">${formatCurrency(item.price)}</span>
      </label>
    `;
  }).join('');

  refs.shoppingList.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', () => {
      const name = input.dataset.itemName;
      if (input.checked) {
        state.checked.add(name);
      } else {
        state.checked.delete(name);
      }
      renderShoppingList();
    });
  });
}

function updateBudget() {
  state.budget = Number(refs.budget.value) || 0;
  renderShoppingList();
}

function updatePeople() {
  state.people = Number(refs.people.value) || 1;
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
  state.shoppingList = new Map();
  state.checked = new Set();
  refs.budget.value = 180;
  refs.people.value = 4;
  updateBudget();
  renderShoppingList();
  showToast('تمت إعادة ضبط الخطة');
}

async function copyShoppingList() {
  const entries = buildShoppingList();
  const text = entries.length
    ? entries.map(item => `- ${item.name}: ${formatCurrency(item.price)}`).join('\n')
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
refs.tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    state.selectedTab = tab.dataset.tab;
    handleTabs();
  });
});

refs.year.textContent = new Date().getFullYear();
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
