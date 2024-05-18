const opcoes = ['Papel', 'Pedra', 'Tesoura'];
let escolha;
let scoreUsuario = 0;
let scoreMaquina = 0;
const opcao = document.querySelectorAll('.opcao');
const btn = document.querySelector('.jogar');
const resultado = document.querySelector('.resultado');
const mostrarEscolha = document.querySelector('.escolhaMaquina');
const scoreFinal = document.querySelector('.scoreFinal');
let resetar = document.querySelector('.reset');

opcao.forEach(function (opcao) {
  opcao.addEventListener('click', function () {
    escolha = opcao.textContent;
  });
});

function jogar() {
  let random = Math.floor(Math.random() * 3);
  let escolhaMaquina = opcoes[random];

  mostrarEscolha.innerHTML = `Sua escolha: ${escolha}<br>A máquina jogou: ${escolhaMaquina}`;

  if (escolhaMaquina == escolha) {
    resultado.textContent = 'Empate!';
  } else if (escolhaMaquina == opcoes[0]) {
    if (escolha == opcoes[1]) {
      resultado.textContent = 'Revolução das máquinas! O computador ganhou!';
      scoreMaquina++;
    } else {
      resultado.textContent = 'Você ganhou!';
      scoreUsuario++;
    }
  } else if (escolhaMaquina == opcoes[1]) {
    if (escolha == opcoes[2]) {
      resultado.textContent = 'Revolução das máquinas! O computador ganhou!';
      scoreMaquina++;
    } else {
      resultado.textContent = 'Você ganhou!';
      scoreUsuario++;
    }
  } else {
    if (escolha == opcoes[0]) {
      resultado.textContent = 'Revolução das máquinas! O computador ganhou!';
      scoreMaquina++;
    } else {
      resultado.textContent = 'Você ganhou!';
      scoreUsuario++;
    }
  }
  scoreFinal.textContent = `Máquina ${scoreMaquina} x ${scoreUsuario} Você`;
}

function resetarTela() {
  mostrarEscolha.innerHTML = '';
  resultado.innerHTML = '';
  scoreMaquina = 0;
  scoreUsuario = 0;
  scoreFinal.textContent = '';
}

btn.addEventListener('click', jogar);
resetar.addEventListener('click', resetarTela);
