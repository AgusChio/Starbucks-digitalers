let usersFirtsCharge = [
    {
        id: '680244b7-59b4-47f5-9885-479cd9f298fc',
        name: 'Administrator',
        email: 'admin@admin.com',
        password: 'admin',
        role: 'Administrator',
        creationDate: '2023-12-10',
        provincia:"Buenos Aires",
        fechaDeNacimiento:"12-12-2012",
    },
    {
        id: 'd6f73559-cfad-410b-871c-f547bb9094c5',
        name: 'Agustina Chiodini',
        email: 'aguschio@gmail.com',
        password: 'agus123',
        role: 'User',
        creationDate: '2023-12-10',
        provincia:"Salta",
        fechaDeNacimiento:"14-09-2000",
    }
];

const users = JSON.parse(localStorage.getItem("users")) || usersFirtsCharge;

if (JSON.parse(localStorage.getItem("users")) === null) {
    localStorage.setItem("users", JSON.stringify(usersFirtsCharge));
}

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const emailInput = event.target.elements.email.value;
    const passwordInput = event.target.elements.password.value;
    console.log(emailInput)
    console.log(passwordInput)

    const userExist = users.find(usr => usr.email === emailInput);

    if (!userExist || userExist.password !== passwordInput) {
        Swal.fire("Login incorrect", "The entered data is incorrect", "error");
        return;
    }

    Swal.fire("Login Successful", "You will be redirected shortly", "success");

    setTimeout(function () {
        if (userExist.role === "Administrator") {
            window.location.href = '/pages/admin/admin-products.html';
        } else {
            window.location.href = '/index.html';
        }
    }, 1500);
});

function logout() {
    localStorage.removeItem("currentUser");
    setTimeout(function () {
        window.location.href = "/index.html";
    }, 1500);
}
