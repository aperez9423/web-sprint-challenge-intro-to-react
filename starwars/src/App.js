import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import CharacterList2 from "./components/CharacterList2";
import CharacterList3 from "./components/CharacterList3";
import CharacterList4 from "./components/CharacterList4";
import CharacterList5 from "./components/CharacterList5";
import CharacterList6 from "./components/CharacterList6";
import CharacterList7 from "./components/CharacterList7";
import CharacterList8 from "./components/CharacterList8";
import CharacterList9 from "./components/CharacterList9";


const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Star Wars Main Characters</h1>
      <CharacterList/>
      <CharacterList2/>
      <CharacterList3/>
      <CharacterList4/>
      <CharacterList5/>
      <CharacterList6/>
      <CharacterList7/>
      <CharacterList8/>
      <CharacterList9/>
    </div>
  );
}

export default App;
