import shuffle from "shuffle-array";
import "./style.css";
import data from "./data.json";
import Card from "./Card";
import Fuse from "fuse.js";


// MARK: DOM
import { inputEl, cardsRow, yearEl } from "./domselection";



// Functions
function showCards(data) {
  cardsRow.innerHTML = ""; // Clear the cardsRow
  const fragment = document.createDocumentFragment(); // Performance

  data.forEach((car) => {
    const card = Card(car);
    fragment.appendChild(card);
  });

  cardsRow.appendChild(fragment);
}


// Event Listeners
inputEl.addEventListener("input", (e) => {
  const currentValue = e.target.value;

  if (!currentValue) {
    showCards(data);
    return;
  }

  // Add fuzzy searching
  const fuse = new Fuse(data, {
    keys: ["name"],
    threshold: 0.4,
  });

  const output = fuse.search(currentValue);
  const filtered = output.map((result) => result.item);

  showCards(filtered);
});


document.addEventListener("DOMContentLoaded", () => {
  showCards(shuffle(data));
});



// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();

