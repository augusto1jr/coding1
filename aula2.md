# Variáveis

var: declaração de variável que pode ser redeclarada e reatribuída.

let: declaração de variável que pode ser apenas reatribuída, mas não redeclarada.

const: declaração de variável que não pode ser reatribuída ou redeclarada.


# Tipos Primitivos

Os tipos primitivos são os tipos de dados fundamentais que não são objetos e que não têm métodos. Eles são imutáveis, ou seja, uma vez criados, seu valor não pode ser alterado (embora a variável que os contém possa ser reatribuída). Existem sete tipos primitivos em JavaScript:

### String:
É um tipo de dado usado para representar sequências de caracteres. Essas sequências podem incluir letras, números, símbolos e espaços, e são normalmente usadas para armazenar e manipular textos. Também é possível concatenar as strings.

### Number:
Usado para representar números, sejam inteiros ou de ponto flutuante. Em JavaScript, não há distinção entre números inteiros e decimais (ambos são do tipo Number).

### Big Int: 
Introduzido no ES2020, o tipo BigInt é usado para representar números inteiros de qualquer tamanho, ultrapassando o limite dos números do tipo Number.

### Boolean:
Possui apenas dois valores possíveis: true ou false. É usado para representar lógica booleana.

### Undefined:
Uma variável tem o valor undefined quando ela é declarada, mas não foi inicializada. Também é o valor de retorno padrão de funções que não especificam um retorno.

### Null:
Representa a ausência proposital de qualquer valor. Diferente de undefined, null é atribuído explicitamente pelo programador para indicar que uma variável não tem valor.

### Symbol:
Introduzido no ES6, o Symbol é um tipo de dado que cria identificadores únicos e imutáveis. Geralmente usado como identificadores únicos para propriedades de objetos.


# Operadores:

### Matemáticos:
```
+\:  mais

\: menos

*\: multiplicação

/\: divisão

%\: módulo (resto da divisão)

**\: potenciação
```

### Lógicos:
&& significa E

|| significa OU


### Comparação: 
==\: igual (converte tipos diferentes, como string e number)

===\: igual (não converte tipos, portanto, é mais recomendado)

>: maior que

<\: menor que

>=: maior ou igual a

<=\: menor ou igual a

!=\: diferente

!==\: diferente

(diferentes seguem a mesma lógica dos doubles e triple equals)
