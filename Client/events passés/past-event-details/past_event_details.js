import { getToken, getUserStatus } from "../../infosProvider.js"


const itemId = new URLSearchParams(window.location.search).get("itemId")
let eventElem;
try {
  const sendRequest = await fetch(`http://localhost:3000/events/event/${itemId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getToken()
    },
  })
  const response = await sendRequest.json();
  eventElem = response.results[0]
  console.log(eventElem);
} catch (error) {
  console.error('Erreur lors de la récupération de l\'évènement :', error);
} 

try {
  const sendRequest = await fetch(`http://localhost:3000/comments/event_comments/${itemId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getToken()
    },
  })
  const response = await sendRequest.json();
  eventElem = response.results[0]
  console.log(eventElem);
} catch (error) {
  console.error(error);
} 

const commentElementFactory = async ( item ) =>{
  const commentElement =
  `<div class="comment_item">
    <div class="comment_top">
      <p>name of commenter</p>
    </div>
    <div class="comment_content">
      <p>content</p>
      <p>dateposted</p>
    </div>
  </div>`
}

