let navigationMenuVisibility = false;
let modalVisibility = false;

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

const navigationContainer = document.querySelector(".navigation");
navigationContainer.addEventListener("click", function() {
  if (window.innerWidth <= 500) {
    navigationMenuVisibility = !navigationMenuVisibility;
    const menu = document.querySelector(".navigation-flex-container");
    menu.classList.toggle("hide");
  }
});

const createDevLink = () => {
  const devLink = document.createElement("a");
  const devContent = document.createElement("section");
  const navLinkContainer = document.querySelector(".navigation-flex-container");

  devContent.textContent = "Developers";
  devContent.classList = "navigation-item";
  devLink.appendChild(devContent);
  navLinkContainer.prepend(devLink);

  devLink.addEventListener("click", function(e) {
    // create modal and cast overlay
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const backdrop = document.querySelector(".modal-backdrop");
    const devObject = getDevs();
  
    modalVisibility = true;
    // go through each title => React I, React II... etc
  
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
    
    if (modalVisibility) {
      [modal, modalContent, backdrop].forEach(htmlElement =>
        htmlElement.classList.add("modal-on-top")
      );
    }
  
    backdrop.addEventListener('click', function(e) {
      modalVisibility = false;
      
      if (!modalVisibility) {
        [modal, modalContent, backdrop].forEach(htmlElement =>
          htmlElement.classList.remove("modal-on-top")
        );
        while (modalContent.firstChild) {
          modalContent.removeChild(modalContent.firstChild);
        }
      }

    })
  });
  

};

createDevLink();

