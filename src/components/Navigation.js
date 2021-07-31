import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav>
        <span className='leftSide'>tweeter</span>
        <div className='rightSide'>
          <span>
            <strong>Write</strong> a new tweet
          </span>
          <div id='buttonClick'>
            <i className='fas fa-angle-double-down icon buttonClick'></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
