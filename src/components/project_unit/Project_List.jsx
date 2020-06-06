import React from 'react';
import ProjectListItem from './Project_List_Item';

export default function ProjectList(props) {


  const projectsData = [

    {
      name: "Professional Portfolio",
      description: "My own personal portfolio website, built to display projects, and allow for easy contact.",
      stack: "React.js, Node.js,",
      youtubeURL: "https://www.youtube.com/watch?v=Yxrrb0am988",
      github_url: "https://github.com/aidanmiddleton/professional_portfolio"

    },

    {
      name: "Dungeons and Dragons Character Creator",
      description: "A DnD charcter creation/companion app. Allows for the creation of charatacters, and viewing of previously created characters.\n The user can also roll for intiative, and make attack rolls",
      stack: "React.js, Node.js, Express, postgres, ElephantSQL",
      youtubeURL: "https://www.youtube.com/watch?v=Yxrrb0am988",
      github_url: "https://github.com/hernandez87v/dnd-character-create"

    },

    {
      name: "Jungle",
      description: "Jungle is a basic Ecommerce application created using ruby on rails.",
      stack: "Ruby, Rails, ERB, postgres, Jest",
      youtubeURL: "https://www.youtube.com/watch?v=Yxrrb0am988",
      github_url: "https://github.com/aidanmiddleton/Jungle"

    },


  ];

  return (
    <container className='project-container'>
      <ul className='project-list'>
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
      </ul>
    </container>
  );
}