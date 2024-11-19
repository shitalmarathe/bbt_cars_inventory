import "./style.css";
import data from "./data.json";
import Card from "./Card";

// MARK: DOM
const cardsRow = document.querySelector("#cards-row");
const yearEl = document.querySelector(".year");

data.forEach((car) => {
  const card = Card(car.price, car.name, car.img);
  cardsRow.appendChild(card);
});

// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();


