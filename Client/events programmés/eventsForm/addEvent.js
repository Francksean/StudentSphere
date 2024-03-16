import { getUserStatus } from "../../infosProvider.js"


console.log("test test")

// on récupère le statut de l'utilisateur

// const userStatus = localStorage.getItem('status') --Djissou
const userStatus = getUserStatus();

//récuperer les éléments à affichage conditionnel --Djissou
document.addEventListener("DOMContentLoaded", function() {
  const eventDateElems = Array.from(document.querySelectorAll(".input_date"));
  console.log(eventDateElems);
  
  switch(userStatus){
    case 0 :
      eventDateElems.forEach((item) => {
        item.hidden = true;
      });
    break;
    case 1 :
      eventDateElems.forEach((item) => {
        item.hidden = false;
      });
    break;
    case 2 :
      eventDateElems.forEach((item) => {
        item.hidden = true;
      });
    break;
  }
});



function addEvent(e) {
  e.preventDefault()

  // récupérer les valeurs des champs
  var eventName = document.getElementById("event-name").value;
  var eventDescription = document.getElementById("event-description").value;
  var eventBeginDate = document.getElementById("event-begin-date").value;
  var eventEndDate = document.getElementById("event-end-date").value;
  var eventPoster = document.getElementById("event-poster").value;
  var eventCategory = document.getElementById("event-category").value;

  const eventData = {
    authorId : 2,
    eventName: eventName,
    eventDescription: eventDescription,
    poster : eventPoster,
    category : eventCategory
  };

  if(userStatus == 1){
    eventData["beginDate"] = eventBeginDate
    eventData["endDate"] = eventEndDate
  }

  // on contacte la route API pour ajouter un évènement
  const fetchData = async () => {
    console.log(eventData)
    try {
      const sendDatas = await fetch('http://localhost:3000/events/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : provider.getToken()
        },
        body: JSON.stringify(eventData)
      });
    
      const response = await sendDatas.json();
      console.log(response);
      alert(response.message);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'évènement :', error);
    }  
  };

  fetchData();

  // Réinitialiser les champs de saisie
  eventName = "";
  eventDescription = ""
  eventCategory = ""
  eventPoster = ""
  eventBeginDate  = ""
  eventEndDate = ""
  
  // Afficher un message de succès ou effectuer d'autres actions nécessaires

  // Mettre le focus sur le champ de saisie du nom de l'événement
  document.getElementById("event-name").focus();
}

// Ajouter un écouteur d'événement au bouton "Ajouter l'événement"
var addButton = document.getElementById("add-event-button");
addButton.addEventListener("click", addEvent);