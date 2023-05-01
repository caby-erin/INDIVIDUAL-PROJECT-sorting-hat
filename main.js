const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    image: "https://assets.vogue.in/photos/5f23c04f1d33754d11eaf778/2:3/w_2560%2Cc_limit/harry-potter-philosophers-stone-portrait-8.jpg"
  },
  {
    id:2,
    name: "Hermoine",
    house: "Gryffindor",
    image: "https://i.insider.com/60772a1742061500181757bc?width=700"
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg"
  },
  {
    id: 4,
    name: "Severus Snape",
    house: "Slytherin",
    image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQidtiLk8V3XXJ_ZF1eG5ZKZ-FGDPcWfKIQgi75f6YLGR0zo4tAUfiMe4gl1VucpSI_"
  },
  {
    id: 5,
    name: "Cedric Diggory",
    house: "Huffle Puff",
    image: "https://i.pinimg.com/474x/e7/c9/e9/e7c9e93c56b00652cb020e40eab91f18.jpg"
  }
];

const deathEater = [
  {
    id: 1,
    name: "Draco Malfoy",
    image: "https://e1.pxfuel.com/desktop-wallpaper/864/50/desktop-wallpaper-draco-malfoy-by-nozomibear-harry-potter-and-draco-malfoy.jpg"
  },
  {
    id: 2,
    name: "Bellatrix",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Bellatrix.jpeg"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// rendering student cards on DOM when selecting view all

const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary"> Expel </a>
    </div>
  </div>` 
  }
  renderToDom("#student-display", domString);
}

const showAllButton = document.querySelector("#all-button");
showAllButton.addEventListener('click', () => {
  cardsOnDom(students);
})


//Rendering army cards on the dom

const armyOnDom = (array) => {
  let domString = "";
  for (const expelled of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${expelled.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${expelled.name}</h5>
    </div>
  </div>` 
  }
  renderToDom("#army-display", domString);
}



const showAllArmy = document.querySelector("#all-button");
showAllArmy.addEventListener('click', () => {
  armyOnDom(deathEater);
})
