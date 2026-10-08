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

class HtmlElement {
  constructor(tagName, isSelfClosing = false, textContent = '') {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing;
    this.textContent = textContent;
    this.attributes = [];
    this.styles = [];
    this.children = [];
  }

  setAttribute(name, value) {
    this.attributes.push({ name, value });
  }

  setStyle(name, value) {
    this.styles.push({ name, value });
  }

  appendChild(element) {
    this.children.push(element);
  }

  prependChild(element) {
    this.children.unshift(element);
  }

  getHtml() {
    let styleAttr = '';
    if (this.styles.length > 0) {
      const stylesString = this.styles
        .map(style => `${style.name}: ${style.value};`)
        .join(' ');
      styleAttr = ` style="${stylesString}"`;
    }

    let attrsString = this.attributes
      .map(attr => `${attr.name}="${attr.value}"`)
      .join(' ');
    if (attrsString) {
      attrsString = ' ' + attrsString;
    }

    if (this.isSelfClosing) {
      return `<${this.tagName}${attrsString}${styleAttr}>`;
    }

    const childrenHtml = this.children.map(child => child.getHtml()).join('');

    return `<${this.tagName}${attrsString}${styleAttr}>${this.textContent}${childrenHtml}</${this.tagName}>`;
  }
}

class HtmlBlock {
  constructor(rootElement) {
    this.cssClasses = [];
    this.rootElement = rootElement;
  }

  addClass(cssClass) {
    this.cssClasses.push(cssClass);
  }

  getCode() {
    const cssCode = this.cssClasses.map(cls => cls.getCss()).join('\n');
    return `<style>\n${cssCode}\n</style>\n${this.rootElement.getHtml()}`;
  }
}

const wrapClass = new CssClass('wrap');
wrapClass.setStyle('display', 'flex');

const blockClass = new CssClass('block');
blockClass.setStyle('width', '300px');
blockClass.setStyle('margin', '10px');

const imgClass = new CssClass('img');
imgClass.setStyle('width', '100%');

const textClass = new CssClass('text');
textClass.setStyle('text-align', 'justify');

function createCardBlock() {
  const cardDiv = new HtmlElement('div');
  cardDiv.setAttribute('class', 'block');

  const h3 = new HtmlElement('h3', false, 'What is Lorem Ipsum?');

  const img = new HtmlElement('img', true);
  img.setAttribute('class', 'img');
  img.setAttribute('src', 'lipsum.jpg');
  img.setAttribute('alt', 'Lorem Ipsum');

  const p = new HtmlElement('p', false, '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "');
  p.setAttribute('class', 'text');

  const link = new HtmlElement('a', false, 'More...');
  link.setAttribute('href', 'https://www.lipsum.com/');
  link.setAttribute('target', '_blank');

  p.appendChild(link);

  cardDiv.appendChild(h3);
  cardDiv.appendChild(img);
  cardDiv.appendChild(p);

  return cardDiv;
}

const rootWrapper = new HtmlElement('div');
rootWrapper.setAttribute('id', 'wrapper');
rootWrapper.setAttribute('class', 'wrap');

rootWrapper.appendChild(createCardBlock());
rootWrapper.appendChild(createCardBlock());

const htmlBlock = new HtmlBlock(rootWrapper);
htmlBlock.addClass(wrapClass);
htmlBlock.addClass(blockClass);
htmlBlock.addClass(imgClass);
htmlBlock.addClass(textClass);

document.write(htmlBlock.getCode());
