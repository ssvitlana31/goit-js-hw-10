const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_1 = '/breeds';
const END_POINT_2 = '/images/search';
const options = {
  headers: {
    'x-api-key':
      'live_38VCYKPIOOmgKiv4hIQPloxibsK79iQMxzsVdBGdfYNAceglex2FaZKn0B2bT23p',
  },
};
const param = 'breed_ids=${breedId}';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
// fetchBreeds().then(console.log);
export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
