// Memory Calculations

function addMemory(isTrue) {
  const memoryInput = document.getElementById("extra-memory");
  let extraMemoryCost = parseInt(memoryInput.innerText);

  if (isTrue == false) {
    extraMemoryCost = 0;
    memoryInput.innerText = extraMemoryCost;
  } else if (isTrue == true) {
    extraMemoryCost = 180;
    memoryInput.innerText = extraMemoryCost;
  }
}

document.getElementById("memory-8").addEventListener("click", function () {
  addMemory(false);
});
document.getElementById("memory-16").addEventListener("click", function () {
  addMemory(true);
});

// Storage Calculations

function addStorage(storageSize) {
  const storageInput = document.getElementById("extra-storage");
  let exrtaStorageCost = parseInt(storageInput.innerText);

  if (storageSize == "storage-256") {
    exrtaStorageCost = 0;
    storageInput.innerText = exrtaStorageCost;
  } else if (storageSize == "storage-512") {
    exrtaStorageCost = 100;
    storageInput.innerText = exrtaStorageCost;
  } else if (storageSize == "storage-1TB") {
    exrtaStorageCost = 180;
    storageInput.innerText = exrtaStorageCost;
  }
}

document.getElementById("storage-256").addEventListener("click", function () {
  addStorage("storage-256");
});
document.getElementById("storage-512").addEventListener("click", function () {
  addStorage("storage-512");
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  addStorage("storage-1TB");
});

// Delivery Charges Calculaitons

function addDelivery(isTrue) {
  const deliveryInput = document.getElementById("delivery-charges");
  let deliveryCost = parseInt(deliveryInput.innerText);
  if (isTrue == true) {
    deliveryCost = 0;
    deliveryInput.innerText = deliveryCost;
  } else if (isTrue == false) {
    deliveryCost = 20;
    deliveryInput.innerText = deliveryCost;
  }
}

document.getElementById("delivery-free").addEventListener("click", function () {
  addDelivery(true);
});

document
  .getElementById("delivery-not-free")
  .addEventListener("click", function () {
    addDelivery(false);
  });

// Total price Calculation
