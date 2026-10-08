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

function createCardBlock() {
  const cardDiv = new HtmlElement('div');
  cardDiv.setStyle('width', '300px');
  cardDiv.setStyle('margin', '10px');

  const h3 = new HtmlElement('h3', false, 'What is Lorem Ipsum?');

  const img = new HtmlElement('img', true);
  img.setStyle('width', '100%');
  img.setAttribute('src', 'lipsum.jpg');
  img.setAttribute('alt', 'Lorem Ipsum');

  const p = new HtmlElement('p', false, '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ');
  p.setStyle('text-align', 'justify');

  const link = new HtmlElement('a', false, 'More...');
  link.setAttribute('href', 'https://www.lipsum.com/');
  link.setAttribute('target', '_blank');

  p.appendChild(link);

  cardDiv.appendChild(h3);
  cardDiv.appendChild(img);
  cardDiv.appendChild(p);

  return cardDiv;
}

const wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

wrapper.appendChild(createCardBlock());
wrapper.appendChild(createCardBlock());

document.write(wrapper.getHtml());
