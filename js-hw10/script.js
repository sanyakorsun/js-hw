const API_KEY = 'e1687239';
const BASE_URL = 'https://www.omdbapi.com/';

const searchForm = document.getElementById('search-form');
const titleInput = document.getElementById('title');
const typeSelect = document.getElementById('type');

const filmsSection = document.getElementById('films-section');
const filmsList = document.getElementById('films-list');
const paginationContainer = document.getElementById('pagination');

const detailsSection = document.getElementById('details-section');
const filmDetails = document.getElementById('film-details');

let currentSearchTitle = '';
let currentSearchType = '';
let currentPage = 1;

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  currentSearchTitle = titleInput.value.trim();
  currentSearchType = typeSelect.value;
  currentPage = 1;

  if (currentSearchTitle) {
    detailsSection.classList.add('hidden');
    fetchMovies(currentSearchTitle, currentSearchType, currentPage);
  }
});

function fetchMovies(title, type, page) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&type=${type}&page=${page}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      filmsSection.classList.remove('hidden');

      if (data.Response === 'True') {
        renderFilmsList(data.Search);
        renderPagination(parseInt(data.totalResults), page);
      } else {
        filmsList.innerHTML = `<p class="not-found">Movie not found!</p>`;
        paginationContainer.innerHTML = '';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      filmsList.innerHTML = `<p class="not-found">Error loading data. Please try again.</p>`;
      paginationContainer.innerHTML = '';
    });
}

function renderFilmsList(films) {
  filmsList.innerHTML = '';

  films.forEach(film => {
    const poster = film.Poster !== 'N/A' ? film.Poster : 'https://via.placeholder.com/100x140?text=No+Image';

    const card = document.createElement('div');
    card.className = 'film-card';
    card.innerHTML = `
      <img src="${poster}" alt="${film.Title}">
      <div class="film-info">
        <div>
          <div class="film-type">${film.Type}</div>
          <div class="film-title">${film.Title}</div>
          <div class="film-year">${film.Year}</div>
        </div>
        <button class="details-btn" onclick="fetchMovieDetails('${film.imdbID}')">Details</button>
      </div>
    `;

    filmsList.appendChild(card);
  });
}

function renderPagination(totalResults, page) {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalResults / 10);

  if (totalPages <= 1) return;

  const prevBtn = document.createElement('button');
  prevBtn.innerText = '<<';
  prevBtn.disabled = page === 1;
  prevBtn.addEventListener('click', () => goToPage(page - 1));
  paginationContainer.appendChild(prevBtn);

  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, startPage + 5);

  if (endPage - startPage < 5) {
    startPage = Math.max(1, endPage - 5);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.innerText = i;
    if (i === page) pageBtn.classList.add('active');
    pageBtn.addEventListener('click', () => goToPage(i));
    paginationContainer.appendChild(pageBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.innerText = '>>';
  nextBtn.disabled = page === totalPages;
  nextBtn.addEventListener('click', () => goToPage(page + 1));
  paginationContainer.appendChild(nextBtn);
}

function goToPage(page) {
  currentPage = page;
  fetchMovies(currentSearchTitle, currentSearchType, currentPage);
}

function fetchMovieDetails(imdbID) {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;

  fetch(url)
    .then(response => response.json())
    .then(film => {
      if (film.Response === 'True') {
        renderMovieDetails(film);
        detailsSection.classList.remove('hidden');
        detailsSection.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch(error => console.error('Error fetching details:', error));
}

function renderMovieDetails(film) {
  const poster = film.Poster !== 'N/A' ? film.Poster : 'https://via.placeholder.com/200x300?text=No+Image';

  filmDetails.innerHTML = `
    <img src="${poster}" alt="${film.Title}">
    <table class="details-table">
      <tr>
        <td class="label">Title:</td>
        <td>${film.Title}</td>
      </tr>
      <tr>
        <td class="label">Released:</td>
        <td>${film.Released}</td>
      </tr>
      <tr>
        <td class="label">Genre:</td>
        <td>${film.Genre}</td>
      </tr>
      <tr>
        <td class="label">Country:</td>
        <td>${film.Country}</td>
      </tr>
      <tr>
        <td class="label">Director:</td>
        <td>${film.Director}</td>
      </tr>
      <tr>
        <td class="label">Writer:</td>
        <td>${film.Writer}</td>
      </tr>
      <tr>
        <td class="label">Actors:</td>
        <td>${film.Actors}</td>
      </tr>
      <tr>
        <td class="label">Awards:</td>
        <td>${film.Awards}</td>
      </tr>
    </table>
  `;
}
```<FollowUp>
<Suggest>Хочеш дізнатися, як створити документ або зберегти цей код у Google Drive?</Suggest>
<Suggest>Чи потрібна допомога з підключенням реального OMDB API ключа або додаванням стилів?</Suggest>
</FollowUp>
