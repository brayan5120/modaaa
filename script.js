
// ======================================
// URBAN STYLE - EMAIL MARKETING
// ======================================

// INICIALIZAR EMAILJS
(function () {
    emailjs.init({
        publicKey: "zP2jsWPtT8_yVpO5X"
    });
})();

// ELEMENTOS DEL FORMULARIO
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

// ENVIAR SUSCRIPCION
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const correo = document.getElementById("email").value.trim();

    // VALIDAR CORREO
    if (!correo) {
        mensaje.textContent = "Por favor, escribe tu correo electronico.";
        mensaje.style.color = "#ff5555";
        return;
    }

    boton.disabled = true;
    boton.textContent = "ENVIANDO...";

    mensaje.textContent = "Estamos registrando tu suscripcion...";
    mensaje.style.color = "#f2eee7";

    // DATOS PARA EMAILJS
    const parametros = {
        email: correo
    };

    // ENVIAR CORREO
    emailjs.send(
        "service_gyne8v5",
        "template_lby2bef",
        parametros
    )

    .then(function (respuesta) {

        console.log("Correo enviado correctamente:", respuesta);

        mensaje.textContent =
            "¡Bienvenido a URBAN STYLE! Revisa tu correo.";

        mensaje.style.color = "#4ade80";

        formulario.reset();

    })

    .catch(function (error) {

        console.error("ERROR COMPLETO:", error);
        console.error("ESTADO:", error.status);
        console.error("DETALLE:", error.text);

        mensaje.textContent =
            "No se pudo enviar el correo. Revisa la configuracion de EmailJS.";

        mensaje.style.color = "#ff5555";

    })

    .finally(function () {

        boton.disabled = false;
        boton.textContent = "UNIRME A URBAN STYLE →";

    });

});
