import { getToken, getUserId, getUserStatus } from "../../../infosProvider.js"

const comment_wrapper = document.getElementById('comments_wrapper')
const itemId = new URLSearchParams(window.location.search).get("itemId")
let eventElem;

const submitCommentButton = document.getElementById("submit_comment_button")
const commentElem = document.getElementById("comment_input")

submitCommentButton.addEventListener('click', async () => {
  const requestBody = {
    content: commentElem.value,
    authorId: getUserId(),
    eventId : itemId
  }
  try {
    const sendRequest = await fetch(`http://localhost:3000/events/addComment`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getToken()
      },
      body: JSON.stringify(requestBody)
    })
    const response = await sendRequest.json();
    alert(response.message)
    console.log(response.results)
    // location.reload()
  } catch (error) {
    console.error(error);
  } 
})

const deleteComment = async (commentId) => {
  try {
    const sendRequest = await fetch(`http://localhost:3000/events/deleteComment/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getToken()
      },
    })
    const response = await sendRequest.json();
    alert(response.message)
    console.log(response.results)
  } catch (error) {
    console.error(error);
  } 
}


const commentElementFactory = async ( item, userBrief ) =>{
  let commentElement;
  if(getUserStatus() == 1){
    commentElement =
    `<div class="comment_item">
      <div class="comment_top">
        <p>${userBrief.firstname} ${userBrief.secondname}</p>
      </div>
      <div class="comment_content">
        <div class="content_box">
          <p>${item.content}</p>
          <p>${item.likes} likes</p>
        </div>
        <p>commenté le ${item.datePosted.split('T')[0]}</p>
      </div>
      <button class="delete-comment-button" data-comment-id="${item.id}">Supprimer</button>
    </div>`;

  }else{
    commentElement =
    `<div class="comment_item">
      <div class="comment_top">
        <p>${userBrief.firstname} ${userBrief.secondname}</p>
      </div>
      <div class="comment_content">
        <div class="content_box">
          <p>${item.content}</p>
          <p>${item.likes} likes</p>
        </div>
        <p>commenté le ${item.datePosted.split('T')[0]}</p>
      </div>
    </div>`
  }

  comment_wrapper.innerHTML = comment_wrapper.innerHTML + commentElement
}

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-comment-button')) {
    const commentId = event.target.dataset.commentId;
    deleteComment(commentId);
  }
});

const fetchCommenterBrief = async (item)=>{
  try {
    const sendRequest = await fetch(`http://localhost:3000/users/userBrief/${item.authorId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getToken()
      },
    })
    const response = await sendRequest.json();
    const userbrief = response.results[0]
    commentElementFactory(item, userbrief)
  } catch (error) {
    console.error(error);
  } 
}


const infosFiller = ( item ) => {
  document.getElementById('event_name').innerText = item.name
  document.getElementById('event_description').innerText = item.description
  document.getElementById('nbrOfLikes').innerText = item.likes
  document.getElementById('beginDate').innerText= item.beginDate.split('T')[0]
  document.getElementById('endDate').innerText= item.endDate.split('T')[0]
}

try {
  const sendRequest = await fetch(`http://localhost:3000/events/showEvent/${itemId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getToken()
    },
  })
  const response = await sendRequest.json();
  console.log(response)
  eventElem = response.results[0]
  infosFiller(eventElem)
} catch (error) {
  console.error(error);
} 


try {
  const sendRequest = await fetch("http://localhost:3000/events/showComments/" + itemId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : getToken()
    },
  })
  const response = await sendRequest.json();
  const commentsArr = response.results[0].reverse()
  commentsArr.map((item)=>{
    fetchCommenterBrief(item)
  })

} catch (error) {
  console.error(error);
} 















