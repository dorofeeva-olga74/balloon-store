import React from 'react';

function BalloonCard({ name, src, alt }) {
  //   const location = useLocation();
  return (
    <div className='card'>
      <img
        className='card__img'
        src={src}
        alt={alt}
      />
      <div className={'card__title-section'}>
        <h3 className={'card__title'}>{name}</h3>
      </div>
    </div>
  );
}
export default BalloonCard;
