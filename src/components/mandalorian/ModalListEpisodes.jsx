/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function ModalListEpisodes() {

  let [episode, setEpisode] = useState();

  const fetchEpisodes = async () => {
    let response = await fetch("http://localhost:4000/episodes");
    let data = await response.json();
    setEpisode(data.data);
    console.log(data.data)
  }

  useEffect(() => {
      fetchEpisodes();
  }, []);

  return (
    <>
      <label htmlFor="episode-view" className="btn btn-outline btn-primary">Listar Episodios</label>
      < input type="checkbox" id="episode-view" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">The Mandalorian</h3>
          {episode ? (
            <>
              {episode.map((ep) => (
                <div key={ep[0]} className='flex justify-between w-full mt-5'>
                  <h2 className="font-bold">{ep[0]}: {ep[1]}</h2>
                  <h2 className={`
                    font-bold ml-10 
                    ${ep[2] === "Disponible" ? 'text-green-500' 
                    : ep[2] === "Reservado" ? 'text-yellow-500' 
                    : 'text-red-500'}
                  `}>
                    {ep[2]}
                  </h2>
                </div>
              ))}
            </>) : (
            <>
              ...
            </>)}
          <div className="modal-action">
            <label htmlFor="episode-view" className="btn">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  )
}
