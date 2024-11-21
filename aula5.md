# Estruturas Condicionais

As estruturas condicionais em programação permitem executar diferentes blocos de código com base em condições específicas. Em JavaScript, as principais estruturas condicionais são:

### if, else if, else:
Permitem verificar uma ou mais condições.
```js
if (condicao) {
  // Código executado se a condição for verdadeira
} else if (outraCondicao) {
  // Código executado se a outraCondicao for verdadeira
} else {
  // Código executado se nenhuma condição for verdadeira
}
```

### switch case
Usado para comparar um valor com vários casos possíveis.
```js
switch (expressao) {
  case valor1:
    // Código executado se expressao === valor1
    break;
  case valor2:
    // Código executado se expressao === valor2
    break;
  default:
    // Código executado se nenhum caso for atendido
}
```

### Operador Ternário
Uma alternativa compacta ao ```if else``` para expressões simples.

```js
const resultado = condicao ? 'Verdadeiro' : 'Falso';
```
