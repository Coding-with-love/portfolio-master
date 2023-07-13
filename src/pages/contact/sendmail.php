<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $role = $_POST['role'];
        $org = $_POST['org'];
        $done = $_POST['done'];
        $more = $_POST['more'];
        $price = $_POST['price'];
        $launch = $_POST['launch'];
        $inquiryType = $_POST['inquiryType'];

        $from = 'From: '.$email;
        $to = 'LoveConnor2005@gmail.com';

        if ($inquiryType === 'Business') {
            $subject = 'New Business Inquiry from '.$name;
            $body = "From: $name\n E-Mail: $email\n Role: $role\n Organization: $org\n Needs: $done\n More info: $more\n Price Range: $price\n Launch date: $launch\n Message:\n $message";
        } else {
            $subject = 'New Personal Inquiry from '.$name;
            $body = "From: $name\n E-Mail: $email\n Message:\n $message";
        }

        if (!empty($name) && !empty($email) && !empty($message)) {
            if (mail ($to, $subject, $body, $from)) {
                echo 'Email Sent Successfully';
            } else {
                echo 'There was an error sending the email.';
            }
        } else {
            echo 'All fields are required.';
        }
    }
?>
