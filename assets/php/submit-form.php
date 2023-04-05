<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'hello@sage-interiors.co.uk';
	$subject = 'New message from Sage Interiors contact form';
	$body = "Name: $name\nEmail: $email\nMessage:\n$message";

	if (mail($to, $subject, $body)) {
		echo 'Thank you for contacting us. We will get back to you as soon as possible.';
	} else {
		echo 'There was a problem sending your message. Please try again later.';
	}
}
?>
