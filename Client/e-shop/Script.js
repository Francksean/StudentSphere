//-------------------------Recuperer et Afficher les produits-------------------------------//
fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    // Parcourez les produits et créez un élément 'div' pour chaque produit
    products.forEach(product => {
      const box = document.createElement('div');
      box.classList.add('box');

      // Créez un élément 'div' pour l'image
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');

      // Créez un élément 'img' pour l'image et définissez l'attribut 'src' correspondant
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = '';
      imageDiv.appendChild(image);

      box.appendChild(imageDiv);

      // Créez un élément 'div' pour le contenu
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');

      // Créez un élément 'h3' pour le titre du produit
      const title = document.createElement('h3');
      title.textContent = product.title;
      contentDiv.appendChild(title);

      // Créez un élément 'h5' pour la description
      const description = document.createElement('h5');
      description.textContent = 'Description';
      contentDiv.appendChild(description);

      // Créez un élément 'div' pour le prix
      const price = document.createElement('div');
      price.classList.add('price');
      price.textContent = product.price;
      contentDiv.appendChild(price);

      box.appendChild(contentDiv);

      // Ajoutez la boîte au DOM, où vous souhaitez afficher les produits
      const container = document.getElementById('product-container');
      container.appendChild(box);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données de la base de données :', error);
  });