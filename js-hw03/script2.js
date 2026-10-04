function createFraction(numerator, denominator) {
  return { numerator, denominator };
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function reduceFraction(f) {
  const commonDivisor = gcd(f.numerator, f.denominator);
  const result = {
    numerator: f.numerator / commonDivisor,
    denominator: f.denominator / commonDivisor
  };
  console.log(`Скорочення ${f.numerator}/${f.denominator} -> ${result.numerator}/${result.denominator}`);
  return result;
}

function addFractions(f1, f2) {
  const resultNum = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
  const resultDen = f1.denominator * f2.denominator;
  const res = reduceFraction({ numerator: resultNum, denominator: resultDen });
  console.log(`Додавання: ${f1.numerator}/${f1.denominator} + ${f2.numerator}/${f2.denominator} = ${res.numerator}/${res.denominator}`);
  return res;
}

function subtractFractions(f1, f2) {
  const resultNum = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
  const resultDen = f1.denominator * f2.denominator;
  const res = reduceFraction({ numerator: resultNum, denominator: resultDen });
  console.log(`Віднімання: ${f1.numerator}/${f1.denominator} - ${f2.numerator}/${f2.denominator} = ${res.numerator}/${res.denominator}`);
  return res;
}

function multiplyFractions(f1, f2) {
  const resultNum = f1.numerator * f2.numerator;
  const resultDen = f1.denominator * f2.denominator;
  const res = reduceFraction({ numerator: resultNum, denominator: resultDen });
  console.log(`Множення: (${f1.numerator}/${f1.denominator}) * (${f2.numerator}/${f2.denominator}) = ${res.numerator}/${res.denominator}`);
  return res;
}

function divideFractions(f1, f2) {
  const resultNum = f1.numerator * f2.denominator;
  const resultDen = f1.denominator * f2.numerator;
  const res = reduceFraction({ numerator: resultNum, denominator: resultDen });
  console.log(`Ділення: (${f1.numerator}/${f1.denominator}) / (${f2.numerator}/${f2.denominator}) = ${res.numerator}/${res.denominator}`);
  return res;
}

const fraction1 = createFraction(2, 4);
const fraction2 = createFraction(6, 5);

reduceFraction(fraction1);
addFractions(fraction1, fraction2);
subtractFractions(fraction1, fraction2);
multiplyFractions(fraction1, fraction2);
divideFractions(fraction1, fraction2);
