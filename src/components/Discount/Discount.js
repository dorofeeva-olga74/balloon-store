import React, { useState } from 'react';

function Discount() {
  const patternTelephone = '^((\\+7|7|8)+([0-9]){10})$';
  const [telephone, setTelephone] = useState('+7 '); // Начальное значение

    const handleTelephoneChange = (e) => {
      // Проверка на ввод только цифр и длину номера
      const value = e.target.value.replace(/[^+\d]+/g, ''); // Удаляем все символы, кроме цифр и плюса
      if (value.length <= 12) {
        setTelephone(value);
      }
    };
//   const handleTelephoneChange = (e) => {
//     // Проверка на соответствие формату: +7 914 970 99 27
//     const value = e.target.value.replace(/[^\d+ ]+/g, ''); // Удаляем все символы, кроме цифр, плюса и пробелов
//     // Разрешаем ввод пробелов в определенных позициях номера телефона
//     if (value.match(/^(\\+7|7|8)?(\d{3})[ ]?(\d{3})[ ]?(\d{2})[ ]?(\d{2})$/)) {
//       // Форматируем номер, добавляя пробелы
//       const formattedValue = value.replace(/(\\+7|7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 $2 $3 $4 $5');
//       setTelephone(formattedValue);
//     }
//   };
  return (
    <section className='discount'>
      <div className='discount__order-container'>
        <h1 className='discount__title'>Скидка 5%</h1>
        <span className='discount__title-text'>на первый заказ</span>
        <form
          className='discount__form'
          //   onSubmit={handleSubmit}
          name='discount__form'
          onClick={(e) => e.stopPropagation()}>
          <input
            required
            id={'telephone'}
            name='telephone'
            type='tel'
            className='discount__input'
            placeholder={'+7'}
            value={telephone} // Начальное значение
            onChange={handleTelephoneChange}
            // value={values.telephone || ''}
            // onChange={handleChangeInput}
            autoComplete='on'
            pattern={patternTelephone}
            // onFocus={handleFocus}
            // error={errors.telephone}>
          ></input>
          {/* <Error error={errors.telephone} /> */}
          <button
            type='submit'
            className='discount__submit'
            // disabled={!isValid || (serverError.isValid === true && serverError.text !== '')}>
          >
            Получить скидку
          </button>
        </form>
      </div>
    </section>
  );
}

export default Discount;
