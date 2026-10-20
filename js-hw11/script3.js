function washDishes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Посуд вимито");
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Кімнату прибрано");
    }, 4000);
  });
}

function makeDinner() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Вечеря приготована");
    }, 7000);
  });
}

async function doChores() {
  const dishesResult = await washDishes();
  console.log(dishesResult);

  const roomResult = await cleanRoom();
  console.log(roomResult);

  const dinnerResult = await makeDinner();
  console.log(dinnerResult);
}

doChores();
