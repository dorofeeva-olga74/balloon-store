// import { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop.js';
import HeaderBottom from '../HeaderBottom/HeaderBottom.js';

function Header() {
  return (
    <>
      <header className='header'>
        <HeaderTop />
        <HeaderBottom />
      </header>
    </>
  );
}
export default Header;
