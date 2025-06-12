document.addEventListener('DOMContentLoaded', () => {
    // Pegando os elementos HTML que vamos manipular
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const heartClickContainer = document.getElementById('heart-click-container');
    const heartButton = document.getElementById('heart-button');
    const messageContainer = document.getElementById('message-container');

    // Define a senha correta
    const correctPassword = 'Amor'; // A senha que você vai usar para entrar

    // Adiciona um "ouvinte" para quando o formulário de login for enviado
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário (para a página não recarregar)

        // Verifica se a senha digitada está correta
        if (passwordInput.value === correctPassword) {
            loginContainer.classList.add('hidden'); // Esconde a tela de login
            heartClickContainer.classList.remove('hidden'); // Mostra a tela com o coração clicável
        } else {
            errorMessage.classList.remove('hidden'); // Mostra a mensagem de erro
            passwordInput.value = ''; // Limpa o campo da senha
            passwordInput.focus(); // Coloca o cursor de volta no campo da senha para facilitar
        }
    });

    // Adiciona um "ouvinte" para quando o botão do coração for clicado
    heartButton.addEventListener('click', () => {
        heartClickContainer.classList.add('hidden'); // Esconde a tela do coração
        messageContainer.classList.remove('hidden'); // Mostra a mensagem especial
    });
});