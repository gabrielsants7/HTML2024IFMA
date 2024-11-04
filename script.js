let saldo = 5000;

function atualizarSaldo() {
    document.getElementById('saldo').innerText = `Saldo atual: R$ ${saldo.toFixed(2)}`;
}

function sacar() {
    const valorSaque = parseFloat(document.getElementById('valorSaque').value);
    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Por favor, insira um valor válido para saque.");
    } else if (valorSaque > saldo) {
        alert("Saldo insuficiente para essa operação.");
    } else {
        saldo -= valorSaque;
        alert(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`);
        atualizarSaldo();
    }
    document.getElementById('valorSaque').value = '';
}

function depositar() {
    const valorDeposito = parseFloat(document.getElementById('valorDeposito').value);
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        alert("Por favor, insira um valor válido para depósito.");
    } else {
        saldo += valorDeposito;
        alert(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`);
        atualizarSaldo();
    }
    document.getElementById('valorDeposito').value = '';
}

atualizarSaldo();
