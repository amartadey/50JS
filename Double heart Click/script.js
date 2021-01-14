const loveMe = document.querySelector(".loveme");
const times = document.querySelector("#times");
let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

let createHeart = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  heart.style.top = y + "px";
  heart.style.left = x + "px";
  loveMe.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 600);
  times.innerHTML = ++timesClicked;
};
