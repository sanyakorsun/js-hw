function sortArray(array) {
  return new Promise((resolve, reject) => {
    if (array.length === 0) {
      reject("Масив порожній");
    } else {
      setTimeout(() => {
        const sorted = [...array].sort((a, b) => a - b);
        resolve(sorted);
      }, 2000);
    }
  });
}

async function runSortingDemo() {
  try {
    const sorted = await sortArray([5, 2, 8, 1, 4]);
    console.log("Відсортований масив:", sorted);
  } catch (error) {
    console.error("Помилка:", error);
  }

  try {
    const sortedEmpty = await sortArray([]);
    console.log("Відсортований масив:", sortedEmpty);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

runSortingDemo();
