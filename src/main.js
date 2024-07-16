import { fetchImages, fetchMore, page, perPage } from './js/pixabay-api';
import { renderImages, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('form input');
let query;
const form = document.querySelector('form');
const loadMoreButton = document.querySelector('.load-more-button');
let limit;

form.addEventListener('submit', async evt => {
  evt.preventDefault();
  query = input.value;
  const gallery = document.querySelector('ul');
  gallery.classList.add('gallery');
  gallery.innerHTML = '';

  showLoader();

  try {
    const data = await fetchImages(query);

    if (!data.total) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        color: '#EF4040',
        position: 'topRight',
        timeout: 2500,
        iconColor: '#fff',
        maxWidth: '432px',
      });
      loadMoreButton.style.display = 'none';
    } else {
      limit = data.totalHits;
      renderImages(data.hits);
    }
  } catch (error) {
  } finally {
    hideLoader();
  }

  form.reset();
});

loadMoreButton.addEventListener('click', async evt => {
  evt.preventDefault();
  const totalPages = Math.ceil(limit / perPage);

  loadMoreButton.style.display = 'none';
  showLoader();
  try {
    const data = await fetchMore(query);
    renderImages(data.hits);
  } catch (error) {
  } finally {
    hideLoader();
    if (page > totalPages) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fff',
        color: 'green',
        position: 'topRight',
        timeout: 4000,
        iconColor: '#fff',
        maxWidth: '432px',
      });
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  const card = document.querySelector('.gallery-item');
  const rect = card.getBoundingClientRect();
  window.scrollBy({
    top: rect.height * 2,
    behavior: 'smooth',
  });
});
