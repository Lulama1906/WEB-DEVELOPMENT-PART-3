
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const datetimeSpan = document.getElementById("datetime");

  // Set current year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Update time every second
  if (datetimeSpan) {
    const updateDateTime = () => {
      const now = new Date();
      datetimeSpan.textContent = now.toLocaleString();
    };
    updateDateTime();
    setInterval(updateDateTime, 1000); // update every second
  }
});


// -----------------------------
// NAVIGATION ACTIVE LINK
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav__list a, #navMenu a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
