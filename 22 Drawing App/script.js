const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const download = document.querySelector("#download");
let color = "black";
let isPressed = false;
let x, y;
const clear = document.querySelector("#clear");
const colorSelector = document.querySelector("#color");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const sizebox = document.querySelector("#size");
let size = sizebox.innerHTML;

download.addEventListener("click", () => {
  var img = canvas.toDataURL("image/png");
  document.write('<img src="' + img + '"/>');
});

increase.addEventListener("click", () => {
  if (size < 50) {
    size++;
    sizebox.innerHTML = size;
  }
});
decrease.addEventListener("click", () => {
  if (size > 1) {
    size--;
    sizebox.innerHTML = size;
  }
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorSelector.addEventListener("change", () => {
  color = colorSelector.value;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
