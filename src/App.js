import React from "react";
import CharactersButton from "./components/characters/CharactersButton"
import EpisodesButton from "./components/mandalorian/EpisodesButton";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-between w-[75%]">
        <CharactersButton />
        <EpisodesButton />
      </div>
    </div>
  );
}

export default App;
