import React from 'react';
// import { NavLink } from 'react-router-dom';
// import IconAccount from '../../images/iconAccount.svg';
import HeaderSectionsTop from '../HeaderSectionsTop/HeaderSectionsTop';
import SocialMediaImg from '../SocialMediaImg/SocialMediaImg';
import IconsInstagram from '../../images/icons-instagram.svg';
import IconsWhatsApp from '../../images/icons-whatsapp.svg';
import IconsVK from '../../images/icons-vk.svg';

function ContextBurgerMenu({ isOpen, onClose, onCloseOverlay }) {
  // const location = useLocation();

  return (
    <section
      className={`context-burger-menu ${isOpen ? 'context-burger-menu_opened' : ''}`}
      onClick={onCloseOverlay}>
      <div
        className='context-burger-menu__container'
        onClick={(e) => e.stopPropagation()}>
        <button
          className='context-burger-menu__close-button'
          onClick={onClose}></button>
        <HeaderSectionsTop isContextMenu={true} />
        <div className='context-burger-menu__line'></div>
        <div className='context-burger-menu__contact-set'>
          <h3 className='context-burger-menu__contact-title'>Телефон</h3>
          <span className='context-burger-menu__tel-number'>+7 861 204 24 46</span>
          <h3 className='context-burger-menu__contact-title'>Мы в соц. сетях</h3>
          <div className='context-burger-menu__social-box'>
            <SocialMediaImg
              className='social-media__burger-menu'
              src={IconsInstagram}
            />
            <SocialMediaImg
              className='social-media__burger-menu'
              src={IconsWhatsApp}
            />
            <SocialMediaImg
              className='social-media__burger-menu'
              src={IconsVK}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContextBurgerMenu;
