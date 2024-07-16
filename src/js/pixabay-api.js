import axios from 'axios';
import iziToast from 'izitoast';

export let page = 1;
export let perPage = 15;
const loadMoreButton = document.querySelector('.load-more-button');
const apiKey = '44838304-f7fe04331650310c487eefb2b';
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchImages(query) {
  page = 1;
  loadMoreButton.style.display = 'none';

  try {
    const response = await axios.get('/', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    page++;
    loadMoreButton.style.display = 'block';
    return response.data;
  } catch (error) {
    iziToast.show({
      message: error.message,
      messageColor: '#fff',
      color: '#EF4040',
      position: 'topCenter',
      timeout: 5000,
    });
  }
}

export async function fetchMore(query) {
  try {
    const responce = await axios.get('/', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    page++;
    return responce.data;
  } catch (error) {
    iziToast.show({
      message: error.message,
      messageColor: '#fff',
      color: '#EF4040',
      position: 'topCenter',
      timeout: 5000,
    });
  }
}
