import React from 'react';
import BalloonCard from '../BalloonCard/BalloonCard';
import balloons from '../../utils/balloons';

function BalloonCardList() {
  return (
    <section className='balloon__card-list'>
       {balloons.map(balloon => (
        <BalloonCard key={balloon.id} name={balloon.name} src={balloon.image} alt={balloon.name}/>
       ))}        
    </section>
  );
} 
export default BalloonCardList;
