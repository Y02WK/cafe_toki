import homePage from './homepage';
import createNavBar from './navbar';
import menuPage from './menu';
import contactPage from './contact';

createNavBar();
homePage();
const homeButton = document.querySelector('.nav-home');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menuPage);
contactButton.addEventListener('click', contactPage);
