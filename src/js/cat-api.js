const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_1 = 'breeds';
const END_POINT_2 = 'images/search';
const options = {
  headers: {
    'x-api-key':
      'live_38VCYKPIOOmgKiv4hIQPloxibsK79iQMxzsVdBGdfYNAceglex2FaZKn0B2bT23p',
  },
};
const param = 'breed_ids=${breedId}';

export function fetchBreeds() {
  return fetch('${BASE_URL}/${END_POINT_1}', options).then(res => {
    if (!res.ok) {
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch('${BASE_URL}/${END_POINT_2}?${param}', options).then(res => {
    if (!res.ok) {
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    }
    return res.json();
  });
}
