<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>payement</title>
    <style>
        *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
}
body{
  background: #89260d;
  padding: 0 10px;
  filter: drop-shadow(10px 10px 10px);
}
.wrapper{
  max-width: 500px;
  width: 100%;
  background: beige;
  margin: 20px auto;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.125);
  padding: 30px;
}

.wrapper .title{
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #89260d;
  text-transform: uppercase;
  text-align: center;
  -webkit-text-stroke: 0.1vw #000000 ;
  letter-spacing:5px;
}

.wrapper .form{
  width: 100%;
}

.wrapper .form .inputfield{
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.wrapper .form .inputfield label{
   width: 200px;
   color: #757575;
   margin-right: 10px;
  font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea{
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wrapper .form .inputfield .textarea{
  width: 100%;
  height: 125px;
  resize: none;
}

.wrapper .form .inputfield .custom_select{
  position: relative;
  width: 100%;
  height: 37px;
  
}

.wrapper .form .inputfield .custom_select:before{
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #d5dbd9 transparent transparent transparent;
  pointer-events: none;
}

.wrapper .form .inputfield .custom_select select{
  -webkit-appearance: none;
  -moz-appearance:   none;
  appearance:        none;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
}


.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus{
  border: 1px solid #89260d;
}

.wrapper .form .inputfield p{
   font-size: 14px;
   color: #757575;
}
.wrapper .form .inputfield .check{
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper .form .inputfield .check input[type="checkbox"]{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.wrapper .form .inputfield .check .checkmark{
  width: 15px;
  height: 15px;
  border: 1px solid #89260d;
  display: block;
  position: relative;
}
.wrapper .form .inputfield .check .checkmark:before{
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
  display: none;
}
.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark{
  background: #89260d;
}

.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark:before{
  display: block;
}

.wrapper .form .inputfield .btn{
  width: 100%;
   padding: 8px 10px;
  font-size: 15px; 
  border: 0px;
  background:  #89260d;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .inputfield .btn:hover{
  background: gray;
}

.wrapper .form .inputfield:last-child{
  margin-bottom: 0;
}

@media (max-width:420px) {
  .wrapper .form .inputfield{
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper .form .inputfield label{
    margin-bottom: 5px;
  }
  .wrapper .form .inputfield.terms{
    flex-direction: row;
  }
}
    </style>
</head>
<body>
    
</body>
</html>

<div class="wrapper">
    <div class="title">
      Payment file
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input">
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input">
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input">
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input">
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
          <input type="email" class="input">
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input">
       </div> 
      <div class="inputfield">
          <label>Delivery Address</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="inputfield">
          <label>Montant</label>
          <input type="number" class="input">
       </div> 
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <button class="btn"> Valider</button>
       
        <script> 
         var btn = document.querySelector("button");
         
         btn.onclick =() => window.print();
  /*btn.onclick = function() {
    // Envoyer la notification à notif.php
    var notification = "Votre commande a bien été reçue. Nous vous contacterons ultérieurement pour votre livraison";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "notification.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("notification=" + encodeURIComponent(notification));

    // Afficher la notification dans la console (optionnel)
    console.log("Notification envoyée : " + notification);
  };*/
        </script>
      </div>
    </div>
</div>	