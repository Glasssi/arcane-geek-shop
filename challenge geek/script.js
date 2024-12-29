document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products-container');
  const productForm = document.getElementById('product-form');

  // Renderizar productos iniciales
  const renderProducts = (products) => {
    productsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar productos
    products.forEach(({ name, price, image }) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p>$${price.toLocaleString()} CLP</p>
      `;
      productsContainer.appendChild(productCard);
    });
  };

  // Productos iniciales
  const products = [
    { name: 'Peluche Chibi Isha Arcane', price: 24000, image: 'images/peluche.png' },
    { name: 'Peluche Poro League Of Legend', price: 8000, image: 'images/peluchePoro.png' },
    { name: 'LLavero de Pistola League Of Legend Jinx', price: 3000, image: 'images/pistola.png' },
    { name: 'Polerón Diseño Arcane Jinx', price: 15000, image: 'images/poleron.png' },
    { name: 'Taza Diseño Mascafuegos', price: 14000, image: 'images/taza.png' },
    { name: 'Figura Jinx Arcane League of Legend', price: 350000, image: 'images/figura.png' },
  ];

  // Renderizar los productos iniciales al cargar la página
  renderProducts(products);

  // Agregar producto nuevo
  productForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir recarga de la página
    const name = document.getElementById('name').value;
    const price = parseInt(document.getElementById('price').value, 10);
    const image = document.getElementById('image').value;

    // Validar que los campos no estén vacíos
    if (name && price && image) {
      products.push({ name, price, image });
      renderProducts(products); // Renderizar la lista actualizada
      productForm.reset(); // Limpiar el formulario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
});
