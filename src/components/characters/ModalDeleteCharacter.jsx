/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'

export default function ModalDeleteCharacters() {

  let [character, setCharacter] = useState("");

  let [episode, setEpisode] = useState("");

  let [result, setResult] = useState("")

  const handleInputCharacter = (event) => {
    setCharacter(event.target.value)
  }

  const handleInputEpisode = (event) => {
    setEpisode(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {episode, character};

    let response = await fetch("http://localhost:4000/character/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let result = await response.json()

    setResult(result.msg)
  };

  return (
    <>
      <label htmlFor="character-delete" className="btn btn-outline btn-primary">Eliminar Personajes</label>
      < input type="checkbox" id="character-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="font-bold text-lg">Eliminar un Personaje</h3>
          <form onSubmit={handleSubmit} className='w-full'>
            <label className="label">
              <span className="label-text">Episodio:</span>
            </label>
            <input
              type="text"
              placeholder="Episodio"
              className="input w-full"
              value={episode}
              onChange={handleInputEpisode}
            />
            <label className="label">
              <span className="label-text">Personaje:</span>
            </label>
            <input
              type="text"
              placeholder="Personaje"
              className="input w-full"
              value={character}
              onChange={handleInputCharacter}
            />
            <button type="submit" className="btn btn-outline w-full">Eliminar</button>
          </form>
          <div className="modal-action">
            <p>{result}</p>
            <label htmlFor="character-delete" className="btn">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  )
}
