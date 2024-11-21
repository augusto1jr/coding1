# Funções

Em JavaScript, funções são blocos de código reutilizáveis que realizam uma tarefa ou cálculo. Elas podem receber entradas (parâmetros), processá-las e retornar uma saída (valor). Existem vários tipos de funções:

### Declaração de função: ```function nome() { }```

### Expressão de função: ```const nome = function() { }```

### Arrow functions: ```const nome = () => { }```

### Funções anônimas: Sem nome, usadas em callbacks ou imediatamente.

<br>

Exemplo de função em JavaScript:
```js
// Funcao que calcula a media de um array de notas
function media_interativa(array) {
    const soma = array.reduce((somatorio, nota) => somatorio + nota, 0); // Soma todos os elementos do array
    return soma / array.length; // Divide o resultado da soma pela quantidade de elementos do array
  }
  
  // Solicita as notas ao usuário
  let entrada = prompt("Informe as notas separadas por vírgula:");
  let notas = entrada.split(",").map(Number); // Converte a entrada em um array de números
  
  // Calcula e exibe a média
  console.log("A média das notas é:", media_interativa(notas));
```