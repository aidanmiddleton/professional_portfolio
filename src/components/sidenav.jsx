import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import PhotoDisplay from './Photo_Display';
import SocialMediaLinks from './Social_Media_links';
import Resume from './Resume';
import ProjectList from './project_unit/Project_List'
// import NavLink from './Nav_Link';





export default function SideNavRouter(props) {


  return (
    <div className='side-nav-full'>
      {/* <PhotoDisplay /> */}
      <Router>
        <div className="container">
          <ul className="side-nav-ul">

            <div className='photo-display'>
                <li>
                  <PhotoDisplay />
                </li>  
            </div>

            <div className='router-links'>
                <li className='router-link'>
                  <NavLink activeClassName='active' className="crumb-button" to="/projects">
                    <button variant="contained" color="primary">
                      PROJECTS
                    </button>
                  </NavLink>
                </li>
                <li className='router-link'>
                  <NavLink activeClassName='active' className="crumb-button" to="/resume">
                    <button variant="contained" color="primary">
                      RESUME
                    </button>
                  </NavLink>
                </li>
                <li className='router-link'>
                  <NavLink activeClassName='active' className="crumb-button" to="/photography">
                    <button variant="contained" color="primary">
                      PHOTOGRAPHY
                    </button>
                  </NavLink>
                </li>
            </div>

            <li className='social-icons-li'>
              <SocialMediaLinks />
            </li>
            
          </ul>

          <Switch>
            <Route path="/projects">
              <ProjectList />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/photography">
              <h1>something 3</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>  
  );
}