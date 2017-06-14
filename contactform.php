<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = nl2br($_POST['message']);
  $to = "martin.njau@live.com";
  $from = $email;
  $subject = 'Jamkara Contact Form Msg';
  $comments = <p> '.$message.' </p>;
  $headers = "From: $from\n";
  $headers .= "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8856-1\n";
  if( mail($to, $subject, $comments, $headers) ){
    echo "success";
  } else {
    echo "Server failed to send the message, Please try again later!"
  }
}
 ?>
