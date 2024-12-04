let psicologos = [];

function mostrarFormularioCadastro() {
  document.getElementById('formCadastro').style.display = 'block';
  document.getElementById('formPesquisa').style.display = 'none';
}

function mostrarFormularioPesquisa() {
  document.getElementById('formCadastro').style.display = 'none';
  document.getElementById('formPesquisa').style.display = 'block';
}

function esconderFormulario() {
  document.getElementById('formCadastro').style.display = 'none';
  document.getElementById('formPesquisa').style.display = 'none';
}

document.getElementById('formCadastrar').addEventListener('submit', function(event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value;
  let crp = document.getElementById('crp').value;

  // Verificar se o CRP já existe
  for (let i = 0; i < psicologos.length; i++) {
    if (psicologos[i][1] === crp) {
      alert("Esse CRP já está cadastrado.");
      return;
    }
  }

  let biografia = document.getElementById('biografia').value;
  let formacao = document.getElementById('formacao').value.split(',').map(item => item.trim());
  let especialidades = document.getElementById('especialidades').value.split(',').map(item => item.trim());

  // Adicionar psicólogo ao array
  psicologos.push([nome, crp, biografia, formacao, especialidades]);

  alert("Psicólogo cadastrado com sucesso!");
  esconderFormulario();
});

document.getElementById('formPesquisar').addEventListener('submit', function(event) {
  event.preventDefault();

  let pesquisaTipo = document.querySelector('input[name="pesquisaTipo"]:checked').value;
  let pesquisaValor = document.getElementById('pesquisaValor').value.trim();

  let resultado = null;

  if (pesquisaTipo === "1") {  // Pesquisa por nome
    for (let i = 0; i < psicologos.length; i++) {
      if (psicologos[i][0].toLowerCase() === pesquisaValor.toLowerCase()) {
        resultado = psicologos[i];
        break;
      }
    }
  } else if (pesquisaTipo === "2") {  // Pesquisa por CRP
    for (let i = 0; i < psicologos.length; i++) {
      if (psicologos[i][1] === pesquisaValor) {
        resultado = psicologos[i];
        break;
      }
    }
  }

  let resultadoPesquisa = document.getElementById('resultadoPesquisa');
  resultadoPesquisa.innerHTML = '';

  if (resultado) {
    resultadoPesquisa.innerHTML = `
      <h3>Resultado da Pesquisa:</h3>
      <p><strong>Nome:</strong> ${resultado[0]}</p>
      <p><strong>CRP:</strong> ${resultado[1]}</p>
      <p><strong>Biografia:</strong> ${resultado[2]}</p>
      <p><strong>Formações:</strong> ${resultado[3].join(', ')}</p>
      <p><strong>Especialidades:</strong> ${resultado[4].join(', ')}</p>
    `;
  } else {
    resultadoPesquisa.innerHTML = "<p>Psicólogo não encontrado.</p>";
  }
});
