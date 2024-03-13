// Récupérer les données depuis la base de données
const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/shop/feed');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des produits:', error);
      return [];
    }
  };
  
  // Afficher les produits dans la page HTML
  const displayProducts = async () => {
    const products = await fetchProducts();
  
    document.getElementById('root').innerHTML = products.map((item) => {
      const { poster, name, price } = item;
      return `
        <div class='box'>
          <div class='img-box'>
            <img class='images' src=${poster}></img>
          </div>
          <div class='bottom'>
            <p>${name}</p>
            <h2>Mad ${price}</h2>
            <button onclick='addtocart(${item.id})'>Add to cart</button>
          </div>
        </div>
      `;
    }).join('');
  };
  
  // Appeler la fonction pour afficher les produits au chargement de la page
  displayProducts();