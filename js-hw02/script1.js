// 1
const start = Number(prompt("Введіть початок діапазону:"));
const end = Number(prompt("Введіть кінець діапазону:"));
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
alert(`Сума чисел у діапазоні: ${sum}`);

// 2
let a = Math.abs(Number(prompt("Введіть перше число:")));
let b = Math.abs(Number(prompt("Введіть друге число:")));
while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
}
alert(`Найбільший спільний дільник: ${a}`);

// 3
const num3 = Math.abs(Number(prompt("Введіть число:")));
let divisors = "";
for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0) {
        divisors += i + " ";
    }
}
alert(`Дільники числа ${num3}: ${divisors}`);

// 4
let num4 = Math.abs(Number(prompt("Введіть число:")));
let count4 = 0;
do {
    count4++;
    num4 = Math.floor(num4 / 10);
} while (num4 > 0);
alert(`Кількість цифр у числі: ${count4}`);

// 5
let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
    const input = Number(prompt(`Введіть число (${i} з 10):`));
    if (input > 0) positive++;
    else if (input < 0) negative++;
    else zeros++;

    if (input % 2 === 0) even++;
    else odd++;
}
alert(`Статистика:\nДодатних: ${positive}\nВід'ємних: ${negative}\nНулів: ${zeros}\nПарних: ${even}\nНепарних: ${odd}`);

// 6
let calcAgain;
do {
    const num1 = Number(prompt("Введіть перше число:"));
    const op = prompt("Введіть знак (+, -, *, /):");
    const num2 = Number(prompt("Введіть друге число:"));
    let res;
    if (op === "+") res = num1 + num2;
    else if (op === "-") res = num1 - num2;
    else if (op === "*") res = num1 * num2;
    else if (op === "/") res = num2 !== 0 ? num1 / num2 : "Помилка (ділення на 0)";
    else res = "Невідома операція";

    alert(`Результат: ${res}`);
    calcAgain = confirm("Бажаєте розв'язати ще один приклад?");
} while (calcAgain);

// 7
let num7 = Number(prompt("Введіть число:"));
const shift = Number(prompt("На скільки цифр змістити?"));

let tempNum = num7;
let digitsCount = 0;

while (tempNum > 0) {
    digitsCount++;
    tempNum = Math.floor(tempNum / 10);
}

const actualShift = shift % digitsCount;
for (let i = 0; i < actualShift; i++) {
    const lastDigit = num7 % 10;
    const remainingPart = Math.floor(num7 / 10);
    num7 = lastDigit * Math.pow(10, digitsCount - 1) + remainingPart;
}
alert(`Результат зміщення: ${num7}`);

// 8
const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let dayIndex = 0;
let nextDay;
do {
    nextDay = confirm(`${days[dayIndex]}. Бажаєте побачити назву наступного дня тижня?`);
    dayIndex = (dayIndex + 1) % days.length;
} while (nextDay);

// 9
for (let i = 2; i <= 9; i++) {
    let table = `Таблиця множення на ${i}\n`;
    for (let j = 1; j <= 10; j++) {
        table += `${i} * ${j} = ${i * j}\n`;
    }
    alert(table);
}

// 10
let min = 0;
let max = 100;
let guessed = false;
alert("Загадайте число від 0 до 100!");
while (!guessed && min <= max) {
    const N = Math.floor((min + max) / 2);
    const answer = prompt(`Ваше число > ${N}, < ${N} або == ${N}?`);
    if (answer === "==") {
        alert(`Ваше число: ${N}`);
        guessed = true;
    } else if (answer === ">") {
        min = N + 1;
    } else if (answer === "<") {
        max = N - 1;
    }
}
