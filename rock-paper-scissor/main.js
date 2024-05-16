const opcoes = ['Papel', 'Pedra', 'Tesoura'];
const divs = document.querySelectorAll('.opcao');
let escolha;

divs.forEach(function (div) {
  div.addEventListener('click', function (event) {
    escolha = this.textContent;
    console.log(escolha);
  });
});

let btn = document.querySelector('.jogar');
const resultado = document.querySelector('.resultado');
const mostrarEscolha = document.querySelector('.escolhaMaquina');

function jogar() {
  let random = Math.floor(Math.random() * 3);
  let escolhaMaquina = opcoes[random];

  console.log(escolhaMaquina);

  mostrarEscolha.innerHTML = `Sua escolha: ${escolha}<br>A máquina jogou: ${escolhaMaquina}`;
  // empate
  if (escolhaMaquina == escolha) {
    resultado.textContent = 'Empate!';
  } else if (escolhaMaquina == opcoes[0]) {
    /*se maquina escolhe papel*/ if (escolha == opcoes[1]) {
      /*usuario escolhe pedra*/ resultado.textContent =
        'Revolução das máquinas! O computador ganhou!';
    } /*usuario escolhe tesoura*/ else {
      resultado.textContent = 'Você ganhou!';
    }
  } else if (escolhaMaquina == opcoes[1]) {
    /*se maquina escolhe pedra*/ if (escolha == opcoes[2]) {
      /*usuario escolhe tesoura*/ resultado.textContent =
        'Revolução das máquinas! O computador ganhou!';
    } /*usuario escolhe papel*/ else {
      resultado.textContent = 'Você ganhou!';
    }
  } /*se maquina escolhe tesoura*/ else {
    if (escolha == opcoes[0]) {
      /*usuario escolhe papel*/ resultado.textContent =
        'Revolução das máquinas! O computador ganhou!';
    } /*usuario escolhe pedra*/ else {
      resultado.textContent = 'Você ganhou!';
    }
  }
}

btn.addEventListener('click', jogar);
