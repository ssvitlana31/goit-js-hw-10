import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEL = document.querySelector('.cat-info');
const loaderTextEl = document.querySelector('.loader-text');
const errorEl = document.querySelector('.error');

breedSelectEl.addEventListener('change', onChangeSelectEl);

errorEl.classList.add('is-hidden');

function onChangeSelectEl() {
  const selectedCat = breedSelectEl.value;
  loaderTextEl.classList.remove('is-hidden');
  catInfoEL.classList.add('is-hidden');
  fetchCatByBreed(selectedCat)
    .then(catInfo => {
      renderPage(catInfo);
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderTextEl.classList.add('is-hidden');
      catInfoEL.classList.remove('is-hidden');
    });
}

fetchBreeds()
  .then(data => {
    const markup = data
      .map(el => {
        return `<option value="${el.id}">${el.name}</option>`;
      })
      .join('');
    breedSelectEl.innerHTML = markup;
    new SlimSelect({
      breedSelectEl: '.breed-select',
    });
    breedSelectEl.classList.remove('is-hidden');
  })
  .catch(error => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  })
  .finally(() => {
    loaderTextEl.classList.add('is-hidden');
  });

function renderPage(data) {
  const markup = `
        <h2 class="header-cat-info ">${data[0].breeds[0].name}</h2>
        <section class = "section-cat">
        <div class = "div-cat-left">
        <img class="img-cat-info" src="${data[0].url}" alt="cat" width = "450" height = auto>
        </div>
        <div class = "div-cat-right">
        <p class="text-cat-info-first"><span class = "span">Description: </span>${data[0].breeds[0].description}</p>
        <p class="text-cat-info-second"><span class = "span">Temperament: </span>${data[0].breeds[0].temperament}</p>
        </div>
        </section>
        `;
  catInfoEL.innerHTML = markup;
}
