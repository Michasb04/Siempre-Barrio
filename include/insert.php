<?php

$conection = mysqli_connect("localhost","root","","siemprebarrio");

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

mysqli_query($conection, "insert into users(name, email, number_phone) values ('$name', '$email','$phone')") or die("Problemas en el Insert".mysqli_error($conection));
echo"Registro ingresado correctamente";


mysqli_close($conection);
?>