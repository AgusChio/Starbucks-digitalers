document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;
        const fullname = document.getElementById('fullname').value;
        const datebirth = document.getElementById('datebirth').value;
        const provincia = document.getElementById('provincia').value;
        const observations = document.getElementById('observations').value;

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
            fullname: fullname,
            datebirth: datebirth,
            provincia: provincia,
            observations: observations
        };

        users.push({
            ...newUser,
            password: password
        });

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser)); 

        Swal.fire({
            title: 'Registrado!',
            text: 'Has sido registrado exitosamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/index.html";
            }
        });
    });
});
