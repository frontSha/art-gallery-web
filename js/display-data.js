export const displayData = (data, container) => {
  data.forEach((artwork) => {
    let artist = artwork.artist_title === null ? "N/A" : `By ${artwork.artist_title}`;

    container.innerHTML += `
      <div class='artworkContainer'>
        <img src='https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg' onerror="this.onerror=null; this.src='./img/not_available.png';">
        <h2>${artwork.title}</h2>
        <p>${artist}</p>
      </div>
    `;
  });
}