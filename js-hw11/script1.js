function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function doubleElement(element) {
  return element * 2;
}

function reverseElement(element) {
  return String(element).split("").reverse().join("");
}

console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));
