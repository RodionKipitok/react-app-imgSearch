import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItems = ({queryImg,onOpenModalImg}) => {
 
//  console.log(queryImg);
//  console.log(onOpenModalImg);

  return (
    <ul className={css.ImageGallery}>
      {queryImg.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={item.webformatURL}
            alt={item.tags}
            onClick={onOpenModalImg}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItems;

