import { getToken, getUserStatus } from "../infosProvider.js"

  //l'élément HTML racine
  const root = document.getElementById('past_event_container')

  let eventComponent;

  const eventComponentTemplate = ( item ) => {

    let nbrOfComments;

    const requestBody = {
      table : "event_comments",
      relativeIdName : "eventId",
      relativeId : item.id
    }
    const fetchNbrOfComments = async () => {
      try {
        const sendRequest = await fetch(`http://localhost:3000/events/showComments/${item.id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : getToken()
          },
        });
      
        const response = await sendRequest.json();
        item["nbrOfComments"] = response.results[0].length
      } catch (error) {
        console.error('Erreur lors de la recherche des commentaire :', error);
      }  
      return nbrOfComments
    };

    fetchNbrOfComments()

    eventComponent =
    `<a href=${"./past-event-details/past_event_details.html?itemId=" + item.id} class="past_event_item_link"><div class="past_event_item">
      <div class="event_image">
        <img src='${item.poster}' alt="Évènement">
      </div>
      <div class="event_details">
        <h2 class="event_name">${item.name}</h2>
        <p class="event_description"> </p>
        <p class="event_date">Du ${item.beginDate.split("T")[0]} - ${item.endDate.split("T")[0]}</p>
        <p>Description : ${item.description}</p>

        <div class="comment_like_container">
          <p class="comment_button">
            <img src="chat.png" alt="Icon" class="comment_icon">
            ${item.nbrOfComments} commentaires
          </p>
          <p class="like_button">
            <img src="like.png" alt="Icon" class="like_icon">
            ${item.likes} likes
          </p>
        </div>
        <div class="comments-section" style="display: none;">
          <textarea class="comment-input" placeholder="Commentaire"></textarea>
          <h3>Commentaires</h3>
          <ul class="comments-list"></ul>
        </div>
      </div>
    </div></a>`

    return eventComponent 
    
  }

  

const fetchPastEvents = async () => {
  let eventFeed = []
  try {
    const sendRequest = await fetch('http://localhost:3000/events/all_past_events', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getToken()
      }
    });
  
    const response = await sendRequest.json();
    eventFeed = response.results[0]
    console.log(eventFeed)
    
    eventFeed.map((item) => {
      let eventCreated = eventComponentTemplate(item);
      root.innerHTML = root.innerHTML + eventCreated 
    })
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'évènement :', error);
  }  
};

fetchPastEvents()

// const commentButtons = document.querySelectorAll('.comment_button');


// commentButtons.forEach((button) => {
//     button.addEventListener('click', afficherCommentaires);
// });

// // Fonction pour afficher la section des commentaires
// function afficherCommentaires() {
//     const sectionCommentaires = this.parentNode.nextElementSibling;
//     sectionCommentaires.style.display = 'block';
// }

// const postCommentButtons = document.querySelectorAll('.post_comment_button');

// postCommentButtons.forEach(button => {
//   button.addEventListener('click', posterCommentaire);
// });

// function posterCommentaire() {
//   const commentaireInput = this.parentNode.previousElementSibling.previousElementSibling;
//   const commentaire = commentaireInput.value;

//   if (commentaire !== '') {
//     const listeDeCommentaires = this.parentNode.nextElementSibling.querySelector('.comments_list');
//     const nouvelElementCommentaire = document.createElement('li');
//     nouvelElementCommentaire.textContent = commentaire;
//     listeDeCommentaires.appendChild(nouvelElementCommentaire);
//     commentaireInput.value = '';
//   }
// }