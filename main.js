const counter = document.querySelector(".count");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = 0;

function updateCounter() {
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "#0f0";
  } else if (count < 0) {
    counter.style.color = "#f00";
  } else {
    counter.style.color = "#000";
  }
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

updateCounter();
