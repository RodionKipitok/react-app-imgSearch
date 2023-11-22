import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ queryImg }) => {
  // console.log(queryImg);

  return (
    <ul className={css.ImageGallery}>
      {queryImg.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
 
          <img className={css.ImageGalleryItemImage} src={item.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItem;
