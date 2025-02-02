<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['submit'])) {
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);

    $to = "mainlotto82@gmail.com";
    $subject = "New Form Submission from $name";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "You have received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    if (wp_mail($to, $subject, $body, $headers)) {
        echo '<p style="color: green;">Thank you, your message has been sent successfully!</p>';
    } else {
        echo '<p style="color: red;">Sorry, there was an issue sending your message. Please try again later.</p>';
    }
}
?>