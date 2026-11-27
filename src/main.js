
import './style.css';

const statusElement = document.querySelector('#api-status');

async function verificarAPI() {
  try {
    const resposta = await fetch('/api/health');

    if (!resposta.ok) {
      throw new Error('Erro ao consultar API');
    }

    const dados = await resposta.json();

    statusElement.textContent = `Status da API: ${dados.status}`;
    statusElement.style.color = 'green';

  } catch (erro) {
    statusElement.textContent = 'Status da API: indisponível';
    statusElement.style.color = 'red';
  }
}

verificarAPI();
