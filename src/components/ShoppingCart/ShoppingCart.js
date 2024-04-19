import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartImg from '../../images/shopping-bag.svg';

function ShoppingCart() {
  return (
    <section className='shopping-cart'>
      <nav className='shopping-cart__nav-box'>
        <NavLink
          to='/shopping-cart'
          className='shopping-cart__nav'>
          <img
            className='shopping-cart__img'
            src={ShoppingCartImg}
            alt='Корзина для покупок'
          />
        </NavLink>
      </nav>
    </section>
  );
}
export default ShoppingCart;
