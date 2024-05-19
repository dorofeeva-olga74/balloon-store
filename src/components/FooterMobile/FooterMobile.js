import React from 'react';
import CompanyContactInfo from '../CompanyContactInfo/CompanyContactInfo';
import SocialMediaImg from '../SocialMediaImg/SocialMediaImg';
import IconsInstagram from '../../images/icons-instagram.svg';
import IconsWhatsApp from '../../images/icons-whatsapp.svg';
import IconsVK from '../../images/icons-vk.svg';

function FooterMobile() {
  return (
    <footer className='footer-mobile'>     
      <div className='footer-mobile__contacts-set'>
        <p className='footer-mobile__text'>Контакты</p>
        <span className='footer-mobile__contact'>+7 918 158 41 19</span>
        <div className='footer-mobile__social-box'>
          <SocialMediaImg isFooter={true} src={IconsInstagram} />
          <SocialMediaImg isFooter={true} src={IconsWhatsApp} />
          <SocialMediaImg isFooter={true} src={IconsVK} />
        </div>
      </div>    
      <CompanyContactInfo
        address={'Заветный, пр.Лазурный, д.11'}
        businessHours={'Круглосуточно'}
      />
    </footer>
  );
}
export default FooterMobile;
