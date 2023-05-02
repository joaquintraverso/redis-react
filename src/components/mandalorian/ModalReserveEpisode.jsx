/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function ModalReserveEpisodes() {

  let [episode, setEpisode] = useState();

  // let [reserve, setReserve] = useState("");

  let [result, setResult] = useState("")

  const fetchEpisodes = async () => {
    let response = await fetch("http://localhost:4000/episodes");
    let data = await response.json();
    setEpisode(data.data);
    console.log(data.data)
  }

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const handleSubmit = async (reserve) => {
    // event.preventDefault();

    let data = {episode: reserve}

    let response = await fetch("http://localhost:4000/episodes/status/2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let result = await response.json()

    setResult(result.msg)
  };

  return (
    <>
      <label htmlFor="episode-reserve" className="btn btn-outline btn-primary">Reservar Episodios</label>
      < input type="checkbox" id="episode-reserve" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Reservar Episodio</h3>
          {episode ? (
            <>
              {episode
                .filter(ep => ep[2] === "Disponible")
                .map(ep => (
                  <div key={ep[0]} className='flex justify-between w-full mt-5'>
                    <h2 className="font-bold">{ep[0]}: {ep[1]}</h2>
                    <button
                      className='btn btn-outline'
                      onClick={() => {handleSubmit(ep[0])}}
                      >
                        Reservar
                    </button>
                  </div>
                ))}
            </>) : (
            <>
              ...
            </>)}
          <div className="modal-action">
            <p>{result}</p>
            <label htmlFor="episode-reserve" className="btn">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  )
}
