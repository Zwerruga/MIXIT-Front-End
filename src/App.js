import React from "react";

import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import ButtonDetails from "./components/ButtonDetails.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <div className='wrapper'>
      <div className='bg-filter'>
        <Header />
        <Title />
        <ButtonDetails />
        <Player />
      </div>
    </div>
  );
}

export default App;
