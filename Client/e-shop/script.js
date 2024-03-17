function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
//var total = 0; // Calculer le total du panier
//document.cookie = "total_panier=" + total + "; expires=" + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString() + "; path=/";

function getCookie(name) {
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].trim().split('=');
        if (cookiePair[0] === name) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

var total = 0;
setCookie('total_panier', total, 1);

var totalPanier = getCookie('total_panier');
document.getElementById("total").innerHTML = totalPanier + " FCFA";