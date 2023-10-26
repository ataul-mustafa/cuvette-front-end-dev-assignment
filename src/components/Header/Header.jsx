import './Header.css'
import React from 'react';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/profileImage.png'

function Header() {
  return (
    <div className='headerContainer'>
        <img src={logo} alt="cuvette" />
        <div>
            <img src={profileImage} alt="profile" />
            <h2>Ataul Mustafa</h2>
        </div>
    </div>
  )
}

export default Header