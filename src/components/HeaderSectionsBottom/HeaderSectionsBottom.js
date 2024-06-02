import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';

function HeaderSectionsBottom({ title, to, className }) {
  return (
    <section className='sections-bootom'>
      <nav className='sections-bootom__nav-box'>
        <HeaderSection 
          className='sections__nav-box_bootom'
          title='Латексные шары'
          to='/latex-balloons'
        />
        <HeaderSection
          className='sections__nav-box_bootom'
          title='Фольгированные шары'
          to='/foil-balloons'
        />
        <HeaderSection
          className='sections__nav-box_bootom'
          title='Цифры'
          to='/numbers'
        />
        <HeaderSection
          className='sections__nav-box_bootom'
          title='3D Сферы'
          to='/spheres'
        />
        <HeaderSection
          className='sections__nav-box_bootom'
          title='Хромовые шары'
          to='/chrome-balloons'
        />
      </nav>
    </section>
  );
}
export default HeaderSectionsBottom;
