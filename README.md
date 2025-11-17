✅ README.md
# The Muffin & Scone Co. Website

## 📖 Overview
This project is a responsive, multi‑page website for **The Muffin & Scone Co.**, a bakery specializing in muffins, scones, cakes, and coffee. It was built to demonstrate full‑stack web development skills, focusing on clean architecture, modular JavaScript, and user‑friendly design.

Each page has its own dedicated HTML, CSS, and JavaScript file to ensure modularity, maintainability, and clarity.



## 🗂️ Project Structure
project-root/ │ ├── index.html ├── about.html ├── products.html ├── enquiry.html ├── contact.html │ ├── css/ │ ├── style.css # Global styles for index │ ├── about.css # About page styles │ ├── products.css # Products page styles │ ├── enquiry.css # Enquiry page styles │ └── contact.css # Contact page styles │ ├── js/ │ ├── index.js # Index page scripts │ ├── about.js # About page scripts │ ├── products.js # Products page scripts (cart logic) │ ├── enquiry.js # Enquiry page scripts (form validation) │ └── contact.js # Contact page scripts (form validation) │ └── images/ # All site images

---

## ✨ Features

### Global
- **Dynamic Footer:** Displays current year and live time, updating every second.
- **Navigation:** Highlights the active page link.
- **Responsive Design:** Layouts adapt seamlessly to mobile, tablet, and desktop.

### Index Page
- Hero section with call‑to‑action.
- Features section highlighting bakery values.
- Product preview grid.

### About Page
- Story section describing bakery origins.
- Team section with responsive cards and hover effects.
- Values section with icons/emojis for visual appeal.
- Interactive team cards (click alerts).

### Products Page
- Product cards with images, descriptions, and “Add to Cart” buttons.
- Custom cake form (flavour, size, custom message).
- **Cart Sidebar:**
  - Items added dynamically.
  - Total updates automatically.
  - Checkout button shows summary and redirects to enquiry page.

### Enquiry Page
- Form validation for required fields.
- Cart sync: items from Products page auto‑fill into enquiry form textarea.
- Responsive two‑column layout for personal/contact details.
- Clear error/success feedback messages.

### Contact Page
- Location section with embedded Google Maps.
- Contact info with clickable email and phone links.
- Business hours list.
- Contact form with validation and feedback messages.



## 🖥️ Technologies Used
- **HTML5** for semantic structure.
- **CSS3** (Flexbox & Grid) for responsive layouts and styling.
- **JavaScript (ES6)** for interactivity, form validation, and cart logic.

---

## 🚀 How to Run
1. Clone or download the project.
2. Open any `.html` file in a browser.
3. Ensure the `css/` and `js/` folders are correctly linked in each HTML file.
4. Interact with forms and cart to see dynamic functionality.



## 📌 Notes
- Each page has its own JavaScript file for modularity.
- Cart logic is fully functional and integrates with the enquiry form.
- All pages are responsive and accessible.

---

## 👨‍💻 Author
Developed by **Hlaisi Nhlavutelo Lulama **  
