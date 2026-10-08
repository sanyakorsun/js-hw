class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = [];
  }

  setStyle(name, value) {
    const existingStyle = this.styles.find(style => style.name === name);
    if (existingStyle) {
      existingStyle.value = value;
    } else {
      this.styles.push({ name, value });
    }
  }

  removeStyle(name) {
    this.styles = this.styles.filter(style => style.name !== name);
  }

  getCss() {
    const stylesString = this.styles
      .map(style => `  ${style.name}: ${style.value};`)
      .join('\n');

    return `.${this.className} {\n${stylesString}\n}`;
  }
}

const myClass = new CssClass('card');
myClass.setStyle('width', '300px');
myClass.setStyle('margin', '10px');
myClass.setStyle('padding', '20px');
myClass.setStyle('border-radius', '5px');

myClass.removeStyle('padding');

console.log(myClass.getCss());
