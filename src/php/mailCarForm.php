<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['modal_username'];
$phone = $_POST['modal_phone'];
$start = $_POST['modal_date-start'];
$end = $_POST['modal_date-end'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->setFrom('matweev.ilja@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('matweev.ilja@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Бронь';
$mail->Body    = '' . $name . ' оставил заявку на бронирование!' . "<br>" . "Номер телефона:" . $phone . '<br>' . 'Количество дней:' . $dNumber . '<br>' . 'Начало аренды' . $start . '<br>' . 'Окончание аренды' . $end;
$mail->AltBody = '';

if (!$mail->send()) {
  return false;
} else {
  return true;
}
