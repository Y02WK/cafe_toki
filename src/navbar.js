import createHTMLElement from './moduleFactory';

const createNavBar = () => {
  const headerSelect = document.querySelector('.navbar-container');
  const navBarContainer = createHTMLElement('ul', 'navbar', '');
  const titleNav = createHTMLElement('li', 'nav-home', 'cafe toki');
  const menuNav = createHTMLElement('li', 'navlink', 'Menu');
  const contactNav = createHTMLElement('li', 'navlink', 'Contact');
  menuNav.setAttribute('id', 'menu-button');
  contactNav.setAttribute('id', 'contact-button');

  const navBarContents = [titleNav, menuNav, contactNav];
  navBarContents.forEach(element => {
    navBarContainer.appendChild(element);
  });

  headerSelect.appendChild(navBarContainer);
};

export default createNavBar;
