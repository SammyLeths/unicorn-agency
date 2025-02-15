
// JavaScript para activar la clase 'active' cuando se hace clic en el botón navbar-toggler
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function() {
    navbarToggler.classList.toggle("active");
  });
});


// Filter portfolio

const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let portfolioCards = document.querySelectorAll(".portfolio-card");
    portfolioCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    filters.forEach((btn) => btn.classList.remove("active"));
    filterBtn.classList.add("active");
  });
});


// Función para hacer que las imágenes se desplacen automáticamente en horizontal
function autoScrollImages() {
  let gallery = document.getElementById("gallery");
  let scrollAmount = 1; // Cantidad de píxeles a desplazar en cada iteración

  // Define la función de desplazamiento
  function scrollGallery() {
    gallery.scrollLeft += scrollAmount;
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
      // Cuando llega al final, reinicia al principio
      gallery.scrollLeft = 0;
    }
  }

  // Llama a la función de desplazamiento repetidamente
  setInterval(scrollGallery, 30); // Cambia 30 por el valor deseado para la velocidad de desplazamiento
}

// Llama a la función para comenzar el desplazamiento automático
autoScrollImages();
