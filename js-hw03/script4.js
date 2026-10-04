const shoppingList = [
  { name: "Сир-косичка", count: 1, isBought: true },
  { name: "Кир-сосичка", count: 2, isBought: false },
  { name: "Сос-кирсичка", count: 5, isBought: false },
  { name: "Рич-сокичка", count: 1, isBought: true }
];

function printShoppingList(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].isBought === false) {
      console.log("Не куплено - " + list[i].name + ": " + list[i].count + " шт.");
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].isBought === true) {
      console.log("Куплено - " + list[i].name + ": " + list[i].count + " шт.");
    }
  }
}

function addItem(list, name, count) {
  let isFound = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase() === name.toLowerCase()) {
      list[i].count = list[i].count + count;
      isFound = true;
      console.log("Збільшено кількість товару:" + name + " на " + count + ". Разом: " + list[i].count);
      break;
    }
  }

  if (isFound === false) {
    list.push({ name: name, count: count, isBought: false });
    console.log("Додано новий товар: " + name + " (" + count + " шт.)");
  }
}

function buyItem(list, name) {
  let isFound = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase() === name.toLowerCase()) {
      list[i].isBought = true;
      isFound = true;
      console.log("Товар " + name + " куплено");
      break;
    }
  }

  if (isFound === false) {
    console.log("Товар " + name + " не знайдено у списку");
  }
}

printShoppingList(shoppingList);

console.log("\nДодавання товарів");
addItem(shoppingList, "Сир-некосичка", 1);
addItem(shoppingList, "Косичка-несир", 1);

console.log("\nПокупка товару");
buyItem(shoppingList, "Кир-сосичка");

printShoppingList(shoppingList);
