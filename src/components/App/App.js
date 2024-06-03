import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderTablet from '../HeaderTablet/HeaderTablet';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FooterMobile from '../FooterMobile/FooterMobile';
import Segment from '../Segment/Segment';
import BalloonCardList from '../BalloonCardList/BalloonCardList';

function App() {
  const [isContextBurgerMenuOpened, setIsContextBurgerMenuOpened] = useState(false);
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
    <div className='app'>
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
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/categories'
          element={
            <>
              <Segment
                subtitle={'Все категории'}
                text={''}
                to={'/categories'}
                textPath={'Главная / Категории'}
              />
              <BalloonCardList subtitle={'Все категории'} />
            </>
          }
        />
      </Routes>
      <Footer isFooter={true} />
      <FooterMobile isFooter={true} />
    </div>
  );
}

export default App;
