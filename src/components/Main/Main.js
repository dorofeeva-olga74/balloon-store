import React from 'react';
import Promo from '../Promo/Promo';
import Segment from '../Segment/Segment';
import BalloonCardList from '../BalloonCardList/BalloonCardList';

function Main() {
  return (
    <>
      <main className='main'>
        <Promo />
        <Segment
          subtitle={'Популярные категории'}
          text={'смотреть всё'}
        />
        <BalloonCardList subtitle={'Популярные категории'} />
        <Segment
          subtitle={'Лидеры продаж'}
          text={'показать всё'}
        />
        <BalloonCardList subtitle={'Лидеры продаж'} />
      </main>
    </>
  );
}
export default Main;