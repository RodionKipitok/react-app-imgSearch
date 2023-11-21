import axios from 'axios';

const fetchImages = async term => {
  const url = 'https://pixabay.com/api/';
  const key = '38551841-d8533955233ba15d75df4f404';
  const filter = `?q=${term}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=16`;
   
  console.log(term);
  let response = await axios
    .get(`${url}${filter}`)
    .then(response => response.data);

 

  return response.hits;
};

export default fetchImages;
