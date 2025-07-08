// checkout.js
document.addEventListener("DOMContentLoaded", function () {
  const itemCount = 3;
  const totalPrice = 1200;

  document.getElementById("item-count").textContent = `Total Items: ${itemCount}`;
  document.getElementById("total-price").textContent = `Total Price: ₹${totalPrice}`;

  document.getElementById("pay-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (!name || !email || !phone || !address) {
      alert("Please fill in all fields.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef", // Replace with your Razorpay test key
      amount: totalPrice * 100,
      currency: "INR",
      name: "Globalplates",
      description: "Order Payment",
      handler: function (response) {
        document.getElementById("checkout-form").classList.add("hidden");
        document.getElementById("cust-name").textContent = name;
        document.getElementById("cust-address").textContent = address;
        document.getElementById("confirmation").classList.remove("hidden");
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#d2192b",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  });
});


function placeOrder() {
  if (cart.length === 0) {
    alert('Your tray is empty!');
    return;
  }
  // Save the cart data to localStorage
  localStorage.setItem('checkoutCart', JSON.stringify(cart));
  localStorage.setItem('totalPrice', total); // Save total price

  // Redirect to checkout page
  window.location.href = 'checkout.html';
}
