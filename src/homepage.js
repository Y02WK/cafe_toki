import { createHTMLElement } from "./index.js";

const homePage = () => {
  const contentDiv = document.querySelector("#content");
  const homeDiv = createHTMLElement("div", "page-home", "");
  const homeTitle = createHTMLElement("h1", "home-title", "cafe toki");
  const homeAddress = createHTMLElement("h2", "home-address", "∞ jikan ave");
  const homeQuote = createHTMLElement(
    "h3",
    "home-quote",
    "Time you enjoy wasting is not wasted time"
  );

  const homePageContent = [homeTitle, homeAddress, homeQuote];
  homePageContent.forEach(element => {
    homeDiv.appendChild(element);
  });

  contentDiv.appendChild(homeDiv);
};

export { homePage };
