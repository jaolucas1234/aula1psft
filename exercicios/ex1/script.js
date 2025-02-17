function reajustar() {
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');

    
    let desconto = 0;
    let precoComDesconto = 0;

    
    if (preco < 1212.01) {
        desconto = preco * 7.5 / 100; 
    } else if (preco < 2427.35) {
        desconto = preco * 9 / 100; 
    } else if (preco < 3641.03) {
        desconto = preco * 12 / 100; 
    } else if (preco < 7087.22) {
        desconto = preco * 14 / 100; 
    } else if (preco >= 7087.22) {
        desconto = 708.22 * 14 / 100; 
    }

    precoComDesconto = preco - desconto;

    resultado.innerHTML = `O preço com valor do INSS é: R$ ${precoComDesconto.toFixed(2)}`;
}
