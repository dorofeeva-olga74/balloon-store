import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderSections() {
  return (
    <section className='sections'>
      <nav className='sections__nav-box'>
        <NavLink
          to='/promotions'
          className='sections__nav'
          href='#promotions'>
          Акции
        </NavLink>
        <NavLink
          to='/delivery'
          className='sections__nav'
          href='#delivery'>
          Доставка
        </NavLink>
        <NavLink
          to='/contacts'
          className='sections__nav'
          href='#contacts'>
          Контакты
        </NavLink>
        <NavLink
          to='/gallery'
          className='sections__nav'
          href='#gallery'>
          Контакты
        </NavLink>
        <NavLink
          to='/reviews'
          className='sections__nav'
          href='#reviews'>
          Контакты
        </NavLink>        
      </nav>      
    </section>
  );
}
export default HeaderSections;
