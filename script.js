const form = document.querySelector('form');//notre formulaire
statusTxt = form.querySelector(".button-area span"); 

form.onsubmit = (e) =>{
    e.preventDefault();//pour eviter le comportement par defaut au click sur notre bouton
    statusTxt.style.display = "block";//en cours d'envoie

    //code ajax pour communication entre front end et back end
    let xhr = new XMLHttpRequest();
    xhr.open("POST","message.php",true);//envoie requete post à message.php
    xhr.onload = () =>{
        //si le status de la reponse est 200 et ready status est 4, cela veut dire qu'il ya pas d'erreur
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
        }
    }
}