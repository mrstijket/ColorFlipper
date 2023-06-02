const colors = ["green", "red", "yellow", "blue", "orange",
  "cyan", "white", "black", "teal", "gray", "brown", "darkblue",
  "darkred", "darkgreen", "darkorange", "aqua", "blueviolet",
  "chocolate", "gold", "lawngreen", "tan", "seagreen", "darkgray",
  "violet", "darkviolet"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  //Get random number between 0 and (colors.length - 1)
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}