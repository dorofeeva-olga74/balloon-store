import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

function HeaderSection({title, to}) {
  return (
    <>
      <nav className='sections__nav-box'>
        <RouterNavLink
          to={to}          
          className={`sections__nav ${title === 'Акции' ? 'sections__nav-action' : ''}`}
          >
          {title}
        </RouterNavLink>        
      </nav>      
    </>
  );
}
export default HeaderSection;
