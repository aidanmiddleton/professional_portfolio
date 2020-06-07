import React from 'react';
import ReactPlayer from 'react-player';
import { SocialIcon } from 'react-social-icons';

export default function ProjectListItem(props) {


  return (
  <li className='project-list-item'>
    <div className='project-item-div'>

      <h1 className='project-item-title'>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.stack}</p>
      <SocialIcon className='social-icon' url={props.githubURL} />
      <ReactPlayer
          url="https://www.youtube.com/watch?v=Yxrrb0am988"
      />

    </div>
  </li>
  );
}