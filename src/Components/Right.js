import React from 'react';
import moon from '../assets/half-moon-icon.png';
import speaker from '../assets/speaker-icon.png';
import message from '../assets/message_1.webp';
import wifi from '../assets/wifi.png';
import battery from '../assets/battery.png'
const Right = () => {
  return (
    <div className='right'>
        <img src={moon} alt='moon'/>
        <span className='flex'>29°C ^</span>
        <img src={battery} alt='batt'/>
        <img src={speaker} alt='sound'/>
        <img src={wifi} alt='wifii'/>
        <span className='flex'>ENG</span>
        <span className='time'>
        <span>10:30</span>
        <span>02-10-2022</span>
        </span>
        <img src={message} alt='message'/>
    </div>
  )
}

export default Right