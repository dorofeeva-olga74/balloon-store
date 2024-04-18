import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../../images/shopping-bag.svg';

function HeaderSections() {
  return (
    <section className='shopping-cart'>
      <nav className='shopping-cart__nav-box'>        
        <NavLink
          to='/shopping-cart'
          className='shopping-cart__nav'
          href='#shopping-cart'>
          <img
            className='shopping-cart__img'
            src={ShoppingCart}
            alt='Корзина для покупок'
          />
        </NavLink>
      </nav>
    </section>
  );
}
export default HeaderSections;
