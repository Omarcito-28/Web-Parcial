/*Menu de inicio*/

function cambiarTexto() {
    document.getElementById("textoDinamico").innerText = "Nuevo contenido del texto";
    document.getElementById("textoDinamico2").innerText = "Nuevo contenido del texto";
    document.getElementById("textoDinamico3").innerText = "Nuevo contenido del texto";
}

function cambiarColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "black" : "white";
    document.body.style.color = document.body.style.color === "black" ? "white" : "black";
}




/*Menu de log in*/

document.getElementById("loginBtn").addEventListener("click", function() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    console.log("Usuario:", usuario);
    console.log("Clave:", clave);
});

document.getElementById("signupBtn").addEventListener("click", function() {
    document.location = "./paginas/form-de-reg.html"; // Cambia esto por la ruta real de tu formulario de registro
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.location = "index.html"; // Cambia esto por la ruta real de tu página principal
});



/*Formulario de registro*/

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let estrato = document.getElementById("estrato").value;
    let grupoSanguineo = document.getElementById("grupoSanguineo").value;
    
    // Expresiones Regulares
    let nombreRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoRegex = /^[0-9]{7,10}$/;

    // Validaciones
    if (!nombreRegex.test(nombre)) {
        alert("⚠️ Nombre inválido. Solo letras y espacios.");
        return;
    }

    if (!nombreRegex.test(apellido)) {
        alert("⚠️ Apellido inválido. Solo letras y espacios.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("⚠️ Email inválido. Ingresa un correo válido.");
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        alert("⚠️ Teléfono inválido. Solo números, mínimo 7 y máximo 10 dígitos.");
        return;
    }

    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let genero = generoSeleccionado ? generoSeleccionado.value : "No seleccionado";

    let actividadesSeleccionadas = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        actividadesSeleccionadas.push(checkbox.value);
    });

    // Mostrar datos en Alert
    alert(`✅ Registro Exitoso:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Email: ${email}
    Teléfono: ${telefono}
    Estrato: ${estrato}
    Fecha Nacimiento: ${fechaNacimiento}
    Grupo Sanguíneo: ${grupoSanguineo}
    Género: ${genero}
    Actividades Favoritas: ${actividadesSeleccionadas.join(", ") || "Ninguna"}`);

});

// Redireccionar el botón "Cancelar"
document.getElementById("cancelarBtn").addEventListener("click", function() {
    window.location.href = "./practica.html"; 
});
