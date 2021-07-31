import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  return (
      <header className='mainHeader'>
        <div className='avatar'>
          <img src='https://raw.githubusercontent.com/shaund16/tweeter/master/public/images/profile-hex.png' />
        </div>
        <div className='name'>
          <h2>Eliana Lynn</h2>
        </div>
      </header>
  );
};

export default Profile;
