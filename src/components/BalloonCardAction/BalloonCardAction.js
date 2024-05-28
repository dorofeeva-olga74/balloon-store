import React from 'react';
import { ACTION } from '../../utils/consts';

function BalloonCardAction({ name, src, alt, price, productAction }) {
  const actionPrice = (price) => {
    return Math.round(price - price * ACTION); // Формула расчёта цены по акции // Округляем до целого числа
  };

  return (
    <div className='card card__action'>
      <img
        className='card__img'
        src={src}
        alt={alt}
      />
      <div className={'card__price-section'}>
        <span className={'card__price-action'}>{actionPrice(price)}</span>
        <span className={'card__price'}>{price}</span>
        <span className={'card__product-action'}>{productAction.discount}</span>
      </div>
      <div className={'card__title-section'}>
        <h3 className={'card__title-product'}>{name}</h3>
      </div>
    </div>
  );
}
export default BalloonCardAction;
