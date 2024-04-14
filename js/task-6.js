function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesEl = document.getElementById('boxes');
  boxesEl.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesEl = document.getElementById('boxes');
  boxesEl.innerHTML = '';
}

const handleCreate = event => {
  const amount = document.querySelector('input').value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    document.querySelector('input').value = '';
    createBoxes(amount);
  }
};

const createEl = document.querySelector('button[data-create]');

createEl.addEventListener('click', handleCreate);

document
  .querySelector('button[data-destroy]')
  .addEventListener('click', destroyBoxes);
