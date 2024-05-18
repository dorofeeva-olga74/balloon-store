import React from 'react';
import Logo from '../Logo/Logo';
import CompanyContactInfo from '../CompanyContactInfo/CompanyContactInfo';
import SocialMediaImg from '../SocialMediaImg/SocialMediaImg';
import IconsInstagram from '../../images/icons-instagram.svg';
import IconsWhatsApp from '../../images/icons-whatsapp.svg';
import IconsVK from '../../images/icons-vk.svg';

function Footer({ isFooter }) {
  return (
    <footer className='footer'>
      <Logo isFooter={isFooter} />
      <CompanyContactInfo
        address={'Заветный,  ул. Энгельса, 57/2'}
        businessHours={'Круглосуточно'}
      />
      <CompanyContactInfo
        address={'Армавир,  ул. 8 Марта, 365'}
        businessHours={'Пн-Пт: 10:00-20:00'}
      />
      <div className='footer__contacts-set'>
        <span className='footer__contact'>+7 918 158 41 19</span>
        <div className='footer__social-box'>
          <SocialMediaImg src={IconsInstagram} />
          <SocialMediaImg src={IconsWhatsApp} />
          <SocialMediaImg src={IconsVK} />
          <p className='footer__text'>мы в соц. сетях</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
