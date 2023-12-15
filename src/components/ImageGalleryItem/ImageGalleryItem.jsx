import React from 'react';
import css from './ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

const ImageGalleryItems = ({ queryImg }) => {
  console.log(queryImg);
  //  console.log(onOpenModalImg);

  return (
    <ul className={css.ImageGallery}>
      {queryImg.map(item => (
        <li key={nanoid()} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={item.webformatURL}
            alt={item.tags}
            // onClick={onOpenModalImg}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItems;
