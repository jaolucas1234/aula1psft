function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 1000) {
        desconto = preco * 8 / 100;
        let precoComDesconto = Number(preco - desconto);
        resultado.innerHTML = `Desconto de R$ ${desconto.toFixed(2)}, preço final ${precoComDesconto.toFixed(2)}`
    }

}