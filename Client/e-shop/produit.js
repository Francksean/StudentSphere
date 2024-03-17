// Récupérer les données depuis la base de données
const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/shop/feed');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des produits');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des produits:', error);
      return [];
    }
  };
  
  // Afficher les produits dans la page HTML
  const displayProducts = async () => {
    try {
      const products = await fetchProducts();
      const productsContainer = document.getElementById('products-container');
  
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
  
        const imageElement = document.createElement('img');
        imageElement.src = product.poster;
        imageElement.alt = product.name;
  
        const nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = product.name;
  
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = product.description;
  
        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        priceElement.textContent = `Price: ${product.price}`;
  
        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(descriptionElement);
        productElement.appendChild(priceElement);
  
        productsContainer.appendChild(productElement);
      });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'affichage des produits:', error);
    }
  };
  
  // Appeler la fonction pour afficher les produits au chargement de la page
  displayProducts();
  