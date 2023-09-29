<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Configura el destinatario del correo electrónico
    $destinatario = "sergiosevarayos@gmail.com"; 

    // Asunto del correo
    $asunto = "Mensaje de contacto de $nombre";

    // Construye el cuerpo del mensaje
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $cuerpo)) {
        // Redirige de vuelta a la página de contacto con un mensaje de éxito
        header("Location: contacto.html?mensaje=enviado");
    } else {
        // Si el correo no se envía, redirige con un mensaje de error
        header("Location: contacto.html?mensaje=error");
    }
} else {
    // Si se intenta acceder directamente al archivo PHP, redirige a la página de contacto
    header("Location: contacto.html");
}
?>
