const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Hi, I am Amarta Dey";
let idx = 1;
let speed = 300 / speedEl.value;
let check = 0;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  if (idx > text.length) {
    check = 1;
  } else if (idx == 1) {
    check = 0;
  }

  if (check == 1) {
    idx--;
  } else {
    idx++;
  }
  setTimeout(writeText, speed);
}
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
