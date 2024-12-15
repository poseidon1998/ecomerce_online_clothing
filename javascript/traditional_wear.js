const products = [
  { id: 1, name: "Men's Black Shirt", price: 4000, discount: 1999, image: "img/black_shirt.PNG" },
  { id: 2, name: "Men's Blue Shirt", price: 3500, discount: 1800, image: "img/green_shirt.PNG " },
  { id: 3, name: "Men's Blue Shirt", price: 1599, discount: 899, image: "img/blue_shirt.PNG" },
  { id: 4, name: "Men's Maroon Shirt", price: 1000, discount: 599, image: "img/rd_shirt.PNG" },
  { id: 5, name: "Men's Red Shirt", price: 2500, discount: 1599, image: "img/red_shirt.PNG" }
];

const recipientNumber = "919003581835";

const productList = document.getElementById("product-list");

products.forEach(product => {
  const productCard = `
    <div class="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch">
      <div class="card h-100 text-center">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            <span style="text-decoration: line-through; color: #E0E0E0;">&#8377;${product.price}</span>
            <span style="color: #FFD700;">&#8377;${product.discount}</span>
          </p>
          <a href="https://wa.me/${recipientNumber}?text=${encodeURIComponent(`Hello, I'm interested in ${product.name} priced at ₹${product.discount}.`)}"
             target="_blank" 
             class="btn">
            <i class="fa fa-whatsapp"></i> WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  `;
  productList.innerHTML += productCard;
});
