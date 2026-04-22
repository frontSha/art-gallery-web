import { makeRequest } from './api-request.js';
import { buildUrl } from './build-url.js';
import { displayData } from './display-data.js';
import { states } from './states.js';

export const getSearch = async (searchInput, container) => {
  if (searchInput.value !== '') {
      states.currentQuery = searchInput.value;
      const url = buildUrl(states.currentQuery, 1); //current page actualizada a 1
      const { data } = await makeRequest(url);
  
      const searchResultsMessage = document.querySelector('.result-message');
  
      container.innerHTML = '';
      searchResultsMessage.style.display = 'block';
  
      if (data.length) {
        searchResultsMessage.innerText = `Showing results for "${searchInput.value}"`;
      } else {
        searchResultsMessage.innerText = `No results for "${searchInput.value}"`;
      }
  
      displayData(data, container);
      searchInput.value = '';
    }
};