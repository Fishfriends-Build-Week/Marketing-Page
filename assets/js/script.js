const getDevs = () => ({
  "React I Devs": [
    {
      name: "Aaron Doran"
    },
    {
      name: "Vitaliy Mikhaylyuk"
    }
  ],
  "React II Devs": [
    {
      name: "Ronald Goodwin"
    },
    {
      name: "Paul Edwards"
    }
  ],
  "Node Devs": [
    {
      name: "Christopher Cruz"
    },
    {
      name: "Iris Tristan Jitomo"
    }
  ],
  "Web UI Devs": [
    {
      name: "Victor Tran"
    }
  ]
});

let navigationMenuVisibility = false;

const navigationContainer = document.querySelector(".navigation");
navigationContainer.addEventListener("click", function() {
  if (window.innerWidth <= 500) {
    navigationMenuVisibility = !navigationMenuVisibility;
    const menu = document.querySelector(".navigation-flex-container");
    menu.classList.toggle("hide");
  }
});

const createDevLink = () => {
  let modalVisibility = false;
  // navigation variables
  const devLink = document.createElement("a");
  const devContent = document.createElement("section");
  const navLinkContainer = document.querySelector(".navigation-flex-container");

  // modal variables
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const backdrop = document.querySelector(".modal-backdrop");
  const devObject = getDevs();

  devContent.textContent = "Developers";
  devContent.classList = "navigation-item";
  devLink.appendChild(devContent);
  navLinkContainer.prepend(devLink);

  const clickTouchHandler = e => {
    e.stopPropagation();
    modalVisibility = true;
    const createDevSections = () => {
      for (let [title, listOfDevs] of Object.entries(devObject)) {
        const devSection = document.createElement("section");
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = title;
        devSection.appendChild(sectionTitle);

        listOfDevs.forEach(({ name }) => {
          const developerName = document.createElement("section");
          developerName.textContent = name;
          developerName.classList = "modal-developer";
          devSection.appendChild(developerName);
        });
        modalContent.appendChild(devSection);
      }
    };

    const toggleModalVisibility = action => {
      switch (action) {
        case "add":
          [modal, modalContent, backdrop].forEach(htmlElement =>
            htmlElement.classList.add("modal-on-top")
          );
          break;
        case "remove":
          [modal, modalContent, backdrop].forEach(htmlElement =>
            htmlElement.classList.remove("modal-on-top")
          );
        default:
          return;
      }
    };

    createDevSections();
    toggleModalVisibility(modalVisibility ? "add" : "remove");

    backdrop.addEventListener("click", function(e) {
      modalVisibility = false;
      toggleModalVisibility(modalVisibility ? "add" : "remove");
      while (modalContent.firstChild) {
        modalContent.removeChild(modalContent.firstChild);
      }
    });
  };

  devLink.addEventListener("click", clickTouchHandler);
  
};

createDevLink();
