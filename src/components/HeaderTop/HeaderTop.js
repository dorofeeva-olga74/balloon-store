import Logo from '../Logo/Logo.js';
import Catalog from '../Catalog/Catalog.js';
import SearchForm from '../SearchForm/SearchForm.js';
import HeaderSectionsTop from '../HeaderSectionsTop/HeaderSectionsTop.js';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';
import Search from '../../images/icons-search.svg';

function HeaderTop() {
  return (
    <div className='header-top'>
      <Logo />
      <Catalog />
      <SearchForm
        src={Search}
        placeholder={'Поиск'}
      />
      <HeaderSectionsTop />
      <button className='header-mobile__button'>
        <ShoppingCart />
      </button>
    </div>
  );
}
export default HeaderTop;
