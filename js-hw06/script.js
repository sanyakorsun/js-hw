const form = document.getElementById('goal-form');
const input = document.getElementById('goal-input');
const errorMessage = document.getElementById('error-message');
const goalsList = document.getElementById('goals-list');
const counter = document.getElementById('counter');
const emptyMessage = document.getElementById('empty-message');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if (text.length < 3 || text.length > 100) {
    errorMessage.textContent = 'Текст має містити від 3 до 100 символів.';
    return;
  }

  errorMessage.textContent = '';

  createGoalElement(text);

  input.value = '';
  input.focus();

  updateState();
});

function createGoalElement(text) {
  const li = document.createElement('li');
  li.classList.add('goal-item');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('goal-content');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.classList.add('goal-text');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Видалити';

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
    updateState();
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateState();
  });

  contentDiv.appendChild(checkbox);
  contentDiv.appendChild(span);
  li.appendChild(contentDiv);
  li.appendChild(deleteBtn);

  goalsList.appendChild(li);
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  const items = goalsList.querySelectorAll('.goal-item');

  items.forEach((item) => {
    const isCompleted = item.classList.contains('completed');

    if (currentFilter === 'all') {
      item.hidden = false;
    } else if (currentFilter === 'active') {
      item.hidden = isCompleted;
    } else if (currentFilter === 'completed') {
      item.hidden = !isCompleted;
    }
  });
}

function updateState() {
  const allItems = goalsList.querySelectorAll('.goal-item');
  const completedItems = goalsList.querySelectorAll('.goal-item.completed');

  const totalCount = allItems.length;
  const completedCount = completedItems.length;

  counter.textContent = `Усього: ${totalCount}. Виконано: ${completedCount}`;

  if (totalCount === 0) {
    emptyMessage.hidden = false;
  } else {
    emptyMessage.hidden = true;
  }

  applyFilter();
}

updateState();
