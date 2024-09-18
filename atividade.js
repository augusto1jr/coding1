// ############# Nome, idade e cidade #########################
const nome = 'Augusto' //Meu nome não vai mudar, então faz mais sentido usar const
let idade = 24 //Minha idade infelizmente vai aumentar, então faz mais sentido usar let
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)

let cidade = 'Paulista' //Posso me mudar de cidade, então faz mais sentido usar let
console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}.`)


// ############# Operações Matemáticas #########################
// Soma
var num1 = 3
var num2 = 4
let soma = num1 + num2
console.log(`O resultado da soma de ${num1} e ${num2} é: ${soma}`)

// Subtração
let subtracao = num1 - num2
console.log(`O resultado da subtração de ${num1} e ${num2} é: ${subtracao}`)

// Multiplicação
let multiplicacao = num1 * num2
console.log(`O resultado da multiplicacao de ${num1} e ${num2} é: ${multiplicacao}`)

// Divisao
let divisao = num1 / num2
console.log(`O resultado da divisão de ${num1} e ${num2} é: ${divisao}`)

// Modulo
let modulo = num1 % num2
console.log(`O resto da divisão de ${num1} e ${num2} é: ${modulo}`)

// Potenciação
let potenciacao = num1 ** num2
console.log(`${num1} elevado à ${num2} é: ${potenciacao}`)

// ############# Cálculo da Área do Triângulo #########################
let base_triangulo = 3
let altura_triangulo = 4
let area_triangulo = (base_triangulo*altura_triangulo)/2
console.log(`A área do triângulo é: ${area_triangulo}`)

// ############# Cálculo da Média das Notas de um Aluno #################
let nota1 = 10
let nota2 = 6
let nota3= 9
let media_aluno = (nota1+nota2+nota3)/3
console.log(`A média do aluno é: ${media_aluno}`)

// ############# Cálculo do Desconto de um Produto #################
let valor_produto = 50
let valor_desconto = 10
let valor_final = valor_produto - (valor_produto*valor_desconto)/100
console.log(`O valor do produto com desconto é: ${valor_final}`)

// ############# Cálculo do Imposto de Renda #################
let salario = 3000

if (salario < 2259.20) {
    let salario_final = salario
    console.log(`Seu salário com os impostos deduzidos é: ${salario_final}`);
} 
else if (salario > 2259.21 && salario < 2826.65) {
    let salario_final = salario - (valor_produto*7.5)/100
    console.log(`Seu salário com os impostos deduzidos é: ${salario_final}`);
} 
else if (salario > 2826.66 && salario < 3751.05) {
    let salario_final = salario - (valor_produto*15)/100
    console.log(`Seu salário com os impostos deduzidos é: ${salario_final}`);
} 
else if (salario > 3751.06 && salario < 4664.68) {
    let salario_final = salario - (valor_produto*22.5)/100
    console.log(`Seu salário com os impostos deduzidos é: ${salario_final}`);
} 
else {
    let salario_final = salario - (valor_produto*27.5)/100
    console.log(`Seu salário com os impostos deduzidos é: ${salario_final}`);
}

// ############# Conversor de Moedas #################
let valor_reais = 100
let cotacao_dolar = 5.57
let valor_dolares = valor_reais/cotacao_dolar
console.log(`${valor_reais} R$ são equivalentes à: ${valor_dolares} US$`)

// ############# Conversor de Temperaturas #################
let temperatura_celsius = 28
let temperatura_fahrenheit = (temperatura_celsius*9/5) + 32
console.log(`${temperatura_celsius} graus celsius são equivalentes à: ${temperatura_fahrenheit} graus fahrenheit`);

// ############# Calculadora de IMC #################
let peso = 83
let altura = 1.73
let imc = (peso / (altura**2)).toFixed(2)

console.log(`Seu IMC é: ${imc}`)
