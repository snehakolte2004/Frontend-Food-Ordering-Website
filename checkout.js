document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
  const totalPrice = parseInt(localStorage.getItem("totalPrice")) || 0;

  document.getElementById("item-count").textContent = `Total Items: ${cart.length}`;
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
        localStorage.removeItem("checkoutCart");
        localStorage.removeItem("totalPrice");
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
