import React from 'react';
import './SideBar.css';
import dashBoardIcon from '../../assets/icon1.png';
import skillIcon from '../../assets/icon.png';
import InternshipIcon from '../../assets/icon2.png';

function SideBar() {
    return (
        <div className='SideBarContainer'>
            <ul>
                <li>
                    <img src={dashBoardIcon} alt="dashboard" />
                    <h2>Dashboard</h2>
                </li>
                <li>
                    <img src={skillIcon} alt="skill" />
                    <h2>Skill Test</h2></li>
                <li>
                    <img src={InternshipIcon} alt="dashboard" />
                    <h2>Internships</h2>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;