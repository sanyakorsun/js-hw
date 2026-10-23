function multiplyAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
      reject(new Error("Некоректні значення"));
      return;
    }

    setTimeout(() => {
      resolve(a * b);
    }, 2000);
  });
}

async function main5() {
  try {
    const result = await multiplyAsync(6, 9);
    console.log(`Результат множення: ${result}`);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  }
}

main5();
