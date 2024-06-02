import React from 'react';
import BurgenMenuWhiteImg from '../../images/BurgenMenuImgWhite.svg.svg';
import ContextBurgerMenu from '../../components/ContextBurgerMenu/ContextBurgerMenu';

function CatalogBtn({ onCloseOverlay, isOpen, onClose, setIsContextBurgerMenuOpened }) {
  const handleContextBurgerMenuClick = () => {
    setIsContextBurgerMenuOpened(true);
  };
  return (
    <>
      <button
        className='catalog-btn'
        type='button'
        onClick={handleContextBurgerMenuClick}>
        <img
          className='catalog-burgen-img'
          src={BurgenMenuWhiteImg}
          alt='Изображение БургерМеню'
        />
        Каталог
      </button>
      <ContextBurgerMenu
        isOpen={isOpen}
        onClose={onClose}
        onCloseOverlay={onCloseOverlay}
      />
    </>
  );
}

export default CatalogBtn;
