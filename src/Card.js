function Card(name, description, image) {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
      <div class="card">
          <img
            src=${image}
            class="card-img-top"
            alt=${name}
          />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      `;
    return card;
  }
  
  export default Card;