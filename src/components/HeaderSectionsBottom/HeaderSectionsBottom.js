import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';

function HeaderSectionsBottom({ title, to }) {
  return (
    <section className='sections'>
      <nav className='sections__nav-box'>
        <HeaderSection
          title='Латексные шары'
          to='/latex-balloons'          
        />
        <HeaderSection
          title='Фольгированные шары'
          to='/foil-balloons'
        />
        <HeaderSection
          title='Цифры'
          to='/numbers'
        />
        <HeaderSection
          title='3D Сферы'
          to='/spheres'
        />
        <HeaderSection
          title='Хромовые шары'
          to='/chrome-balloons'
        />
      </nav>
    </section>
  );
}
export default HeaderSectionsBottom;
