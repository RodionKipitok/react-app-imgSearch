import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItems = ({queryImg}) => {
 
 

  return (
    <ul className={css.ImageGallery}>
      {queryImg.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={item.webformatURL}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItems;


