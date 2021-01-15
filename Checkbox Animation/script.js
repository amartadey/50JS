const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
    const fas = toggle.nextElementSibling.querySelector("i");
    if (toggle.checked) {
      fas.className = "fas fa-sun";
    } else {
      fas.className = "fas fa-moon";
    }
  });
});

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap == theClickedOne) {
      good.checked = false;
    }
    if (fast == theClickedOne) {
      cheap.checked = false;
    }
  }
}
