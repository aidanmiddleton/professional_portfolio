import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function SocialMediaLinks(props) {

  return (

    <div className='social-icons'>
      <SocialIcon className='social-icon' url="http://github.com/aidanmiddleton" />
      <SocialIcon className='social-icon' url="http://instagram.com/aidanmiddleton_" />
      <SocialIcon className='social-icon' url="https://www.linkedin.com/in/aidan-middleton-2229171aa/" />
    </div>


  );
}