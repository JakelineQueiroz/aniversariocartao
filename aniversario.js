function abrirCartao() {
  document.querySelector('.cartao').classList.toggle('aberto');
}

// Gerar balões animados
function criarBaloes() {
  const baloesContainer = document.getElementById('baloes');
  for (let i = 0; i < 20; i++) {
    const balao = document.createElement('div');
    balao.classList.add('balao');
    balao.style.left = `${Math.random() * 100}%`;
    balao.style.animationDuration = `${4 + Math.random() * 3}s`;
    balao.style.backgroundColor = gerarCorAleatoria();
    baloesContainer.appendChild(balao);
  }
}

function gerarCorAleatoria() {
  const cores = ['#ff8da3', '#ffb347', '#faff70', '#a0e7e5', '#b388eb'];
  return cores[Math.floor(Math.random() * cores.length)];
}

window.onload = criarBaloes;
