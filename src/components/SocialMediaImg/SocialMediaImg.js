import React from 'react';
import { NavLink } from 'react-router-dom';

function SocialMediaImg({ src, isFooter, className }) {
  return (
    <section className={`social-media ${isFooter ? 'social-media__footer' : className}`}>
      <nav className='social-media__nav-box'>
        <NavLink
          to='/instagram'
          className='social-media__nav'>
          <img
            className='social-media__img'
            src={src}
            alt='Логотип социальной сети'
          />
        </NavLink>
      </nav>
    </section>
  );
}
export default SocialMediaImg;
