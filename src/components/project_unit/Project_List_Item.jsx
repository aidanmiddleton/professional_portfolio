import React from 'react';
import ReactPlayer from 'react-player';

export default function ProjectListItem(props) {


  return (
  <li className='project-list-item'>
    <h1>Jungle</h1>
    <p>Ruby on Rails</p>
    <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
    />
  </li>
  );
}