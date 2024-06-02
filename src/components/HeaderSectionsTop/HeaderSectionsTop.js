import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';

function HeaderSectionsTop({ isContextMenu, title, to }) {
  return (
    <section className={`sections-top ${isContextMenu ? 'sections-top__context-menu' : ''}`}>
      <nav className={`${isContextMenu ? 'sections-top__nav-box-context-menu' : 'sections-top__nav-box'}`}>
        <HeaderSection
          isContextMenu={isContextMenu}
          className='sections__nav-box'
          title='Акции'
          to='/promotions'
        />
        <HeaderSection
          className='sections__nav-box'
          isContextMenu={isContextMenu}
          title='Галерея'
          to='/gallery'
        />
        <HeaderSection
          className='sections__nav-box'
          isContextMenu={isContextMenu}
          title='Контакты'
          to='/contacts'
        />
        <HeaderSection
          isContextMenu={isContextMenu}
          title='Отзывы'
          to='/reviews'
        />
        <HeaderSection
          className='sections__nav-box'
          isContextMenu={isContextMenu}
          title='Доставка'
          to='/delivery'
        />
      </nav>
    </section>
  );
}
export default HeaderSectionsTop;
