// -----------------------------
// FOOTER YEAR + LIVE TIME
// -----------------------------
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
    setInterval(updateDateTime, 1000);
  }
});

// -----------------------------
// CONTACT FORM VALIDATION + FEEDBACK
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const status = contactForm.querySelector("[role='status']");

    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let valid = true;

      // Validate required fields
      [name, email, message].forEach(field => {
        if (!field.value.trim()) {
          field.style.border = "2px solid red";
          valid = false;
        } else {
          field.style.border = "";
        }
      });

      if (!valid) {
        status.textContent = "⚠️ Please complete all required fields.";
        status.className = "error";
        return;
      }

      // Simulate successful send
      status.textContent = "✅ Thank you! Your message has been sent.";
      status.className = "success";
      contactForm.reset();
    });
  }
});
