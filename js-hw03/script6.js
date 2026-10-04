const styles = [
  { name: "color", value: "darkblue" },
  { name: "font-size", value: "24px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
  { name: "font-weight", value: "bold" }
];

function printStyledText(stylesArray, text) {
  let styleString = "";

  for (let i = 0; i < stylesArray.length; i++) {
    styleString = styleString + stylesArray[i].name + ": " + stylesArray[i].value + "; ";
  }

  const htmlString = "<p style=\"" + styleString + "\">" + text + "</p>";

  console.log("HTML-код:");
  console.log(htmlString);

  if (typeof document !== "undefined") {
    document.write(htmlString);
  }
}

printStyledText(styles, "Цей текст виведено з використанням масиву стилів CSS");
