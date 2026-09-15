/* ==========================================================================
   NESTORA — cart.js
   localStorage-backed cart, toast notifications, WhatsApp order links.
   Depends on products.js being loaded first.
   ========================================================================== */

const NESTORA_CART_KEY = "nestora_cart";
const NESTORA_WHATSAPP_NUMBER = "923000000000"; // fictional demo number

/* ---- storage --------------------------------------------------------- */

function nestoraReadCart() {
  try {
    const raw = localStorage.getItem(NESTORA_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function nestoraWriteCart(cart) {
  localStorage.setItem(NESTORA_CART_KEY, JSON.stringify(cart));
  nestoraUpdateCartBadge();
  if (typeof nestoraRenderCartDrawer === "function") nestoraRenderCartDrawer();
}

function nestoraAddToCart(productId, qty = 1, color = null) {
  const cart = nestoraReadCart();
  const existing = cart.find(
    (item) => item.id === productId && item.color === color
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty, color });
  }
  nestoraWriteCart(cart);
  nestoraShowToast("Added to cart");
}

function nestoraRemoveFromCart(productId, color = null) {
  let cart = nestoraReadCart();
  cart = cart.filter((item) => !(item.id === productId && item.color === color));
  nestoraWriteCart(cart);
}

function nestoraSetQty(productId, color, qty) {
  const cart = nestoraReadCart();
  const item = cart.find((i) => i.id === productId && i.color === color);
  if (!item) return;
  item.qty = Math.max(1, qty);
  nestoraWriteCart(cart);
}

function nestoraCartCount() {
  return nestoraReadCart().reduce((sum, item) => sum + item.qty, 0);
}

function nestoraCartSubtotal() {
  const cart = nestoraReadCart();
  return cart.reduce((sum, item) => {
    const product = nestoraGetProduct(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

/* ---- badge / UI -------------------------------------------------------- */

function nestoraUpdateCartBadge() {
  const count = nestoraCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
    el.classList.toggle("is-visible", count > 0);
  });
}

/* ---- toast --------------------------------------------------------- */

let nestoraToastTimer = null;
function nestoraShowToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(nestoraToastTimer);
  nestoraToastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

/* ---- WhatsApp --------------------------------------------------------- */

function nestoraWhatsAppLink(message) {
  return `https://wa.me/${NESTORA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function nestoraOrderOnWhatsApp(product) {
  const message = `Assalamualaikum, I am interested in the ${product.name}. Price: ${nestoraFormatPrice(
    product.price
  )}. Please share availability and delivery details.`;
  window.open(nestoraWhatsAppLink(message), "_blank");
}

function nestoraCartOnWhatsApp() {
  const cart = nestoraReadCart();
  if (cart.length === 0) return;
  const lines = cart.map((item) => {
    const product = nestoraGetProduct(item.id);
    if (!product) return "";
    const colorPart = item.color ? ` (${item.color})` : "";
    return `• ${product.name}${colorPart} × ${item.qty} — ${nestoraFormatPrice(
      product.price * item.qty
    )}`;
  });
  const message =
    `Assalamualaikum, I would like to order the following items from NESTORA:\n\n` +
    lines.join("\n") +
    `\n\nTotal: ${nestoraFormatPrice(nestoraCartSubtotal())}\n\nPlease share availability and delivery details.`;
  window.open(nestoraWhatsAppLink(message), "_blank");
}

/* ---- cart drawer --------------------------------------------------------- */

function nestoraRenderCartDrawer() {
  const body = document.querySelector("[data-cart-drawer-body]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  if (!body) return;

  const cart = nestoraReadCart();

  if (cart.length === 0) {
    body.innerHTML = `<p class="cart-drawer-empty">Your cart is empty. Browse the collection to find something you love.</p>`;
  } else {
    body.innerHTML = cart
      .map((item) => {
        const product = nestoraGetProduct(item.id);
        if (!product) return "";
        const colorPart = item.color ? `${item.color} · ` : "";
        return `
          <div class="cart-drawer-item">
            <img src="${product.img}" alt="${product.name}">
            <div>
              <div class="cart-item-name">${product.name}</div>
              <div class="cart-item-meta">${colorPart}${nestoraFormatPrice(product.price)}</div>
              <div class="qty-control">
                <button type="button" data-qty-down="${product.id}" data-color="${item.color ?? ""}" aria-label="Decrease quantity">&minus;</button>
                <span>${item.qty}</span>
                <button type="button" data-qty-up="${product.id}" data-color="${item.color ?? ""}" aria-label="Increase quantity">&plus;</button>
              </div>
              <button type="button" class="cart-item-remove" data-remove="${product.id}" data-color="${item.color ?? ""}">Remove</button>
            </div>
            <div class="cart-item-price">${nestoraFormatPrice(product.price * item.qty)}</div>
          </div>`;
      })
      .join("");
  }

  if (subtotalEl) subtotalEl.textContent = nestoraFormatPrice(nestoraCartSubtotal());

  body.querySelectorAll("[data-qty-up]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cart2 = nestoraReadCart();
      const color = btn.dataset.color || null;
      const item = cart2.find((i) => i.id === btn.dataset.qtyUp && i.color === color);
      if (item) nestoraSetQty(item.id, color, item.qty + 1);
      nestoraRenderCartDrawer();
      if (typeof nestoraRenderCartPage === "function") nestoraRenderCartPage();
    });
  });
  body.querySelectorAll("[data-qty-down]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cart2 = nestoraReadCart();
      const color = btn.dataset.color || null;
      const item = cart2.find((i) => i.id === btn.dataset.qtyDown && i.color === color);
      if (item) {
        if (item.qty <= 1) {
          nestoraRemoveFromCart(item.id, color);
        } else {
          nestoraSetQty(item.id, color, item.qty - 1);
        }
      }
      nestoraRenderCartDrawer();
      if (typeof nestoraRenderCartPage === "function") nestoraRenderCartPage();
    });
  });
  body.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      nestoraRemoveFromCart(btn.dataset.remove, btn.dataset.color || null);
      nestoraRenderCartDrawer();
      if (typeof nestoraRenderCartPage === "function") nestoraRenderCartPage();
    });
  });
}

function nestoraOpenCartDrawer() {
  document.querySelector("[data-cart-drawer]")?.classList.add("is-open");
  document.querySelector("[data-cart-scrim]")?.classList.add("is-open");
  document.body.classList.add("no-scroll");
  nestoraRenderCartDrawer();
}

function nestoraCloseCartDrawer() {
  document.querySelector("[data-cart-drawer]")?.classList.remove("is-open");
  document.querySelector("[data-cart-scrim]")?.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  nestoraUpdateCartBadge();
  nestoraRenderCartDrawer();

  document.querySelectorAll("[data-cart-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      nestoraOpenCartDrawer();
    });
  });
  document.querySelector("[data-cart-close]")?.addEventListener("click", nestoraCloseCartDrawer);
  document.querySelector("[data-cart-scrim]")?.addEventListener("click", nestoraCloseCartDrawer);
  document.querySelector("[data-cart-whatsapp]")?.addEventListener("click", nestoraCartOnWhatsApp);
});
