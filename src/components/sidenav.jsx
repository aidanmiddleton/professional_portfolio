import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';






export default function SideNavRouter(props) {


  return (
      <Router>
        <div className='container'>
          <ul className="side-nav-ul">
            <li>
              <Link className="crumb-button" to="/projects">
                <button variant="contained" color="primary">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link className="crumb-button" to="/resume">
                <button variant="contained" color="primary">
                  Resume
                </button>
              </Link>
            </li>
            <li>
              <Link className="crumb-button" to="/photography">
                <button variant="contained" color="primary">
                  Photography
                </button>
              </Link>
            </li>
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
  );
}