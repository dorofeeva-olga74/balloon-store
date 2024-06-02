import Logo from '../Logo/Logo.js';
import CatalogBtn from '../CatalogBtn/CatalogBtn.js';
import SearchForm from '../SearchForm/SearchForm.js';
import HeaderSectionsTop from '../HeaderSectionsTop/HeaderSectionsTop.js';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';
import Search from '../../images/icons-search.svg';

function HeaderTop({ onCloseOverlay, isOpen, onClose, setIsContextBurgerMenuOpened }) {
  return (
    <div className='header-top'>
      <Logo />
      <div className='header-top__catalog-set'>
        <CatalogBtn
          isOpen={isOpen}
          onClose={onClose}
          onCloseOverlay={onCloseOverlay}
          setIsContextBurgerMenuOpened={setIsContextBurgerMenuOpened}
        />
        <SearchForm
          src={Search}
          placeholder={'Поиск'}
        />
      </div>
      <HeaderSectionsTop />
      <ShoppingCart />
    </div>
  );
}
export default HeaderTop;
