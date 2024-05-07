import React, { useState } from 'react';

function Discount() {
  const patternTelephone = '^\\+7\\(\\d{3}\\)\\d{3}-\\d{4}$';
  const [inputValue, setInputValue] = useState('+7');

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return '+7';
    let phoneNumber = value.replace(/[^\d]+/g, '');

    // Добавляем +7 по умолчанию, если номер начинается не с него
    if (!phoneNumber.startsWith('7')) {
      phoneNumber = '7' + phoneNumber;
    }

    let formattedNumber;
    if (phoneNumber.length < 5) {
      formattedNumber = `+7(${phoneNumber.slice(1)}`;
    } else if (phoneNumber.length < 8) {
      formattedNumber = `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4)}`;
    } else if (phoneNumber.length < 11) {
      formattedNumber = `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    } else {
      formattedNumber = `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 11)}`;
    }

    // Убираем лишние пробелы и тире, если они есть
    return formattedNumber.replace(/-$/, '').replace(/\s+/g, '');
  };

  return (
    <section className='discount'>
      <div className='discount__order-container'>
        <h1 className='discount__title'>Скидка 5%</h1>
        <span className='discount__title-text'>на первый заказ</span>
        <form
          className='discount__form'
          name='discount__form'
          onClick={(e) => e.stopPropagation()}>
          <input
            required
            id={'telephone'}
            name='telephone'
            type='tel'
            className='discount__input'
            placeholder={'+7'}
            value={inputValue}
            onChange={handleInput}
            autoComplete='on'
            pattern={patternTelephone}
          ></input>
          <button
            type='submit'
            className='discount__submit'>
            Получить скидку
          </button>
        </form>
      </div>
    </section>
  );
}

export default Discount;