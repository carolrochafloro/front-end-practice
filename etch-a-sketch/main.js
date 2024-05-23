//selecionar board, definir valor inicial
let board = document.querySelector('.board');
let inputUser = 16;
let response = document.querySelector('.response');
let resetBtn = document.querySelector('.reset');

// criar frames com o valor inicial

function createFrames(inputUser) {
  inputUser *= inputUser;
  board.innerHTML = '';
  for (let i = 0; i < inputUser; i++) {
    let frame = document.createElement('div');
    frame.className = 'frame';
    frame.style.minBlockSize = `calc(100% / ${Math.sqrt(inputUser)})`;
    board.appendChild(frame);
  }
  eventFrames();
}

createFrames(inputUser);

// mudar frames: receber input como parâmetro, validar se está entre 0 e 100 e criar novos frames

function changeFrames(newInput) {
  if (newInput < 0 || newInput > 100 || newInput == NaN) {
    return;
  }
  createFrames(newInput);
  eventFrames();
}

// função para mudar a cor dos frames

function eventFrames() {
  let frames = document.querySelectorAll('.frame');
  frames.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      element.style.setProperty('background-color', 'lightcoral');
    });
  });
}

// event listener para receber o input do usuário
document.addEventListener('DOMContentLoaded', () => {
  const inputCampo = document.querySelector('.number');
  const submitButton = document.querySelector('.submit');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = parseInt(inputCampo.value, 10);
    if (
      inputValue < 1 ||
      inputValue > 100 ||
      isNaN(inputValue) ||
      inputUser == undefined
    ) {
      response.innerHTML = '<p>Escolha um número entre 1 e 100</p>';
      return;
    }
    inputUser = inputValue;
    console.log('Número salvo:', inputUser);
    changeFrames(inputUser);
  });
});

function resetAll() {
  inputUser = 16;
  response.innerHTML = '';
  createFrames(inputUser);
}

resetBtn.addEventListener('click', resetAll);

// reset: setar inputUser = 16 e backgroundcolor = branco em todos os frames
