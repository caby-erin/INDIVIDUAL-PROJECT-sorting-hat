const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "gryffindor",
    image: "https://assets.vogue.in/photos/5f23c04f1d33754d11eaf778/2:3/w_2560%2Cc_limit/harry-potter-philosophers-stone-portrait-8.jpg"
  },
  {
    id:2,
    name: "Hermoine",
    house: "gryffindor",
    image: "https://i.insider.com/60772a1742061500181757bc?width=700"
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "ravenclaw",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg"
  },
  {
    id: 4,
    name: "Severus Snape",
    house: "slytherin",
    image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQidtiLk8V3XXJ_ZF1eG5ZKZ-FGDPcWfKIQgi75f6YLGR0zo4tAUfiMe4gl1VucpSI_"
  },
  {
    id: 5,
    name: "Cedric Diggory",
    house: "huffle puff",
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

//Modal Functionality
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//Filter House Buttons

const filter = (array, snakeString) => {
  const snakeArray = [];
  for (const snake of array) {
    if (snake.house === snakeString) {
      snakeArray.push(snake);
    }
  }
  return snakeArray;
}
const showSnakeButton = document.querySelector("#snake");

showSnakeButton.addEventListener('click', () => {
  const snakeStudent = filter(students, "slytherin");
  cardsOnDom(snakeStudent);
});

const clawFilter = (array, clawString) => {
  const clawArray = [];
  for (const claw of array){
    if (claw.house === clawString){
      clawArray.push(claw);
    }
  }
  return clawArray;
}
const showClawButton = document.querySelector("#claw");

showClawButton.addEventListener('click', () => {
  const clawStudent = clawFilter (students, "ravenclaw");
  cardsOnDom(clawStudent);
})

const birdFilter = (array, birdString) => {
  const birdArray = [];
  for (const bird of array){
    if (bird.house === birdString){
      birdArray.push(bird);
    }  
  }
  return birdArray;
}
const showBirdButton = document.querySelector("#bird");

showBirdButton.addEventListener('click', () => {
  const birdStudent = birdFilter (students, "gryffindor");
  cardsOnDom(birdStudent);
})

const puffFilter =(array, puffString) =>{
  const puffArray = [];
  for (const puff of array){
    if (puff.house === puffString){
      puffArray.push(puff);
    }
  }
  return puffArray;
}
const showPuffButton = document.querySelector("#puff");

showPuffButton.addEventListener('click', () =>{
  const  puffStudent = puffFilter (students, "huffle puff");
  cardsOnDom(puffStudent);
})
//Create Form and Button

const form = document.querySelector ('form');

con
