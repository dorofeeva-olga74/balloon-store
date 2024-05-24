// import { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop.js';
import HeaderBottom from '../HeaderBottom/HeaderBottom.js';

function Header({ isHeader }) {
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <HeaderTop isHeader={isHeader} />
          <HeaderBottom />
        </div>
      </header>
    </>
  );
}
export default Header;
