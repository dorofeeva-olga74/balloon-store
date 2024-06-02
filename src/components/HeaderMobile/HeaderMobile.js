import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SearchMobile from '../../images/icons-search-mobile.svg';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Actions from '../../images/Vector.svg';
import Logo from '../Logo/Logo.js';
import Rectangle from '../../images/Rectangle.svg';
import HeaderSection from '../HeaderSection/HeaderSection.js';

function HeaderMobile({ title, to, isOpen, setIsContextBurgerMenuOpened, onClose, onCloseOverlay }) {
  return (
    <>
      <header className='header-mobile'>
        <div className='header-mobile__top'>
          <BurgerMenu
            isOpen={isOpen}
            setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
            onCloseOverlay={onCloseOverlay}
            onClose={onClose}
          />
          <SearchForm
            src={SearchMobile}
            placeholder={'Поиск'}
          />
          <button className='header-mobile__button'>
            <nav className='header-mobile__nav-box'>
              <RouterNavLink
                to={to}
                className='header-mobile__nav-action'>
                {title}
              </RouterNavLink>
            </nav>
            <img
              className='header-mobile-img'
              src={Actions}
              alt='Изображение процентов'
            />
          </button>
          <button className='header-mobile__button'>
            <ShoppingCart />
          </button>
        </div>
        <div className='header-mobile__bottom'>
          <Logo />
          <div className='header-mobile__set'>
            <img
              className='header-mobile__rectangle'
              src={Rectangle}
              alt='Угол вниз'
            />
            <div className='header-mobile__sections'>
              <nav className='sections__nav-box'>
                <HeaderSection
                  title='Латексные шары'
                  to='/latex-balloons'
                />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default HeaderMobile;
