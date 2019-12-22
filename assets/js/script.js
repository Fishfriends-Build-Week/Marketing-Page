let navigationMenuVisibility = false;

const navigationContainer = document.querySelector(".navigation");
navigationContainer.addEventListener("click", function(e) {
  if (window.innerWidth <= 500) {
    navigationMenuVisibility = !navigationMenuVisibility;
    const menu = document.querySelector(".navigation-flex-container");
    menu.classList.toggle("hide");
  }
});

