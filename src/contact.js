import createHTMLElement from './moduleFactory';
import clearPage from './clearPage';

const contactPage = () => {
  clearPage();
  const contentDiv = document.querySelector('#content');
  const contactDiv = createHTMLElement('div', 'contact-page', '');
  const contactHeader = createHTMLElement('h1', null, 'cafe toki');
  const contactAddress = createHTMLElement('h2', null, '∞ jikan ave');
  const contactNumber = createHTMLElement('h2', null, '+00 1234 56789');
  const contactEmail = createHTMLElement('h2', null, 'moshimoshi@toki.cafe');

  const content = [contactHeader, contactAddress, contactNumber, contactEmail];
  content.forEach(element => {
    contactDiv.appendChild(element);
  });

  contentDiv.appendChild(contactDiv);
};

export default contactPage;
