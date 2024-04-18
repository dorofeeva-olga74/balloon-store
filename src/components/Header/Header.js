// import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo.js';
import Catalog from '../Catalog/Catalog.js';
import SearchForm from '../SearchForm/SearchForm.js';
import HeaderSections from '../HeaderSections/HeaderSections.js';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';

function Header() { 
  
  
  return (
    <>
      <header className='header'>
        <Logo />
        <Catalog />
        <SearchForm />
        <HeaderSections />
        <ShoppingCart />             
      </header>
    </>    
  );
}
export default Header;
