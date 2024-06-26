// import Search from '../../images/icons-search.svg';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

function SearchForm({src, placeholder}) {
     
  return (
    <section className='search'>      
      <form noValidate className='search__form'>
        <div className='search__input-container'>
        <button
            className='search__button'
            type='submit'
            aria-label='Поиск'>
            <img
              className='search__img'
              src={src}
              alt='Поиск'
            />
          </button>
          <input
            required
            id='search-input'
            className='search__input'            
            type='text'
            name='query'
            placeholder={placeholder}            
          />
          
        </div>
        {/* <span className='search__error'>{error}</span> */}        
      </form>
    </section>
  );
}
export default SearchForm;
