// import { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop.js';
import HeaderBottom from '../HeaderBottom/HeaderBottom.js';

function Header({ isHeader, isOpen, setIsContextBurgerMenuOpened, onClose, onCloseOverlay }) {
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <HeaderTop
            isHeader={isHeader}
            isOpen={isOpen}
            setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
            onClose={onClose}
            onCloseOverlay={onCloseOverlay}
          />
          <HeaderBottom />
        </div>
      </header>
    </>
  );
}
export default Header;
