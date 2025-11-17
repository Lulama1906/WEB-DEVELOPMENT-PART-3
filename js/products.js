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
// CART FUNCTIONALITY
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  let cart = [];
  let total = 0;

  // Add event listeners to product buttons
  document.querySelectorAll("article button").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const product = e.target.closest("article");
      if (!product) return;

      const name = product.querySelector("h3").textContent;
      const priceElement = product.querySelector(".price");
      let price = 0;

      if (priceElement && priceElement.dataset.price) {
        price = parseFloat(priceElement.dataset.price);
      } else {
        // fallback: extract number from text
        const priceText = priceElement ? priceElement.textContent : "";
        price = parseFloat(priceText.replace(/[^\d.]/g, ""));
      }

      // Handle custom cake form
      if (product.querySelector("form")) {
        const flavour = document.getElementById("flavour-custom").value;
        const sizeSelect = document.getElementById("size-custom");
        const sizeText = sizeSelect.options[sizeSelect.selectedIndex].text;
        const sizePrice = parseFloat(sizeSelect.value);
        const message = document.getElementById("message-custom").value;
        addToCart(`${sizeText} ${flavour} Cake — "${message}"`, sizePrice);
      } else {
        addToCart(name, price);
      }
    });
  });

  // Function to add item to cart
  function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    renderCart();
  }

  // Render cart items and total
  function renderCart() {
    cartList.innerHTML = "";
    cart.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.item} — R${entry.price.toFixed(2)}`;
      cartList.appendChild(li);
    });
    totalDisplay.textContent = `Total: R${total.toFixed(2)}`;
  }

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      let summary = "Cart Summary:\n\n";
      cart.forEach(entry => {
        summary += `${entry.item} — R${entry.price.toFixed(2)}\n`;
      });
      summary += `\nTotal: R${total.toFixed(2)}\n\nProceeding to enquiry page...`;
      alert(summary);
      window.location.href = "enquiry.html";
    });
  }
});
