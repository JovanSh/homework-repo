console.log("I am alive");

/*
Fetch the product data from "https://fakestoreapi.com/products" and log it to the console
Once you have all the data and can read it in console generate cards in the html that contain the data about the products
Every card should contain the id, title, price, description and image
The styling of the card is up to the student, what is mandatory is that all the above properties are displayed in the html
Example of product info
{
  "id": 10,
  "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  "price": 109,
  "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published   specifications and internal benchmarking tests using PCMark vantage scores) Boosts   burst write performance, making it ideal for typical PC workloads The perfect   balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s   (Based on internal testing; Performance may vary depending upon drive capacity,   host device, OS and application.)",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  "rating": {
  "rate": 2.9,
  "count": 470
  }
}
*/

const productCardEl = document.querySelector(".card-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function renderProductsList(productContainer, productData) {
  let productsHTML = "";
  for (let productCard of productData) {
    console.log(productCard);
    productsHTML += `
        <div>
        <p>${productCard.id}<p>
        <div>`;
  }
  productContainer.innerHTML = productsHTML;
}

function fetchProducts() {
  fetch(PRODUCTS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderProductsList(productCardEl, data.results);
    });
}

fetchProducts();
