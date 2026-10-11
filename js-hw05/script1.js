class Marker {
  constructor(color, inkPercentage = 100) {
    this.color = color;
    this.inkPercentage = Math.max(0, Math.min(100, inkPercentage));
  }

  print(text) {
    let result = '';
    
    for (const char of text) {
      if (char !== ' ') {
        if (this.inkPercentage < 0.5) {
          break;
        }
        this.inkPercentage -= 0.5;
      }
      result += char;
    }

    console.log(`%c${result}`, `color: ${this.color}`);
    console.log(`Залишок чорнил у маркері: ${this.inkPercentage.toFixed(1)}%\n`);
  }
}

class RefillableMarker extends Marker {
  refill(amount = 100) {
    this.inkPercentage = Math.min(100, this.inkPercentage + amount);
    console.log(`Маркер заправлено. Поточний рівень чорнил: ${this.inkPercentage}%`);
  }
}

const simpleMarker = new Marker('blue', 2);
simpleMarker.print("Hello, World!");

const refillableMarker = new RefillableMarker('red', 1);
refillableMarker.print("JavaScript OOP");
refillableMarker.refill(50);
refillableMarker.print("JavaScript OOP");
