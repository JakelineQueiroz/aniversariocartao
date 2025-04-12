function abrirCartao() {
const cartao = document.querySelector('.cartao');
cartao.classList.toggle('virado');
}

function criarBalao() {
const baloes = document.getElementById('baloes');
const balao = document.createElement('div');
balao.classList.add('balao');

// Posição e cor aleatórias
balao.style.left = Math.random() * 100 + '%';
balao.style.backgroundColor = getCorAleatoria();

// Tempo aleatório para animação
balao.style.animationDuration = (5 + Math.random() * 3) + 's';

baloes.appendChild(balao);

// Remover o balão após animação
setTimeout(() => {
  balao.remove();
}, 8000);
}

function getCorAleatoria() {
const cores = ['#ff99cc', '#ffccff', '#ffc0cb', '#ffb6c1', '#f08080'];
return cores[Math.floor(Math.random() * cores.length)];
}

// Criar balões continuamente
setInterval(criarBalao, 600);