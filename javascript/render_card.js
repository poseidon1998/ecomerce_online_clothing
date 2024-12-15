// Array of card details
const cardData = [
  {
    imgSrc: "img/mencard71.jpg",
    title: "Men's Traditional Wear",
    description: "Style is a reflection of your attitude.",
    link: "Clothify4Men.html", // Opens the specific link
  },
  {
    imgSrc: "img/WomenFashion13.jpg",
    title: "Clothing for Women",
    description: "Style is a way to say who you are.",
    link: "#comingSoon", // Triggers "Coming Soon" modal
  },
  {
    imgSrc: "img/mencard1.jpg",
    title: "Designer Brands",
    description: "If you love something, wear it all the time.",
    link: "#comingSoon", // Triggers "Coming Soon" modal
  },
];

// Function to generate cards dynamically
function generateCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Clear existing content

  cardData.forEach((card) => {
    const cardHTML = `
      <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
        <div class="card shadow">
          <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
            <h5 class="card-heading">${card.title}</h5>
            <p class="card-text">${card.description}</p>
            <a href="${card.link}" class="btn mt-2 shop-now-btn" data-link="${card.link}">Shop Now</a>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Attach click event listeners to Shop Now buttons
  document.querySelectorAll(".shop-now-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const link = btn.getAttribute("data-link");

      if (link === "#comingSoon") {
        // Show the "Coming Soon" modal
        $("#comingSoonModal").modal("show");
      } else {
        // Redirect to the provided link
        window.location.href = link;
      }
    });
  });
}

// Generate cards when the page loads
generateCards();
