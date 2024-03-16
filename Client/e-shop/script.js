document.cookie = "nom_du_cookie=valeur_du_cookie; expires=date_d'expiration; path=/";

// Définition du cookie pour le total du panier
var total = 0; // Calculer le total du panier
document.cookie = "total_panier=" + total + "; expires=" + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString() + "; path=/";

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

var totalPanier = getCookie('total_panier');
document.getElementById("total").innerHTML = totalPanier + " FCFA";