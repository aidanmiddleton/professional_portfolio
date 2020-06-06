import React from 'react';
import ReactPlayer from 'react-player';

export default function ProjectListItem(props) {


  return (
  <li className='project-list-item'>
    <h1 className='project-item-title'>{props.name}</h1>
    <p>{props.description}</p>
    <p>{props.stack}</p>
    <a to={props.githubURL}></a>
    <ReactPlayer
        url="https://www.youtube.com/watch?v=Yxrrb0am988"
    />
  </li>
  );
}