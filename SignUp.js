document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.getElementById('password');
    const signupForm = document.getElementById('signup-form');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('active');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const regexNumero = /\d/;
            const regexMaiuscula = /[A-Z]/;
            const regexEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

            if (password.length < 8 || !regexNumero.test(password) || !regexMaiuscula.test(password) || !regexEspecial.test(password)) {
                alert("A senha deve conter pelo menos 8 caracteres, 1 número, 1 letra maiúscula e 1 caractere especial.");
                return false;
            }

            const formData = {
                username: document.getElementById('username').value,
                fullname: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('number').value,
                adress: document.getElementById('adress').value,
                password: document.getElementById('password').value,
                admin: document.getElementById('admin').value
            };

            const apiEndpoint = 'https://lwlc-proj-2024.onrender.com/api-docs/';

            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (data.success) {
                    alert('Registration successful!');
                    window.location.href = 'login.html'; //Redireciona para a página login
                } else {
                    alert(data.message || 'Registration failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during registration. Please try again.');
            }
        });
    }
});
