function Card(data) {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
    <div class="card">
      <img
        src=${data.img}
        class="card-img-top"
        alt=${data.name}
      />
      <div class="card-body">
        <p class="card-text">${data.price.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}</p>
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Registration: ${
          data.registration ?? "N/A"
        }</h6>
        <a class="btn btn-outline-dark" href=${data.url} target="_blank">Buy</a>
      </div>
    </div>
    `;
  return card;
}

export default Card;