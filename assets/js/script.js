let navigationMenuVisibility = false;

const getDevs = () => ({
  "React I": [
    {
      name: "Aaron Doran"
    },
    {
      name: "Vitaliy Mikhaylyuk"
    }
  ],
  "React II": [
    {
      name: "Ronald Goodwin"
    },
    {
      name: "Paul Edwards"
    }
  ],
  "Node API": [
    {
      name: "Christopher Cruz"
    },
    {
      name: "Iris Tristan Jitomo"
    }
  ],
  "Web UI": [
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

const devLink = document.createElement("a");
const devContent = document.createElement("section");
devContent.textContent = "Developers";
devContent.classList = "navigation-item";
devLink.appendChild(devContent);

const navLinkContainer = document.querySelector(".navigation-flex-container");
navLinkContainer.prepend(devLink);

devLink.addEventListener("click", function(e) {
  // create modal and cast overlay
  const modalContent = document.querySelector(".modal-content");
  const devObject = getDevs();

  // go through each title => React I, React II... etc

  for (let [title, listOfDevs] of Object.entries(devObject)) {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;

    listOfDevs.forEach(({ name }) => {
      const devSection = document.createElement("section");
      devSection.textContent = name;
      sectionTitle.appendChild(devSection);
    });

    modalContent.appendChild(sectionTitle);
  }
});
