// 1
function power(num, degree) {
    if (degree === 0) return 1;
    if (degree < 0) return 1 / pow(num, -degree);
    return num * power(num, degree - 1);
}
const base1 = Number(prompt("Введіть число (основу):"));
const exp1 = Number(prompt("Введіть ступінь:"));
alert(`${base1}^${exp1} = ${power(base1, exp1)}`);

// 2
function gcd(a, b) {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
}
const num2_1 = Number(prompt("Введіть перше число:"));
const num2_2 = Number(prompt("Введіть друге число:"));
alert(`НСД(${num2_1}, ${num2_2}) = ${gcd(num2_1, num2_2)}`);

// 3
function maxDigit(n) {
    n = Math.abs(n);
    if (n < 10) return n;
    return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
}
const num3 = Number(prompt("Введіть число для пошуку максимальної цифри:"));
alert(`Максимальна цифра в числі ${num3}: ${maxDigit(num3)}`);

// 4
function isPrime(n, divisor = 2) {
    if (n <= 1) return false;
    if (divisor * divisor > n) return true;
    if (n % divisor === 0) return false;
    return isPrime(n, divisor + 1);
}
const num4 = Number(prompt("Введіть число для перевірки на простоту:"));
alert(`Число ${num4} просте? ${isPrime(num4)}`);

// 5
function printFactors(n, divisor = 2) {
    if (n <= 1) return "";
    if (n % divisor === 0) {
        const next = printFactors(n / divisor, divisor);
        return divisor + (next ? "*" + next : "");
    }
    return printFactors(n, divisor + 1);
}
const num5 = Number(prompt("Введіть число для розкладу на множники:"));
alert(`Множники числа ${num5}: ${printFactors(num5)}`);

// 6
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const num6 = Number(prompt("Введіть порядковий номер числа Фібоначчі:"));
alert(`${num6} число Фібоначчі: ${fibonacci(num6)}`);
