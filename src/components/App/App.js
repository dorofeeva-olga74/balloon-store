import React, { useEffect, useState } from 'react';
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderTablet from '../HeaderTablet/HeaderTablet';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FooterMobile from '../FooterMobile/FooterMobile';

function App() {
  const [isContextBurgerMenuOpened, setIsContextBurgerMenuOpened] = useState(false);
  // const [isFooter, setIsFooter] = useState(true);
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
      <HeaderTablet
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
      <Main />
      <Footer isFooter={true} />
      <FooterMobile isFooter={true} />
    </>
  );
}

export default App;
