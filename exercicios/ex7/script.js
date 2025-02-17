function calcularReajuste() {
    const salarioAtual = Number(document.getElementById('sal').value);
    const resultado = document.getElementById('resultado');
    let novoSalario;
    let porcentagem;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        porcentagem = 15;
        novoSalario = salarioAtual + (salarioAtual * 15 / 100);
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        porcentagem = 12;
        novoSalario = salarioAtual + (salarioAtual * 12 / 100);
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        porcentagem = 9;
        novoSalario = salarioAtual + (salarioAtual * 9 / 100);
    } else {
        porcentagem = 6;
        novoSalario = salarioAtual + (salarioAtual * 6 / 100);
    }

    resultado.innerText = `Reajuste aplicado: ${porcentagem}%. Novo salário: R$ ${novoSalario.toFixed(2)}`;
}
