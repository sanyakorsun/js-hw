//1
const userName = prompt("Введіть ваше ім'я:");
alert(`Привіт, ${userName}!`);

//2
const CURRENT_YEAR = 2026;
const birthYear = Number(prompt("Введіть ваш рік народження:"));
const age = CURRENT_YEAR - birthYear;
alert(`Вам ${age} років`);

//3
const side = Number(prompt("Введіть довжину сторони квадрата:"));
const perimeter = side * 4;
alert(`Периметр квадрата: ${perimeter}`);

//4
const radius = Number(prompt("Введіть радіус кола:"));
const area = Math.PI * Math.pow(radius, 2);
alert(`Площа кола: ${area.toFixed(2)}`);

//5
const distance = Number(prompt("Введіть відстань між містами (км):"));
const hours = Number(prompt("За скільки годин бажаєте дістатися?"));
const speed = distance / hours;
alert(`Вам потрібно рухатися зі швидкістю: ${speed.toFixed(1)} км/год`);

//6
const EUR_RATE = 0.92;
const usd = Number(prompt("Введіть суму в доларах ($):"));
const eur = usd * EUR_RATE;
alert(`${usd}$ = ${eur.toFixed(2)}€`);

//7
const flashDriveGb = Number(prompt("Введіть обсяг флешки у ГБ:"));
const flashDriveMb = flashDriveGb * 1024;
const fileCount = Math.floor(flashDriveMb / 820);
alert(`На флешку вміститься файлів розміром 820 МБ: ${fileCount} шт.`);

//8
const money = Number(prompt("Скільки грошей у вас у гаманці?"));
const price = Number(prompt("Скільки коштує одна шоколадка?"));
const chocolateCount = Math.floor(money / price);
const rest = (money % price).toFixed(2);
alert(`Ви можете купити шоколадок: ${chocolateCount} шт.\nЗдача: ${rest}`);

//9
const n = Number(prompt("Введіть тризначне число:"));
const digit1 = n % 10;
const digit2 = Math.floor(n / 10) % 10;
const digit3 = Math.floor(n / 100);
const reversedNum = `${digit1}${digit2}${digit3}`;
alert(`Число-перевертень: ${reversedNum}`);

//10
const number = Number(prompt("Введіть ціле число:"));
const isEven = number % 2 === 0;
alert(isEven && "Парне" || "Непарне");
