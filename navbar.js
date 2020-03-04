import { createHTMLElement } from "./index.js";

const createNavBar = () => {
  const headerSelect = document.querySelector("header");
  const navBarContainer = createHTMLElement("ul", "navbar", "");
  const titleNav = createHTMLElement("li", "nav-home", "cafe toki");
  const menuNav = createHTMLElement("li", "navlink", "Menu");
  const contactNav = createHTMLElement("li", "navlink", "Contact");
};
