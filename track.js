// track.js
const form = document.getElementById("trackingForm");
const steps = ["step1", "step2", "step3", "step4"];
const statusMsg = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const trackingId = document.getElementById("trackingId").value.trim();

  if (!trackingId) return;

  document.getElementById("trackingSteps").style.display = "flex";
  statusMsg.textContent = "Fetching tracking details...";

  // Simulated API response:
  simulateTrackingAPI(trackingId);
});

function simulateTrackingAPI(trackingId) {
  // Simulate real tracking stage for demo
  const randomStage = Math.floor(Math.random() * 4);

  steps.forEach((stepId, index) => {
    const stepEl = document.getElementById(stepId);
    stepEl.classList.remove("active");
    if (index <= randomStage) stepEl.classList.add("active");
  });

  const messages = [
    "Your order has been placed.",
    "We're preparing your food.",
    "Your order is out for delivery.",
    "Your order has been delivered. Bon appétit!"
  ];

  statusMsg.textContent = messages[randomStage];
}
