const horarioAberto = 9; // 9:00 AM
const horarioFechado = 14; // 14:00 AM

// Verificar status exibido
function verificarStatusEstabelecimento() {
    const agora = new Date();
    const horaAtual = agora.getHours();

    const status = document.getElementById("statusEstabelecimento");


    if (horaAtual > horarioAberto && horaAtual < horarioFechado) {
        status.textContent = "Aberto";
        status.style.color = "green";
    } else {
        status.textContent = "Fechado";
        status.style.color = "red";
    }
}

verificarStatusEstabelecimento();

setInterval(verificarStatusEstabelecimento, 60000);