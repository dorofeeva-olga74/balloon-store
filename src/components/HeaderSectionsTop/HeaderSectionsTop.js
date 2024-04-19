import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';

function HeaderSectionsTop({ title, to }) {
  return (
    <section className='sections'>
      <nav className='sections__nav-box'>
        <HeaderSection
          title='Акции'
          to='/promotions'          
        />
        <HeaderSection
          title='Доставка'
          to='/delivery'
        />
        <HeaderSection
          title='Контакты'
          to='/contacts'
        />
        <HeaderSection
          title='Галерея'
          to='/gallery'
        />
        <HeaderSection
          title='Отзывы'
          to='/reviews'
        />
      </nav>
    </section>
  );
}
export default HeaderSectionsTop;
