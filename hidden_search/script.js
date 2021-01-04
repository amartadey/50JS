const search = document.querySelector(".search");

search.querySelector(".btn").addEventListener("click", () => {
  search.classList.toggle("active");
  search.querySelector("input").focus();
});
