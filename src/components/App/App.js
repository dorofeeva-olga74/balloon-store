import React, { useEffect, useState } from 'react';
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

function App() {
  const [isContextBurgerMenuOpened, setIsContextBurgerMenuOpened] = useState(false);
  // const { width } = useWindowDimensions(); // Получаем ширину экрана
  // const isMobile = width < 768; // Условие для мобильных устройств
  // const isMobile = 'ontouchstart' in window; // Определение типа устройства

  // ОБРАБОТЧИК Escape
  // const isSomePopupOpen = isInfoTooltipOpened || isContextBurgerMenuOpened;
  const isSomePopupOpen = isContextBurgerMenuOpened;
  // ЗАКРЫТИЕ ПОПАПОВ
  const closeAllPopups = () => {
    setIsContextBurgerMenuOpened(false);
  };
  // ЗАКРЫТИЕ ПО ОВЕРЛЕЮ
  const handleOverlayClick = (e) => {
    if (e.target?.className?.includes('context-burger-menu') || e.target?.className?.includes('popup')) {
      closeAllPopups();
    }
  };
  // ЗАКРЫТИЕ ПО 'Escape'
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    if (isSomePopupOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isSomePopupOpen]);

  return ( 
    // <>
    //   {isMobile ? (
    //     // Рендерим HeaderMobile, если ширина экрана соответствует мобильному устройству
    //     <HeaderMobile
    //       isOpen={isContextBurgerMenuOpened}
    //       setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
    //       onClose={closeAllPopups}
    //       onCloseOverlay={handleOverlayClick}
    //     />
    //   ) : (
    //     // Рендерим Header для десктопов и планшетов
    //     <Header
    //       isOpen={isContextBurgerMenuOpened}
    //       setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
    //       onClose={closeAllPopups}
    //       onCloseOverlay={handleOverlayClick}
    //     />
    //   )}
    // </>     
    <>
      <HeaderMobile
        isOpen={isContextBurgerMenuOpened}
        setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
        onClose={closeAllPopups}
        onCloseOverlay={handleOverlayClick}
      />     
      <Header
        isOpen={isContextBurgerMenuOpened}
        setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
        onClose={closeAllPopups}
        onCloseOverlay={handleOverlayClick}
      />
    </>  
  )
}

export default App;
