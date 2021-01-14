const loveMe = document.querySelector(".loveme");
const times = document.querySelector("#times");
let clickTime = 0;
// loveMe.addEventListener("click", (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//     console.log(clickTime);
//   }
// });

loveMe.addEventListener("click", (e) => {
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
});
