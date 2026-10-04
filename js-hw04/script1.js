class Circle {
  #radius;
  constructor(radius) {
    this.radius = radius;
  }
  get radius() {
    return this.#radius;
  }
  set radius(value) {
    if (value <= 0) return;
    this.#radius = value;
  }
  get diameter() {
    return this.#radius * 2;
  }
  getArea() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.getArea().toFixed(2));
console.log(myCircle.getCircumference().toFixed(2));

myCircle.radius = 10;

console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.getArea().toFixed(2));
console.log(myCircle.getCircumference().toFixed(2));
