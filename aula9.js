// Define um objeto chamado 'estudante' com propriedades nome, idade e matrícula
const estudante = {
    nome: 'Augusto',
    idade: 24,
    matricula: '123456',
  }
  
  // Exibe no console o objeto completo 'estudante'
  console.log(estudante);
  
  // Exibe no console o valor da propriedade 'nome' do objeto 'estudante'
  console.log(estudante.nome);
  
  // Exibe no console uma frase utilizando as propriedades 'nome' e 'idade' do objeto 'estudante'
  console.log(`Meu nome é ${estudante.nome} e eu tenho ${estudante.idade} anos.`);
  
  // Exibe os 3 primeiros caracteres da propriedade 'matricula'
  console.log(estudante.matricula.substring(0, 3));
  
  // Itera sobre as propriedades do objeto 'estudante' e exibe os valores de cada uma
  for (const key in estudante) {
    console.log(estudante[key]);
  }
  
  // Altera o valor da propriedade 'matricula' do objeto 'estudante'
  estudante.matricula = '012345';
  
  // Adiciona uma nova propriedade 'fones' com uma lista de telefones
  estudante.fones = ['1234-5678', '9876-5432'];
  
  // Adiciona uma nova propriedade 'curso' e atualiza a lista de telefones em 'fones'
  estudante.curso = 'ads';
  estudante.fones = ['1234-5678', '9876-5432', '0000-0000'];
  
  // Remove a propriedade 'fones' do objeto 'estudante'
  delete estudante.fones;
  
  // Exibe no console o objeto 'estudante' atualizado
  console.log(estudante);
  
  // Define uma função para adicionar uma nova propriedade ao objeto 'estudante'
  function adicionar() {
    const chave = prompt("Informe a chave: ");
    const valor = prompt("Informe o valor: ");
    estudante[chave] = valor;
    return `Você inseriu os dados com sucesso! Os dados atualizados são: ${estudante[chave]}`;
  }
  
  // Define uma função para remover uma propriedade do objeto 'estudante'
  function remover() {
    const chave = prompt("Informe a chave que deseja remover: ");
    delete estudante[chave];
    return `A chave "${chave}" foi removida com sucesso!`;
  }
  
  // Exibe uma mensagem de boas-vindas ao usuário
  alert("Boas Vindas!");
  
  // Solicita ao usuário uma escolha para adicionar ou remover uma propriedade
  const escolha = prompt("Digite 1, para adicionar. Digite 2, para remover.");
  
  // Verifica a escolha do usuário
  if (escolha === "1") {
    console.log(adicionar());
  } 
  
  else if (escolha === "2") {
    console.log(remover());
  } 
  
  else {
    console.log("Opção inválida");
  }
  
  console.log(estudante);
  