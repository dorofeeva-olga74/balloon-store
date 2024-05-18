// import { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop.js';
import HeaderBottom from '../HeaderBottom/HeaderBottom.js';

function Header({isHeader}) {
  
  return (
    <>
      <header className='header'>
        <HeaderTop isHeader={isHeader} />
        <HeaderBottom />
      </header>
    </>
  );
}
export default Header;
