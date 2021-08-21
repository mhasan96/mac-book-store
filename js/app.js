// Memory Calculations
function modifyConfig(product, price) {
  const memoryInput = document.getElementById(product);
  let extraMemoryCost = memoryInput.innerText;
  extraMemoryCost = price;
  memoryInput.innerText = extraMemoryCost;
  calculateTotal();
}

// Total Price Calculation
function calculateTotal() {
  const bestPrice = 1299;
  const memory = parseInt(document.getElementById("extra-memory").innerText);
  const storage = parseInt(document.getElementById("extra-storage").innerText);
  const delivery = parseInt(
    document.getElementById("delivery-charges").innerText
  );
  const calculateTotalPrice = bestPrice + memory + storage + delivery;
  document.getElementById("total-price").innerText = calculateTotalPrice;
  calculation();
}

// Promo Code Calculation
document.getElementById("promo-button").addEventListener("click", function () {
  calculation("promo-button");
});
function getInputValue() {
  const totalPriceInput = document.getElementById("total-price");
  const totalPrice = parseFloat(totalPriceInput.innerText);
  return totalPrice;
}
function calculation() {
  const inputText = document.getElementById("promo-input");
  const input = inputText.value;
  let totalPriceText = document.getElementById("total");
  let totalPrice = totalPriceText.innerText;
  totalPrice = getInputValue();
  totalPriceText.innerText = totalPrice;
  const discount = totalPrice / 5;
  const finalDiscount = totalPrice - discount;
  if (input == "stevekaku") {
    document.getElementById("promo-button").disabled = true;
    totalPriceText.innerText = finalDiscount;
  }
  inputText.value = "";
}
// call the function
document.getElementById("memory-8").addEventListener("click", function () {
  modifyConfig("extra-memory", 0);
});
document.getElementById("memory-16").addEventListener("click", function () {
  modifyConfig("extra-memory", 180);
});

document.getElementById("storage-256").addEventListener("click", function () {
  modifyConfig("extra-storage", 0);
});
document.getElementById("storage-512").addEventListener("click", function () {
  modifyConfig("extra-storage", 100);
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  modifyConfig("extra-storage", 180);
});
document.getElementById("delivery-free").addEventListener("click", function () {
  modifyConfig("delivery-charges", 0);
});
document
  .getElementById("delivery-not-free")
  .addEventListener("click", function () {
    modifyConfig("delivery-charges", 20);
  });
