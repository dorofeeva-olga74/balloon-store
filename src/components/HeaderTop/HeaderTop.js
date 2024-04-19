import Logo from '../Logo/Logo.js';
import Catalog from '../Catalog/Catalog.js';
import SearchForm from '../SearchForm/SearchForm.js';
import HeaderSectionsTop from '../HeaderSectionsTop/HeaderSectionsTop.js';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';

function HeaderTop() { 
  
  
  return (
    <div className='header-top'>
        <Logo />
        <Catalog />
        <SearchForm />
        <HeaderSectionsTop/>
        <ShoppingCart />             
    </div>    
  );
}
export default HeaderTop;
