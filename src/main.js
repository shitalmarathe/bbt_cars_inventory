import "./style.css";
import data from "./data.json";
console.log(data);


// MARK: DOM
const yearEl = document.querySelector(".year");
// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();