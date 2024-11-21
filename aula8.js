// Para fazer uso do prompt dentro do vscode:
const prompt = require("prompt-sync")();


// Funcao que calcula a media de duas notas
function media_tupla(nota1, nota2) {
  return ((nota1 + nota2)/2)
}

let primeira_nota = parseInt(prompt("Qual foi a primeira nota do aluno? "))
let segunda_nota = parseInt(prompt("Qual foi a segunda nota do aluno? "))

console.log("A média do aluno é:", media_tupla(primeira_nota, segunda_nota));


// Funcao que ordena dois numeros:
function ordenar(a, b){
  if (a <= b) {
    return [a, b];
  }
  else {
    return [b, a];
  }
}

let primeiro_num = parseInt(prompt("Insira o primeiro número: "))
let segundo_num = parseInt(prompt("Insira o segundo número: "))

console.log("A ordem correta entre os números é:", ordenar(primeiro_num, segundo_num));


// Funcao que calcula a media de um array de notas
// (primeira versao: não interativa)
function media_array (array) {
  media = ((array[0] + array[1] + array[2] + array[3] + array[4]) / 5);
  return media
}

let array_notas = [7, 9, 10, 8, 6]

console.log("A média do aluno é:", media_array(array_notas))


// Funcao que calcula a media de um array de notas
// (segunda versao: interativa)

function media_interativa(array) {
    const soma = array.reduce((somatorio, nota) => somatorio + nota, 0); // Soma todos os elementos do array
    return soma / array.length; // Divide o resultado da soma pela quantidade de elementos do array
  }
  
  // Solicita as notas ao usuário
  let entrada = prompt("Informe as notas separadas por vírgula:");
  let notas = entrada.split(",").map(Number); // Converte a entrada em um array de números
  
  // Calcula e exibe a média
  console.log("A média das notas é:", media_interativa(notas));
  