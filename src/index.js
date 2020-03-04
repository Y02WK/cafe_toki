import { homePage } from "./homepage.js";

//Factory function for creating elements
const createHTMLElement = (type, className, textContent) => {
  const element = document.createElement(type);
  element.classList.add(className);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

homePage();

export { createHTMLElement };
