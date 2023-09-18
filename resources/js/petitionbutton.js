let counter = 0;
let counterDisplay = document.getElementById("counter");
let incrementButton = document.getElementById("petitionbutton");

incrementButton.addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
});