function renderProducts(containerSelector, products) {
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
      <div class="item">
      <img src="${product.image}" alt="" />
      <div class="item-info">
      <p class="heading">${product.heading}</p>
      <p class="subheading">${product.subheading}</p>
      <p class="price">₹${product.price}<span><strike>M.R.P. ₹800</strike> 40%OFF</span></p>
      <button
      class="js-addtocart"
      data-product-id="${product.id}">
      Add To Cart</button>
      </div>
      </div>
      `;
  });

  document.querySelector(containerSelector).innerHTML = productsHTML;
}

renderProducts(".js-product-container1", Products1);
renderProducts(".js-product-container2", Products2);
renderProducts(".js-product-container3", Products3);
renderProducts(".js-product-container4", Products4);
renderProducts(".js-product-container5", Products5);
renderProducts(".js-product-container6", Products6);
renderProducts(".js-product-container7", Products7);
renderProducts(".js-product-container8", Products8);

document.querySelectorAll(".js-addtocart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    let macthingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        macthingItem = item;
      }
    });

    if (macthingItem) {
      macthingItem.quantity++;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    savetoStorage();


    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    document.querySelector('.checkout-quan').innerHTML = cartQuantity;

    console.log(cartQuantity);
    console.log(cart);
  });
});
