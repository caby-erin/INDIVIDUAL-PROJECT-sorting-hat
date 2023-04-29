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
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

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
