import React from 'react';
import ProjectListItem from './Project_List_Item';

export default function ProjectList(props) {


  return (
    <container className='project-container'>
      <ul className='project-list'>
        <ProjectListItem />
      </ul>
    </container>
  );
}