function reajustar(){
    let sal = Number(document.getElementById('sal').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');


    filhos = filhos * 45;


    let salariofinal = Number(document.getElementById('salariofinal'));
    salariofinal = filhos + sal;
    resultado.innerHTML = `Salário Familha: ${filhos.toFixed(2)} <br> Salário Final: R$${salariofinal.toFixed(2)}`;
    


}