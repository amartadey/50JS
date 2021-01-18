const resultDiv = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listitems = [];
getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=20");

  const { results } = await res.json();

  // Clear results
  resultDiv.innerHTML = ``;

  results.forEach((result) => {
    const li = document.createElement("li");
    listitems.push(li);
    li.innerHTML = `
          <img
            src="${result.picture.large}"
            alt="Sarah"
          />
          <div class="user-info">
            <h4>${result.name.title} ${result.name.first} ${result.name.last}</h4>
            <p>${result.location.street.name}, ${result.location.city}, ${result.location.state}, ${result.location.country}</p>
          </div>
        `;
    resultDiv.appendChild(li);
  });
}

function filterData(searchterm) {
  console.log(searchterm);
  listitems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchterm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
