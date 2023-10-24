document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden!',
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(user => user.email === email);

        if (foundUser) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ya existe un usuario con ese correo!',
            });
            return;
        }

        const newUser = {
            email: email,
            password: password // NOTA: No es seguro almacenar contraseñas en el localStorage en aplicaciones reales.
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('currentUser', JSON.stringify(newUser));

        Swal.fire({
            title: 'Registrado!',
            text: 'Has sido registrado exitosamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir al usuario a index.html
                window.location.href = "/index.html";
            }
        });

    });
});