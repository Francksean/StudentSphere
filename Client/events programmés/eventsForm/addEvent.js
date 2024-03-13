console.log("test test")

// on récupère le statut de l'utilisateur

// const userStatus = localStorage.getItem('status') --Djissou
const userStatus = 1;
const eventDateElems = []

//récuperer les éléments à affichage conditionnel --Djissou
document.addEventListener("DOMContentLoaded", function() {
  const eventDateElems = Array.from(document.querySelectorAll(".input_date"));
  console.log(eventDateElems);
  
  const userStatus = 1;

  switch(userStatus){
    case 0 :
      eventDateElems.forEach((item) => {
        item.hidden = false;
      });
    break;
    case 1 :true
      eventDateElems.forEach((item) => {
        item.hidden = false;
      });
    break;
    case 2 :
      eventDateElems.forEach((item) => {
        item.hidden = false;
      });
    break;
  }
});



function addEvent(e) {
  e.preventDefault()

  // console.log('ok ok')
  // récupérer les valeurs des champs

  let eventName = document.getElementById("event-name").value;
  let eventDescription = document.getElementById("event-description").value;
  let eventPoster = document.getElementById("event-poster").value;
  let eventBeginDate = document.getElementById("event-begin-date").value;
  let eventEndDate = document.getElementById("event-end-date").value;
  let eventCategory = document.getElementById("event-category").value;

  const eventData = {
    // authorId : localStorage.getItem('userId'),
    authorId : 2,
    eventName: "name factice",
    eventDescription: "descriprtion de test de la fonctionnalité depuis le front",
    // poster : eventPoster,
    poster : "image1.jpg",
    category : "activités"
  };

  if(userStatus == 1){
    eventData["beginDate"] = '2024-02-12'
    eventData["endDate"] = '2024-02-15'
  }
  // on contacte la route API pour ajouter un évènement
  (async () => {
    // console.log('ok ok')
    const sendDatas = await fetch('https://student-sphere-server.vercel.app/events/all_past_events', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiaWF0IjoxNzEwMjkzOTk3LCJleHAiOjE3MTAzODAzOTd9.irT-F-xT2d7sASGDqldjvVeqibVOsgxsCgn41sB5CDY"
      },
      // body: JSON.stringify(eventData)
    });
    const response = await sendDatas.json();
    
    console.log(response);
  })();

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