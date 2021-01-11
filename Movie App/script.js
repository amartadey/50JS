const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=98d3923cba150d1b66861a639194786a";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=98d3923cba150d1b66861a639194786a&&query='";
let pageNumber = 1;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL + `&page=${pageNumber}`);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.total_pages);
  createPagination(data.total_pages);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title} </h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>OverView</h3>
          <small style="color:orange">Release Date -  ${release_date} <br></small>
          ${overview}
        </div>
      `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function createPagination(pages) {
  for (let i = 1; i <= pages; i++) {
    const button = document.createElement("div");
    button.classList.add("page");
    button.innerHTML = `<div class="page">${i}</div>`;
    document.getElementById("pagination").appendChild(button);
    button.addEventListener("click", () => {
      getMovies(API_URL + `&page=${i}`);
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm != "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
