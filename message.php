<?php 
//on va recuperer nos données
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$website = $_POST["website"];
$message = $_POST["message"];

if(!empty($email) && !empty($message)){
    if(filter_var($email,FILTER_VALIDATE_EMAIL)){//verifier la validé de l'email
        $receiver = "gassaza60@gmail.com";//email receveur
        $subject = "From: $name <$email>";//info name et email de l'utilisateur
        $body = "Nom: $name\n Email:$email\n Telephone:$phone\n SiteWeb:$website\n Message:$message\n";
        $sender = "From: $email";//email de l'envoyeur
        if(mail($receiver,$subject,$body,$sender)){//mail() est une fonction php pour envoyer un mail
            echo "Votre message a été envoyé";
        }else{
            echo "Désolé,votre message n'a pas pu être envoyé!";
        }
    }else{
        echo "Entrer un email valide";
    }
}else{
    echo "Email et commentaire sont obligatoires";
}

?>