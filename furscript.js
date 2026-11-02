
document.addEventListener("DOMContentLoaded", () => {
  // PET FILTERS
  const filterButtons = document.querySelectorAll(".filter-btn");
  const petCards = document.querySelectorAll(".pet-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((item) => {
        const isActive = item === button;

        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      petCards.forEach((card) => {
        const matchesFilter =
          selectedFilter === "all" ||
          card.dataset.type === selectedFilter;

        card.hidden = !matchesFilter;
      });
    });
  });

  // AUTOMATIC COPYRIGHT YEAR
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // DEMO CONTACT FORM
  const contactForm = document.getElementById("contactForm");
  const formNotice = document.getElementById("formNotice");

  if (contactForm && formNotice) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      formNotice.textContent =
        "This is a front-end demo. Your message has not been sent. " +
        "Connect a backend or form service to receive messages.";

      formNotice.setAttribute("role", "status");
    });
  }
});
