import axios from 'axios';

const fetchImages = async () => {
  const url = 'https://pixabay.com/api/';
  const key = '38551841-d8533955233ba15d75df4f404';
  const filter = `?q=cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  let response = await axios.get(`${url}${filter}`).then(response => response.data);


  console.log(response.hits);

  return response;
}

export default fetchImages;