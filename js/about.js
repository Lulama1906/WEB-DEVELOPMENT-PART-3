// -----------------------------
// FOOTER YEAR + LIVE TIME
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const datetimeSpan = document.getElementById("datetime");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

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
  const navLinks = document.querySelectorAll("#navMenu a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// -----------------------------
// TEAM CARD INTERACTIVITY
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach(card => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h3").textContent}!`);
    });
  });
});
