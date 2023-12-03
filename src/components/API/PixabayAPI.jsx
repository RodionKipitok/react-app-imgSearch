import axios from 'axios';

const fetchImages = async (searchTerm,page) => {
  console.log(page);
  console.log(searchTerm);
  const url = 'https://pixabay.com/api/';
  const key = '38551841-d8533955233ba15d75df4f404';
  const filter = `?q=${searchTerm}&page=1&key=${key}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  
  let response = await axios
    .get(`${url}${filter}`)
    .then(response => response.data);

 
  console.log(response);
  return response;
};

export default fetchImages;
