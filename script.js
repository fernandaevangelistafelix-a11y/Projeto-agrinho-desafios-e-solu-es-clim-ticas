// Dados sobre desafios e soluções climáticas
const desafios = [
    "Aquecimento global",
    "Desmatamento",
    "Poluição dos oceanos",
    "Secas prolongadas",
    "Emissões de gases de efeito estufa"
];

const solucoes = [
    "Uso de energias renováveis",
    "Reflorestamento",
    "Reciclagem e reutilização",
    "Transporte sustentável",
    "Economia de água e energia"
];

let mostrandoDesafios = true;

// Função para exibir informações
function exibirInformacoes() {
    const lista = document.getElementById("lista");
    const titulo = document.getElementById("titulo");

    lista.innerHTML = "";

    if (mostrandoDesafios) {
        titulo.textContent = "Desafios Climáticos";
        desafios.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
    } else {
        titulo.textContent = "Soluções Climáticas";
        solucoes.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
    }
}

// Alterna entre desafios e soluções
function alternarConteudo() {
    mostrandoDesafios = !mostrandoDesafios;
    exibirInformacoes();
}

// Carrega o conteúdo inicial
window.onload = exibirInformacoes;