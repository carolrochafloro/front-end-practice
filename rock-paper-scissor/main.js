const options = ['Papel', 'Pedra', 'Tesoura'];
let choice;
let userScore = 0;
let machineScore = 0;
const option = document.querySelectorAll('.option');
const btn = document.querySelector('.play');
const result = document.querySelector('.result');
const showChoice = document.querySelector('.machineChoice');
const finalScore = document.querySelector('.finalScore');
let reset = document.querySelector('.reset');

option.forEach(function (option) {
  option.addEventListener('click', function () {
    choice = option.textContent;
  });
});

function play() {
  let random = Math.floor(Math.random() * 3);
  let machineChoice = options[random];

  showChoice.innerHTML = `Sua escolha: ${choice}<br>A máquina jogou: ${machineChoice}`;

  if (machineChoice === choice) {
    result.textContent = 'Empate!';
  } else if (
    (machineChoice === options[0] && choice === options[1]) ||
    (machineChoice === options[1] && choice === options[2]) ||
    (machineChoice === options[2] && choice === options[0])
  ) {
    result.textContent = 'Revolução das máquinas! O computador ganhou!';
    machineScore++;
  } else {
    result.textContent = 'Você ganhou!';
    userScore++;
  }
  finalScore.textContent = `Máquina ${machineScore} x ${userScore} Você`;
}

function resetDisplay() {
  showChoice.innerHTML = '';
  result.innerHTML = '';
  machineScore = 0;
  userScore = 0;
  finalScore.textContent = '';
}

btn.addEventListener('click', play);
reset.addEventListener('click', resetDisplay);
