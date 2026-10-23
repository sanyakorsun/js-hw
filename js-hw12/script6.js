function sortArrayAsync(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array) || array.length === 0) {
      reject(new Error("Масив порожній"));
      return;
    }

    setTimeout(() => {
      const sortedArray = [...array].sort((a, b) => a - b);
      resolve(sortedArray);
    }, 2000);
  });
}

async function main6() {
  const numbers = [42, 7, 19, 3, 88, 12];

  try {
    const result = await sortArrayAsync(numbers);
    console.log("Відсортований масив:", result);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  }
}

main6();
