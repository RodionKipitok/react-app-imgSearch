import React from 'react';


const ImageGalleryItem = ({ queryImg }) => {
  console.log(queryImg);

  return (
    <ul className="gallery">
      {queryImg.map(item => (
        <li key={item.id} className="gallery-item">
        <img src={item.webformatURL} alt="" />
      </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItem;
