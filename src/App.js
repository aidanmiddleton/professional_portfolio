import React from 'react';
import './App.css';
import SideNavRouter from './components/Sidenav'
import '../src/styles/app.css'
import '../src/styles/projects.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function App() {
  return (
    <div className="App">
      <SideNavRouter />
    </div>
  );
}

export default App;
