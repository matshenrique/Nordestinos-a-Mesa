let notaSelecionada = 0;

// Função para avaliar a receita
function avaliarReceita() {
	document.getElementById("modalAvaliacao").style.display = "flex";
}

function fecharModal() {
	document.getElementById("modalAvaliacao").style.display = "none";
}

function selecionarEstrela(nota) {
	notaSelecionada = nota;
	const estrelas = document
		.getElementById("estrelasModal")
		.querySelectorAll("span");
	estrelas.forEach((estrela, index) => {
		estrela.textContent = index < nota ? "⭐" : "☆";
	});
}

function confirmarAvaliacao() {
	if (notaSelecionada < 1 || notaSelecionada > 5) {
		alert("Selecione uma estrela!");
		return;
	}

	sessionStorage.setItem("avaliacaoReceita", notaSelecionada);
	atualizarEstrelas(notaSelecionada);
	fecharModal();
}

// Atualiza visualmente as estrelas
function atualizarEstrelas(nota) {
	const p = document.querySelector(".receita-avaliacao");
	p.textContent = "⭐".repeat(nota) + "☆".repeat(5 - nota);
}

// Função para imprimir a receita
function imprimirReceita() {
	window.print();
}

// Carrega avaliação anterior, se houver
const notaAnterior = sessionStorage.getItem("avaliacaoReceita");
if (notaAnterior) {
	atualizarEstrelas(parseInt(notaAnterior));
}

document.addEventListener("DOMContentLoaded", () => {
	const primeiraDivHeader = document.querySelector("header > div:first-child");

	if (primeiraDivHeader) {
		primeiraDivHeader.style.cursor = "pointer";

		primeiraDivHeader.addEventListener("click", () => {
			window.location.href = "/";
		});
	}
});
