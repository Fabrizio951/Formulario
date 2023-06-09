window.onload = function() {
    NumeroAleatorio();

    var nombreInput = document.getElementById("nombre");
    var correoInput = document.getElementById("correo");

    nombreInput.addEventListener("input", validarCampos);
    correoInput.addEventListener("input", validarCampos);
};
  
function NumeroAleatorio() {
    var numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("numero").value = numeroAleatorio;
}

function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var enviarBtn = document.getElementById("enviarBtn");
  
    if (nombre !== "" && /^[A-Za-z]+$/.test(nombre) && correo !== "") {
      enviarBtn.disabled = false;
    } else {
      enviarBtn.disabled = true;
    }
}
