let navigationMenuVisibility = false;

const navigationContainer = document.querySelector(".navigation");
navigationContainer.addEventListener("click", function(e) {
  if (window.innerWidth <= 500) {
    navigationMenuVisibility = !navigationMenuVisibility;
    const menu = document.querySelector(".navigation-flex-container");
    menu.classList.toggle("hide");
  }
});

const devLink = document.createElement('a');
const devContent = document.createElement('section');
devContent.textContent = 'Developers';
devContent.classList = 'navigation-item';
devLink.appendChild(devContent);
devLink.href='#';

const navLinkContainer = document.querySelector('.navigation-flex-container');
navLinkContainer.prepend(devLink);