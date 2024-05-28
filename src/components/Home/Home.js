import React from 'react';
import Birthday from '../../images/birthday-background.png';
import NavBox from '../NavBox/NavBox';

function Home() {
  return (
    <section className='home'>
      <div className='home__container'>
        <div className='home__content'>
          <h1 className='home__title'>Распродажа</h1>
          <div className='home__text-container'>
            <p className='home__text'>в честь Нового года!</p>            
          </div>
          <div className='home__container-nav'>
            <NavBox
              text={'Все акции'}
              style={{ color: 'black', background: 'white' }}
            />
            <NavBox
              text={'Подробнее'}
              style={{ color: 'white', background: 'transparent' }}
            />
          </div>
          <div className='home__container-nav_mobile'>
            <NavBox
              text={'Покажите!'}
              style={{ color: 'black', background: 'white' }}
            />
          </div>
        </div>
      </div>
      <div className='home__container-img'>
        <img
          className='home__img'
          src={Birthday}
          alt='Композиция из воздушных шаров'
        />
      </div>
    </section>
  );
}
export default Home;
