const password = document.querySelector("#password");
const background = document.querySelector("#background");

password.addEventListener("input", (e) => {
  let pass = e.target.value.length;
  background.style.filter = `blur(${20 - pass * 1.5}px)`;
});
