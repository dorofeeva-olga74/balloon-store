import React from 'react';
// import ourWorks from '../../utils/ourWorks';

function OurWorksCard({ src, alt }) {
  
  return (
    <div className='our-works-card'>
      <img
        className='our-works-card__img'
        src={src}
        alt={alt}
      />      
    </div>
  );
}
export default OurWorksCard;