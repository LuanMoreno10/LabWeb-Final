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
            };

            var userData = {
                username: formData.username,
                fullname: formData.fullname,
                email: formData.email,
                phone: formData.phone,
                adress: formData.adress,
                password: formData.password,
                admin: true
                }


            try {
                const response = await fetch('https://lwlc-proj-2024.onrender.com/users', {
                    method: 'POST', // or 'GET', 'PUT', etc.
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData) // convert your data to JSON string
                });
            
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            
                const data = await response.json(); // or response.text(), etc.
                console.log(Data);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});
