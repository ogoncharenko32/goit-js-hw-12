import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('ul');
  gallery.classList.add('gallery');

  const imageFragment = images
    .map(img => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" style="width: 360px; height: 200px;" />
          <ul class="infobox">
            <li class="info">
              <h2 class="info-header">Likes</h2>
              <p class="info-text">${img.likes}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Views</h2>
              <p class="info-text">${img.views}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Comments</h2>
              <p class="info-text">${img.comments}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Downloads</h2>
              <p class="info-text">${img.downloads}</p>
            </li>
          </ul>
        </a>
      </li>
    `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imageFragment);

  const lightbox = new SimpleLightbox('.gallery .gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}
