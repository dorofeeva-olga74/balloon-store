import React from 'react';
import BurgenMenuWhiteImg from '../../images/BurgenMenuImgWhite.svg.svg';

function CatalogBtn() {
  return (
    <button
      className='catalog-btn'
      type='button'>
      <img
          className='catalog-burgen-img'
          src={BurgenMenuWhiteImg}
          alt='Изображение БургерМеню'
        />
      Каталог
    </button>
  );
}

export default CatalogBtn;
