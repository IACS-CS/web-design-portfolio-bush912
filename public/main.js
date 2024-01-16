// Write JavaScript here.
console.log('main.js loaded successfully!')

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function rainbowColorFade(element) {
  let intervalId;
  let iterations = 0;

  function changeColor() {
    const color = getRandomColor();
    element.style.color = color;

    iterations++;
    if (iterations === 30) {
      clearInterval(intervalId);
      element.style.color = ""; 
    }
  }

  intervalId = setInterval(changeColor, 100);
}

document.getElementById("rainbowHeader").addEventListener("click", function () {
  rainbowColorFade(this);
});

let popUp1Image = document.getElementById("pop-up-1");

popUp1Image.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1)"; 
});

popUp1Image.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});
