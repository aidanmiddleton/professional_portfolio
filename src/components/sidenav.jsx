import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PhotoDisplay from './Photo_Display'






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
                  <Link className="crumb-button" to="/projects">
                    <button variant="contained" color="primary">
                      Projects
                    </button>
                  </Link>
                </li>
                <li className='router-link'>
                  <Link className="crumb-button" to="/resume">
                    <button variant="contained" color="primary">
                      Resume
                    </button>
                  </Link>
                </li>
                <li className='router-link'>
                  <Link className="crumb-button" to="/photography">
                    <button variant="contained" color="primary">
                      Photography
                    </button>
                  </Link>
                </li>
            </div>

          </ul>

          <Switch>
            <Route path="/projects">
              <h1>something 1</h1>
            </Route>
            <Route path="/resume">
              <h1>something 2</h1>
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