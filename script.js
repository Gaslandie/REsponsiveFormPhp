const form = document.querySelector('form');//notre formulaire
statusTxt = form.querySelector(".button-area span"); 

form.onsubmit = (e) =>{
    e.preventDefault();//pour eviter le comportement par defaut au click sur notre bouton
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";//en cours d'envoie

    //code ajax pour communication entre front end et back end
    let xhr = new XMLHttpRequest();
    xhr.open("POST","message.php",true);//envoie requete post à message.php
    xhr.onload = () =>{
        //si le status de la reponse est 200 et ready status est 4, cela veut dire qu'il ya pas d'erreur
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            if(response.indexOf("Email et commentaire sont obligatoires") != -1 || response.indexOf("Entrer un email valide") != -1 || response.indexOf("Désolé,votre message n'a pas pu être envoyé!") != -1 ){
                statusTxt.style.color = "red";
            }else{
                form.reset();//on reinitialise notre formulaire si tout est ok
                setTimeout(() =>{
                    statusTxt.style.display = "none";//si tout est ok faire disparaitre le message après 3 secondes
                },3000)
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);//obj formaData pour envoyer les données
    xhr.send(formData);
}