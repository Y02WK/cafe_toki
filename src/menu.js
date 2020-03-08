import createHTMLElement from './moduleFactory';
import clearPage from './clearPage';

const menuPage = () => {
  clearPage();
  const contentDiv = document.querySelector('#content');
  const menuDiv = createHTMLElement('div', 'menu-page', '');
  const menuHeader = createHTMLElement('h1', 'menu-title', 'menu');

  const content = [menuHeader];

  const arrayOfMenuItems = [
    ['coffee black', '4'],
    ['coffee white', '5'],
    ['tea', '5'],
    ['sky juice', '0'],
    ['fruit juices', '5'],
    ['cakes/pastry/bites', 'counter'],
  ];

  arrayOfMenuItems.forEach(item => {
    const menuContainer = createHTMLElement('p', 'menu-container', '');
    const menuItem = createHTMLElement('span', 'menu-item', item[0]);
    const menuPrice = createHTMLElement('span', null, item[1]);

    menuContainer.appendChild(menuItem);
    menuContainer.appendChild(menuPrice);
    content.push(menuContainer);
  });

  content.forEach(item => {
    menuDiv.appendChild(item);
  });
  contentDiv.appendChild(menuDiv);
};

export default menuPage;
