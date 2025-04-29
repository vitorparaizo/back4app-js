const APP_ID = 'Tt6MdVmxrzFbGaZghaamPyARNAekoCRRyPtyNX5v';
const API_KEY = 'C15PqeztDAugVqSm1dOCSm8Lp4ZYfJh3lppbKObM';

fetch('https://parseapi.back4app.com/classes/alunos/', {
    headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
    }
})
.then(response => response.json())
.then(data => {
    const lista = document.getElementById('lista-dados');
    data.results.forEach(item => {
    const li = document.createElement('li');
    console.log("li criada");
    li.textContent = JSON.stringify(item);
    lista.appendChild(li);
    });
})
.catch(error => console.error('Erro na requisição:', error));

// função pra criar uma nova li
document.getElementById('dadosForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;

    // Cria um objeto com os dados capturados
    const dados = {
        nome: nome,
        idade: idade,
        curso: curso
    };

    // Função para adicionar novos dados ao Back4App
    function adicionarDados(dados) {
        fetch('https://parseapi.back4app.com/parse/classes/alunos', {
            method: 'POST',  // Método POST para adicionar dados
            headers: {
                'X-Parse-Application-Id': APP_ID, // ID da aplicação
                'X-Parse-REST-API-Key': API_KEY,  // Chave da API
                'Content-Type': 'application/json'  // Tipo de conteúdo JSON
            },
            body: JSON.stringify(dados)  // Corpo da requisição com os dados em formato JSON
        })
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            console.log('Success:', data);  // Log de sucesso
            alert('Dados adicionados com sucesso!');  // Alerta de sucesso
        })
        .catch((error) => {
            console.error('Error:', error);  // Log de erro
            alert('Erro ao adicionar dados.');  // Alerta de erro
        });
    }

    // Chama a função para adicionar os dados
    adicionarDados(dados);
});