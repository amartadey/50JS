const boxes = document.querySelector("#boxes");
const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  boxes.classList.toggle("big");
});

let yPos = 0;
for (let i = 1; i <= 4; i++) {
  let xPos = 0;
  for (let j = 1; j <= 4; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundPosition = `${xPos}px ${yPos}px`;
    boxes.appendChild(box);
    xPos = xPos - 125;
  }
  yPos = yPos - 125;
}
