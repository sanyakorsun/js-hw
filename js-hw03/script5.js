const receipt = [
  { name: "Рошен", count: 2, pricePerUnit: 45 },
  { name: "Пивко", count: 3, pricePerUnit: 20 },
  { name: "Кака-кола", count: 1, pricePerUnit: 180 },
  { name: "Живчик", count: 4, pricePerUnit: 35 }
];

function printReceipt(receiptArray) {
  for (let i = 0; i < receiptArray.length; i++) {
    const total = receiptArray[i].count * receiptArray[i].pricePerUnit;
    console.log(receiptArray[i].name + " x" + receiptArray[i].count + " по " + receiptArray[i].pricePerUnit + " грн = " + total + " грн");
  }
}

function getTotalSum(receiptArray) {
  let totalSum = 0;
  for (let i = 0; i < receiptArray.length; i++) {
    totalSum = totalSum + (receiptArray[i].count * receiptArray[i].pricePerUnit);
  }
  console.log("Загальна сума чека: " + totalSum + " грн");
  return totalSum;
}

function getMostExpensivePurchase(receiptArray) {
  let maxItem = receiptArray[0];
  let maxCost = maxItem.count * maxItem.pricePerUnit;

  for (let i = 1; i < receiptArray.length; i++) {
    const cost = receiptArray[i].count * receiptArray[i].pricePerUnit;
    if (cost > maxCost) {
      maxCost = cost;
      maxItem = receiptArray[i];
    }
  }

  console.log("Найдорожча покупка: " + maxItem.name + " (" + maxCost + " грн)");
  return maxItem;
}

function getAverageUnitPrice(receiptArray) {
  let totalCount = 0;
  let totalSum = 0;

  for (let i = 0; i < receiptArray.length; i++) {
    totalCount = totalCount + receiptArray[i].count;
    totalSum = totalSum + (receiptArray[i].count * receiptArray[i].pricePerUnit);
  }

  let avg = 0;
  if (totalCount > 0) {
    avg = totalSum / totalCount;
  }

  console.log("Середня вартість одиниці товару: " + avg.toFixed(2) + " грн");
  return avg;
}

printReceipt(receipt);
getTotalSum(receipt);
getMostExpensivePurchase(receipt);
getAverageUnitPrice(receipt);
