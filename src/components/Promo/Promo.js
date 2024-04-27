import React from 'react';
import Birthday from '../../images/birthday-background.png';
import NavBox from '../NavBox/NavBox';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Распродажа</h1>
        <p className='promo__text'>в честь Нового года!</p>
        <div className='promo__container-nav'>
          {/* <NavBox text={'Все акции'} style={{color: 'black', background: 'white'}}/>          
          <NavBox text={'Подробнее'} style={{color: 'white', background: 'transparent'}} /> */}
          <NavBox text={'Покажите!'} style={{color: 'black', background: 'white'}} />
        </div>
      </div>
      <div className='promo__container-img'>
        <img
          className='promo__img'
          src={Birthday}
          alt='Композиция из воздушных шаров'
        />
      </div>
    </section>
  );
}
export default Promo;
