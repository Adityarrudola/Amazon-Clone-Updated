let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "amazonproject-item41",
      quantity: 1,
    },
    {
      productId: "amazonproject-item42",
      quantity: 2,
    },
  ];
}

function savetoStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  savetoStorage();
}
