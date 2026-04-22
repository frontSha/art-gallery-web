export const buildUrl = (query, page) => {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const params = `fields=title,image_id,artist_title&limit=12&page=${page}`;

  if (query) {
    return `${baseUrl}/search?q=${encodeURIComponent(query)}&${params}`;
  } else {
    return `${baseUrl}?${params}`;
  }
}