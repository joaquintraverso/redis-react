/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function ModalListCharacters() {

  let [characters, setCharacters] = useState();

  let [episode, setEpisode] = useState("");

  const handleInput = (event) => {
    setEpisode(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fetchCharacters = async (episode) => {
    let response = await fetch(`http://localhost:4000/character/${episode}`);
    let data = await response.json();
    setCharacters(data.data);
    console.log(data.data)
  }

  useEffect(() => {
    if (episode.length > 2){
      fetchCharacters(episode);
    }
  }, [episode]);

  return (
    <>
      <label htmlFor="character-view" className="btn btn-outline btn-primary">Listar Personajes</label>
      < input type="checkbox" id="character-view" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Buscar un Personaje</h3>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-between'>
              <input
                type="text"
                placeholder="Episodio"
                className="input w-[70%] max-w-xs"
                value={episode}
                onChange={handleInput}
              />
              <button type="sumbit" className="btn btn-outline ml-5">Buscar</button>
            </div>
          </form>
          {characters ? (
            <>
              {characters.map((character) => (
                <div key={character[0]}>
                  <h2 className="font-bold">{character[0]}</h2>
                  <p>{character[1]}</p>
                </div>
              ))}
            </>) : (
            <>
              ...
            </>)}
          <div className="modal-action">
            <label htmlFor="character-view" className="btn">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  )
}
