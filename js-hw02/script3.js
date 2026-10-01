// 1
function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
const num1_1 = Number(prompt("Введіть перше число:"));
const num1_2 = Number(prompt("Введіть друге число:"));
alert(`Результат порівняння: ${compareNumbers(num1_1, num1_2)}`);

// 2
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
const num2 = Number(prompt("Введіть число для обчислення факторіалу:"));
alert(`Факторіал ${num2} = ${factorial(num2)}`);

// 3
function combineDigits(d1, d2, d3) {
    return Number(`${d1}${d2}${d3}`);
}
const d1 = Number(prompt("Введіть першу цифру:"));
const d2 = Number(prompt("Введіть другу цифру:"));
const d3 = Number(prompt("Введіть третю цифру:"));
alert(`Утворене число: ${combineDigits(d1, d2, d3)}`);

// 4
function getArea(length, width) {
    if (isNaN(width) || width === 0) {
        return length * length;
    }
    return length * width;
}
const len = Number(prompt("Введіть довжину прямокутника:"));
const widInput = prompt("Введіть ширину (або залиште порожнім для квадрата):");
const wid = widInput === "" || widInput === null ? undefined : Number(widInput);
alert(`Площа: ${getArea(len, wid)}`);

// 5
function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
const num5 = Number(prompt("Введіть число для перевірки на досконалість:"));
alert(`Число ${num5} досконале? ${isPerfectNumber(num5)}`);

// 6
function printPerfectNumbers(min, max) {
    let result = "";
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            result += i + " ";
        }
    }
    alert(`Досконалі числа в діапазоні від ${min} до ${max}: ${result || "відсутні"}`);
}
const minRange = Number(prompt("Введіть початок діапазону:"));
const maxRange = Number(prompt("Введіть кінець діапазону:"));
printPerfectNumbers(minRange, maxRange);
