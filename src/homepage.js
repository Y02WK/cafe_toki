import createHTMLElement from './moduleFactory';
import clearPage from './clearPage';
import menuPage from './menu';

const homePage = () => {
  clearPage();
  const contentDiv = document.querySelector('#content');
  const homeDiv = createHTMLElement('div', 'page-home', '');
  const homeTitle = createHTMLElement('h1', 'home-title', 'cafe toki');
  const homeAddress = createHTMLElement('h2', 'home-address', '∞ jikan ave');
  const homeQuote = createHTMLElement(
    'h3',
    'home-quote',
    'Time you enjoy wasting is not wasted time'
  );
  const homeMenu = createHTMLElement('div', 'home-menu', 'VIEW MENU');

  const homePageContent = [homeTitle, homeAddress, homeQuote, homeMenu];
  homePageContent.forEach(element => {
    homeDiv.appendChild(element);
  });

  contentDiv.appendChild(homeDiv);
  const homeMenuButton = document.querySelector('.home-menu');
  homeMenuButton.addEventListener('click', menuPage);
};

export default homePage;
