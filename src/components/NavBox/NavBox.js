import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBox({text, style}) {
  return (
    <>
      <nav className='nav-box'>
          <NavLink
            to='/promotions'
            className='nav-link' style={style}>
            {text}
          </NavLink>
        </nav>
    </>
  );
}
export default NavBox;