// import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import Segment from '../Segment/Segment';
import BalloonCardList from '../BalloonCardList/BalloonCardList';
import Discount from '../Discount/Discount';
import Flickity from 'react-flickity-component';
import ourWorks from '../../utils/ourWorks';
import OurWorksCard from '../OurWorksCard/OurWorksCard';

function Main() {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true, //для того что бы после последней карточки снова шла первая
  };

  return (
    <>
      <main className='main'>
        ourWorks
        <Home />
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
        <Discount />
        <Segment
          subtitle={'Акции'}
          text={'показать всё'}
        />
        <BalloonCardList subtitle={'Акции'} />
        <Segment
          subtitle={'Наши работы'}
          // text={''}
        />
        <Flickity
          className='slider'
          elementType='div'
          disableImagesLoaded={false}
          options={flickityOptions}
          reloadOnUpdate
          static
          element={OurWorksCard}>
          {ourWorks.map((work) => (
            <OurWorksCard
              key={work.id}
              src={work.image}
              alt={work.name}
            />
          ))}
        </Flickity>
      </main>
    </>
  );
}
export default Main;
