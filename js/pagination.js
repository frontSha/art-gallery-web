import { makeRequest } from './api-request.js';
import { buildUrl } from './build-url.js';
import { displayData } from './display-data.js';
import { states } from './states.js';

export const nextPage = async (container) => {
  container.innerHTML = '';

  states.currentPage++;
  const url = buildUrl(states.currentQuery, states.currentPage);
  const { data } = await makeRequest(url);

  displayData(data, container);
}

export const prevPage = async (container) => {
  if (states.currentPage > 1) {
    container.innerHTML = '';

    states.currentPage--;
    const url = buildUrl(states.currentQuery, states.currentPage);
    const { data } = await makeRequest(url);

    displayData(data, container);
  }
}