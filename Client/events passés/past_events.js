import { getToken } from "../infosProvider.js"

    //l'élément HTML racine
    const root = document.getElementById('past_event_container')

    console.log(root)

    const eventComponentTemplate = ( item ) => {
      let nbrOfComments;

      const requestBody = {
        table : "event_comments",
        relativeIdName : "eventId",
        relativeId : item.id
      }
      const fetchComments = async () => {
        try {
          const sendRequest = await fetch('http://localhost:3000/comments/show_comments', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization' : getToken()
            },
            body: JSON.stringify(requestBody)
          });
        
          const response = await sendDatas.json();
          console.log(response);
          alert(response.message);
          nbrOfComments = response.results[0].lenght
        } catch (error) {
          console.error('Erreur lors de l\'ajout de l\'évènement :', error);
        }  
      };

      const eventComponent =
      `<div class="past_event_item">
        <div class="event_image">
          <img src='${item.poster}' alt="Évènement 1">
        </div>
        <div class="event-details">
          <h2 class="event_name">${item.name}</h2>
          <p class="event_description"> </p>
          <p class="event_date">Date : ${item.beginDate.split("T")[0]} - ${item.endDate.split("T")[0]}</p>
          <p>Description : ${item.description}</p>

          <div class="comment_like_container">
            <button class="comment_button">
              <img src="chat.png" alt="Icône de commentaire" class="comment-icon">
              ${item.nbrOfComments} commentaires
            </button>
            <button class="like_button">
              <img src="like.png" alt="Icône J'aime" class="like-icon">
              ${item.likes} likes
            </button>
          </div>
          <button> voir plus </button>
        </div>
      </div>`

      return eventComponent 
      
    }


    const fetchPastEvents = async () => {
      let eventFeed = []
      try {
        console.log("fetching...")
        const sendRequest = await fetch('http://localhost:3000/events/all_past_events', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : getToken()
          },
        });
      
        const response = await sendRequest.json();
        console.log(response);
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