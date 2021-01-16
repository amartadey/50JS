const imgs = document.querySelectorAll("img");
const lis = document.querySelectorAll("li");
lis.forEach((li, idx) => {
  li.addEventListener("click", () => {
    imgs.forEach((img) => {
      img.classList.remove("show");
    });
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    console.log(idx);
    imgs[idx].classList.add("show");
    lis[idx].classList.add("active");
  });
});
