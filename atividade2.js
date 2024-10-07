// Exercício de Fixação I - Atendimento na Área de Saúde

let cor_pulseira = prompt("Digite Vermelho para emergências, Amarelo para risco moderado, e Verde para situações controladas")


// Segunda versão usando switch + case
switch (cor_pulseira){
    case "Vermelho":
    console.log("Você está na fila de alta prioridade");
      break;
    case "Amarelo":
    console.log("Você está na fila de média prioridade");
      break;
    case "Verde":
    console.log("Você está na fila de baixa prioridade");
      break;
    default:
    console.log("Entrada inválida");
}

//Primeira versão usando if + else
/*if (cor_pulseira === "Vermelho" || cor_pulseira === "vermelho"){
  console.log("Você está na fila de alta prioridade")
}
else if (cor_pulseira === "Amarelo" || cor_pulseira === "amarelo"){
  console.log("Você está na fila de média prioridade")
}
else if (cor_pulseira === "Verde" || cor_pulseira === "verde"){
  console.log("Você está na fila de baixa prioridade")
}
else {
  console.log("Entrada inválida")
}*/

// Exercício de Fixação II - Algoritmo de Pesquisa

let tema_pesquisa = prompt("Sobre qual tema deseja pesquisar? Filmes, Séries, Jogos ou Músicas?")

if (tema_pesquisa === "Filmes" || tema_pesquisa === "filmes"){
  console.log("The Godfather é um clássico do cinema dirigido por Francis Ford Coppola, baseado no romance de Mario Puzo. O filme, lançado em 1972, narra a história da poderosa família mafiosa Corleone, liderada por Vito Corleone (interpretado por Marlon Brando). A trama acompanha a transformação de Michael Corleone (Al Pacino), de um jovem relutante em se envolver nos negócios da família, até se tornar o implacável chefe da máfia. O filme é conhecido por suas atuações memoráveis, roteiro envolvente e direção magistral, sendo considerado um dos maiores filmes de todos os tempos.")
}
else if (tema_pesquisa === "Séries" || tema_pesquisa === "séries"){
  console.log("Vikings é uma série de drama histórico criada por Michael Hirst. A trama segue a vida de Ragnar Lothbrok (interpretado por Travis Fimmel), um dos mais famosos heróis nórdicos lendários. Ragnar começa como um simples fazendeiro, mas sua ambição e habilidade como guerreiro o levam a se tornar um rei escandinavo. A série explora suas conquistas, suas batalhas e sua família, incluindo sua esposa Lagertha e seus filhos Bjorn e Ivar.")
}
else if (tema_pesquisa === "Jogos" || tema_pesquisa === "jogos"){
  console.log("Red Dead Redemption 2 é um jogo de ação-aventura desenvolvido pela Rockstar Games. Lançado em 2018, o jogo é uma prequela de Red Dead Redemption e se passa em 1899, no final da era do Velho Oeste americano. A história segue Arthur Morgan, um membro da gangue Van der Linde, enquanto ele lida com o declínio da gangue e a perseguição de agentes federais, caçadores de recompensas e gangues rivais.")
}
else if (tema_pesquisa === "Músicas" || tema_pesquisa === "músicas"){
  console.log("Sobrevivendo no Inferno é um álbum icônico do grupo de rap brasileiro Racionais MC's, lançado em 1997. Este álbum é conhecido por suas letras poderosas que abordam temas como racismo, desigualdade social, violência policial e a vida nas periferias urbanas do Brasil. Com faixas marcantes como Diário de um Detento e Capítulo 4, Versículo 3, o álbum utiliza referências bíblicas e relatos reais para pintar um retrato cru e honesto das dificuldades enfrentadas pelos jovens negros nas favelas.")
}
else {
  console.log("Entrada inválida")
}
