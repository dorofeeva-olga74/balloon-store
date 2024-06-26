// import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import CatalogBtn from '../CatalogBtn/CatalogBtn.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SearchMobile from '../../images/icons-search-mobile.svg';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Actions from '../../images/Vector.svg';
import Logo from '../Logo/Logo.js';
import HeaderSectionsBottom from '../HeaderSectionsBottom/HeaderSectionsBottom.js';
// import Rectangle from '../../images/Rectangle.svg';
// import HeaderSection from '../HeaderSection/HeaderSection.js';
import Contacts from '../Contacts/Contacts';
import Hours from '../Hours/Hours';

function HeaderTablet({ title, to, isOpen, setIsContextBurgerMenuOpened, onClose, onCloseOverlay }) {
  return (
    <>
      <header className='header-tablet'>
        <div className='header-tablet__top'>
          <Logo />
          <div className='header-tablet__catalog-set header-top__catalog-set'>
            <CatalogBtn
              isOpen={isOpen}
              onClose={onClose}
              onCloseOverlay={onCloseOverlay}
              setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
            />
            <SearchForm
              src={SearchMobile}
              placeholder={'Поиск по сайту'}
            />
          </div>
          <button className='header-tablet__button'>
            <nav className='header-tablet__nav-box'>
              <RouterNavLink
                to={to}
                className='header-tablet__nav-action'>
                {title}
              </RouterNavLink>
            </nav>
            <img
              className='header-mobile-img'
              src={Actions}
              alt='Изображение процентов'
            />
          </button>
          <button className='header-tablet__button'>
            <ShoppingCart />
          </button>
        </div>
        <div className='header-tablet__bottom'>
          <HeaderSectionsBottom />
          <Contacts />
          <Hours />
        </div>
      </header>
    </>
  );
}
export default HeaderTablet;
