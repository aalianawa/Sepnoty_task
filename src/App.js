import React from 'react';
import './App.css';
import ScrollingImage from './components/ScrollingImage/ScrollingImage';
import SkillsLogo from './SkillsLogo/SkillsLogo';




function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SkillsLogo/>
        <ScrollingImage/>

      </React.Fragment>
    </div>
  );
}

export default App;
