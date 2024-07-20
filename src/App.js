import { useState } from 'react';
import './App.css';
import StarGame from './components/StarGame';
import GamePlay from './components/GamePlay';
import Circles from './components/Circles';

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [theme, setTheme] = useState(false); 

  const toggleBtn = () => {
    setIsGameStart((prev) => !prev);
  };

  const changeTheme = () => {
    setTheme((prev) => !prev); 
  };

  return (
    <div style={{ backgroundColor: theme ? "white" : "black", color: theme ? "black" : "white" }}>
      { !isGameStart 
        ? <StarGame toggleBtn={toggleBtn} changeTheme={changeTheme} theme={theme} /> 
        : <GamePlay toggleBtn={toggleBtn} changeTheme={changeTheme} theme={theme} />
      }
      <Circles />
    </div>
  );
}

export default App;