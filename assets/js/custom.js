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
