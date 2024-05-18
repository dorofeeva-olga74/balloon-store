import React from 'react';
import { NavLink } from 'react-router-dom';
import SegmentRectangle from '../../images/segment-rectangle.svg';

function Segment({ subtitle, text }) {
  return (
    <section className='segment'>
      <div className='segment-set'>
        <h2 className='segment-subtitle'>{subtitle}</h2>
        {text === '' ? null : (
          <nav className='segment__nav-box'>
            <NavLink
              to='/catalog'
              className='segment__nav-link'>
              {text}
              <img
                className='segment__rectangle'
                src={SegmentRectangle}
                alt='Угол направо'
              />
            </NavLink>
          </nav>
        )}
      </div>
    </section>
  );
}
export default Segment;
