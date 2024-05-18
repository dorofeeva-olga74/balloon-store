import React from 'react';

function CompanyContactInfo({ address, businessHours }) {
  return (
    <div className='contact-info'>
      <p className='contact-info__title'>Адрес:</p>
      <span className='contact-info__subtitle'>{address}</span>
      <p className='contact-info__title'>Режим работы:</p>
      <span className='contact-info__subtitle'>{businessHours}</span>
    </div>
  );
}

export default CompanyContactInfo;
