
document.getElementById("loginBtn").addEventListener("click", function() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    console.log("Usuario:", usuario);
    console.log("Clave:", clave);
});

document.getElementById("signupBtn").addEventListener("click", function() {
    document.location = "./signup.html"; // Cambia esto por la ruta real de tu formulario de registro
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.location = "./practica.html"; // Cambia esto por la ruta real de tu página principal
});
