# Métodos de Arrays em JavaScript

### Fill
O método fill() em JavaScript é utilizado para preencher todos os elementos de um array com um valor estático, a partir de um índice inicial até um índice final (opcional). Ele altera o array original, substituindo seus elementos pelos valores passados como argumento.

```js
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

### Flat

O método flat() em JavaScript é usado para "achatar" um array, ou seja, ele cria um novo array concatenando os sub-arrays encontrados em níveis mais profundos. Ele remove a aninhamento de arrays, reduzindo-os a um único nível, dependendo da profundidade especificada.

```js
let arr = [1, 2, [3, 4]];
let resultado = arr.flat();  // [1, 2, 3, 4]

let arr = [1, 2, [3, 4, [5, 6]]];
let resultado = arr.flat(2);  // [1, 2, 3, 4, 5, 6]

let arr = [1, [2, [3, [4, 5]]]];
let resultado = arr.flat(Infinity);  // [1, 2, 3, 4, 5]
```

### Map

O método map() em JavaScript é utilizado para criar um novo array, preenchido com os resultados da aplicação de uma função em cada elemento do array original. É uma forma poderosa de transformar ou modificar os itens de um array sem alterar o array original.

```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

### Some

A função some() em JavaScript é usada para verificar se pelo menos um elemento de um array satisfaz uma condição especificada em uma função de callback. Se encontrar um elemento que atenda à condição, ela retorna true; caso contrário, retorna false. É uma maneira de testar se um array contém algum valor que atenda a um critério específico.

```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

### Every

A função every() em JavaScript é usada para verificar se todos os elementos de um array satisfazem uma condição fornecida. Ela retorna true se a condição for verdadeira para todos os elementos, e false caso contrário. Assim como outros métodos de iteração, como some(), ela percorre o array, mas interrompe a execução se encontrar um elemento que não satisfaça a condição.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```
