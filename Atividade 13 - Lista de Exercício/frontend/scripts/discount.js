const form = document.getElementById('desconto-form');
const salarioInput = document.getElementById('salario');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const salario = parseFloat(salarioInput.value);
    let desconto;
    let mensagem;

    if (salario <= 1000) {
        desconto = salario * 0.08;
        mensagem = `Salário: R$ ${salario.toFixed(2)}<br>Taxa de desconto: 8%<br>Valor do desconto: R$ ${desconto.toFixed(2)}`;
    } else if (salario > 1000 && salario <= 1500) {
        desconto = salario * 0.085;
        mensagem = `Salário: R$ ${salario.toFixed(2)}<br>Taxa de desconto: 8,5%<br>Valor do desconto: R$ ${desconto.toFixed(2)}`;
    } else {
        desconto = salario * 0.09;
        mensagem = `Salário: R$ ${salario.toFixed(2)}<br>Taxa de desconto: 9%<br>Valor do desconto: R$ ${desconto.toFixed(2)}`;
    }

    resultado.innerHTML = mensagem;
});