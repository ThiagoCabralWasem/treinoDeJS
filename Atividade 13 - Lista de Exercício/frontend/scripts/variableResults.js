// Definindo as variáveis
var variavel1 = 10;
var variavel2 = 5;

// Calculando e exibindo os resultados
var diferenca = variavel1 - variavel2;
var resultado1 = variavel1 * 2 + variavel2 * 3;
var multiplicacao = variavel1 * variavel2;

document.getElementById("resultado").innerHTML = 
    "<p>1 - A diferença entre as duas variáveis é: " + diferenca + "</p>" +
    "<p>2 - O dobro da primeira variável mais o triplo da segunda é: " + resultado1 + "</p>" +
    "<p>3 - A multiplicação das duas variáveis é: " + multiplicacao + "</p>";

// Mostrando os valores das variáveis do maior para o menor
var maior = Math.max(variavel1, variavel2);
var menor = Math.min(variavel1, variavel2);

document.getElementById("resultado").innerHTML += 
    "<p>O valor das variáveis do maior para o menor é: " + maior + ", " + menor + "</p>";
