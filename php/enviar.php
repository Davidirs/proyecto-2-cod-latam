<?php 
	$nombre = $_POST['full_name'];
	$email = $_POST['email'];
	$phone = $_POST['phone_number'];
	$coments = $_POST['coments'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Teléfono: $phone<br> Mensaje: $coments";


	if(mail('reyisacc@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>