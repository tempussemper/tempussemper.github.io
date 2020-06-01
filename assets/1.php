<?php
         $to_mail = $_POST['e-mail'];
         $topicmessage = $_POST['topicmessage'];
         $content_message = $_POST['message'];
         
         
         $to = 'Terletskii@mail.ru';
         $subject = '' . $topicmessage . '';
         $message = '' .$content_message . '';
         
         mail($to, $subje<?php
         $to_mail = $_POST['e-mail'];
         $topicmessage = $_POST['topicmessage'];
         $content_message = $_POST['message'];
         
         
         $to = 'Terletskii@mail.ru';
         $subject = '' . $topicmessage . '';
         $message = '' .$content_message . '';
         
         mail($to, $subject, $message, 'From: Администрация сайта.ру');
         
         echo'<div class="ok">Письмо успешно отправлено на ваше мыло</div>';
         echo'<div class="addblock"><h4>Тема письма</h4>' . $topicmessage . '</div>';
         echo'<div class="addblock"><h4>Текст сообщения</h4>' . $content_message . '</div>';
         
?>ct, $message, 'From: Администрация сайта.ру');
         
         echo'<div class="ok">Письмо успешно отправлено на ваше мыло</div>';
         echo'<div class="addblock"><h4>Тема письма</h4>' . $topicmessage . '</div>';
         echo'<div class="addblock"><h4>Текст сообщения</h4>' . $content_message . '</div>';
         
?>