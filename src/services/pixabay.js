import axios from 'axios';

const KEY = '12937632-34918ac446e6c937e0643541b';
const getImages = (query, page = 1) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });
};

export default getImages;
