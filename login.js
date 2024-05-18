document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.getElementById('password');

    //Visiblidade da password
    togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('active');
    });

    //Formulário submissão
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault(); //Impede o envio do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //Validar formulário
        if (username === '' || password === '') {
            alert('Preencha todos os campos!');
            return;
    }
    
    //API endpoint
    const apiEndpoint = 'https://lwlc-proj-2024.onrender.com/api-docs/';

    try {
        const response = await fetch(apiEndpoint, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username, password})
        
    });

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const data = await response.json();

        //Responde com sucesso
        if (data.success) {
        //guarda o token
        localStorage.setItem('token', data.token);
        //Rediriciona para outra página
        window.location.href = 'EuroCarMasters.html';
        } else {
            //Erros da API
            alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocorreu um erro ao fazer o login. Tente outra vez.');
        }
    });
});
