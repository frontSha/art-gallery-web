import { buildUrl } from './build-url.js';
import { makeRequest } from './api-request.js';
import { displayData } from './display-data.js';
import { getSearch } from './search.js';
import { nextPage, prevPage } from './pagination.js';
import { states } from './states.js';

const artworksContainer = document.getElementById('artworks-container');
const btnNext = document.getElementById('next-page');
const btnPrev = document.getElementById('previous-page');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

// construir url para mostrar data inicial
let url = buildUrl(states.currentQuery, states.currentPage);
const { data } = await makeRequest(url);

displayData(data, artworksContainer);

// paginación
btnNext.addEventListener('click', () => nextPage(artworksContainer));
btnPrev.addEventListener('click', () => prevPage(artworksContainer));

// búsqueda
searchBtn.addEventListener('click', () => getSearch(searchInput, artworksContainer));
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getSearch(searchInput, artworksContainer);
  }
});