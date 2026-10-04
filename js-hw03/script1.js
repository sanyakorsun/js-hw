const car = {
  manufacturer: "Lada",
  model: "Niva",
  year: 2026,
  averageSpeed: 200
};

function printCarInfo(carObj) {
  console.log(`Виробник: ${carObj.manufacturer}`);
  console.log(`Модель: ${carObj.model}`);
  console.log(`Рік випуску: ${carObj.year}`);
  console.log(`Середня швидкість: ${carObj.averageSpeed} км/год`);
}

function calculateTravelTime(carObj, distance) {
  const pureTime = distance / carObj.averageSpeed;
  let restCount = Math.floor(pureTime / 4);

  if (pureTime % 4 === 0 && restCount > 0) {
    restCount -= 1;
  }

  const totalTime = pureTime + restCount;

  console.log(`Чистий час у дорозі: ${pureTime.toFixed(2)} год.`);
  console.log(`Кількість необхідних перерв: ${restCount} (по 1 годині кожна)`);
  console.log(`Загальний час із урахуванням відпочинку: ${totalTime.toFixed(2)} год.`);

  return totalTime;
}

printCarInfo(car);
calculateTravelTime(car, 1500);
