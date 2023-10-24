const user = JSON.parse(localStorage.getItem("user"));
if(!user || user.rol !== "Administrator"){
    window.location.href = "/index.html";
}