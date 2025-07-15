<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);


if (mail("tyoma.lis58@mail.ru", 
	"Новое письмо", 
	"Имя: ".login."\n."
	"Ваша почта: ".email."\n."
	"Сообщение: ".message,
	"From: tyoma.lis58@mail.ru \r\n")
) {
	echo ('Письмо успешно отправлено!');
}

else {
echo ('Письмо успешно отправлено!');
}

 ?>