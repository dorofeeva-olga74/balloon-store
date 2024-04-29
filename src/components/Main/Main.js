import React from 'react';
import Promo from '../Promo/Promo';
import Segment from '../Segment/Segment';

function Main() {
  return (
    <>
      <main className='main'>
        <Promo />
        <Segment
          subtitle={'Популярные категории'}
          text={'смотреть всё'}
        />
      </main>
    </>
  );
}
export default Main;
