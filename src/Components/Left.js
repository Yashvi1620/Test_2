import React from 'react'
import window from '../assets/windows.png';
import file from '../assets/file-manager.png';
import chrome from '../assets/Google-Chrome-icon.png';
import windowsstore from '../assets/windows-store.png';
import edge from '../assets/Internet-Explorer-icon.png';
import whatsapp from '../assets/WhatsApp-icon.png';
import whatsappMessage from '../assets/whatsapp-message2.jpg';


const Left = () => {
  return (
    
    <div className='left'>
        <img src={window} alt='window'/>
        <input placeholder='🔎 Type here to search'/>
        <img src={file} alt='file'/>
        <img src={chrome} alt='chrome'/>
        <img src={windowsstore} alt='PlayStore'/>
        <img src={edge} alt='edge'/>
        <img src={whatsapp} alt='whatsapp'/>
       
        <div className='message'>
        <img  className='whatsapp' src={whatsappMessage} alt='whatsappMessage'/>
          <hr/>  
        </div>
        
    </div>

  )
}

export default Left