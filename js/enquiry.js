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
// ENQUIRY FORM VALIDATION + PROCESSING
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    const status = enquiryForm.querySelector("[role='status']");

    enquiryForm.addEventListener("submit", e => {
      e.preventDefault();

      const requiredFields = ["firstName", "lastName", "email", "type", "message"];
      let valid = true;

      requiredFields.forEach(id => {
        const field = document.getElementById(id);
        if (!field || !field.value.trim()) {
          field.style.border = "2px solid red";
          valid = false;
        } else {
          field.style.border = "";
        }
      });

      if (!valid) {
        status.textContent = "⚠️ Please fill in all required fields.";
        status.className = "error";
        return;
      }

      status.textContent = "✅ Thank you! Your enquiry has been sent.";
      status.className = "success";
      enquiryForm.reset();
    });
  }
});
