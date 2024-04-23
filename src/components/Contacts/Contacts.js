import React from 'react';
import Rectangle from '../../images/Rectangle.svg';
import SocialMediaImg from '../SocialMediaImg/SocialMediaImg';
import IconsInstagram from '../../images/icons-instagram.svg';
import IconsWhatsApp from '../../images/icons-whatsapp.svg';

function Contacts() {
  return (
    <>
      <div className='contacts__set'>
        <div className='contacts__tel-box'>
          <img
            className='contacts__rectangle'
            src={Rectangle}
            alt='Угол вниз'
          />
          <div className='contacts__tel-number'>+7 861 204 24 46</div>
        </div>
        <div className='contacts__social-box'>
          <SocialMediaImg src={IconsInstagram} />
          <SocialMediaImg src={IconsWhatsApp} />
        </div>
      </div>
    </>
  );
}

export default Contacts;
