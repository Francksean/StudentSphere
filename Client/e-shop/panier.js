const product = [
    
    {
        id: 1,
        poster: './Images/tomate.jpg',
        name: 'Tomate',
        price: '100',
    },
    {
        id: 2,
        poster: './Images/beurre250.jpg',
        name: 'Jadida',
        price: '950',
    },
    {
        id: 3,
        poster: './Images/pomme.jpg',
        name: 'Pack Pomme',
        price: '2000',
    },
    {
        id: 4,
        poster: './Images/chocolat.jpg',
        name: 'Tartina',
        price: '2500',
    },
    {
        id: 5,
        poster: './Images/cappuccino.jpg',
        name: 'Cappuccino',
        price: '3000',
    },
    {
        id: 6,
        poster: './Images/javel.jpg',
        name: 'Eau de Javel',
        price: '1000',
    },
    {
        id: 7,
        poster: './Images/charge-iphone.jpg',
        name: 'Fast Charger Iphone',
        price: '10000',
    },
    {
        id: 8,
        poster: './Images/sucre.jpg',
        name: 'Sucre en poudre',
        price: '1000',
    },
    {
        id: 9,
        poster: './Images/charge-typeC.jpg',
        name: 'Fast Charger Type-C',
        price: '5000',
    },
    {
        id: 10,
        poster: './Images/matinal.jpg',
        name: 'Matinal',
        price: '2500',
    },
    {
        id: 11,
        poster: './Images/oeufs.jpg',
        name: 'Alveole d\'oeufs',
        price: '3000',
    },
   
];


const categories = [...new Set(product.map((item) => { return item }))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { poster, name, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${poster}></img>
            </div>
            <div class='bottom'>
                <p>${name}</p>
                <h2> ${price} FCFA</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Veuillez remplir le panier";
        document.getElementById("total").innerHTML = ""+0+ " FCFA";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { poster, name, price } = items;
            
            total =+price+total;
            document.getElementById("total").innerHTML = ""+total+ " FCFA";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${poster}>
                    </div>
                    <p style='font-size:12px;'>${name}</p>
                    <h2 style='font-size: 15px;'> ${price} FCFA</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"     
            );
        }).join('');
    }
}

document.getElementById("total").value = sessionStorage.getItem('TOTAL');