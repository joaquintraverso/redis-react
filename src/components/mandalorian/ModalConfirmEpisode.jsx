/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export default function ModalConfirmEpisodes() {

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

    let response = await fetch("http://localhost:4000/episodes/status/3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let result = await response.json()

    setResult(result.msg)
  };

  return (
    <>
      <label htmlFor="episode-buy" className="btn btn-outline btn-primary">Alquilar Episodios</label>
      < input type="checkbox" id="episode-buy" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Alquilar Episodio</h3>
          {episode ? (
            <>
              {episode
                .filter(ep => ep[2] === "Reservado")
                .map(ep => (
                  <div key={ep[0]} className='flex justify-between w-full mt-5'>
                    <h2 className="font-bold">{ep[0]}: {ep[1]}</h2>
                    <button
                      className='btn btn-outline'
                      onClick={() => {handleSubmit(ep[0])}}
                      >
                        Confirmar
                    </button>
                  </div>
                ))}
            </>) : (
            <>
              ...
            </>)}
          <div className="modal-action">
            <p>{result}</p>
            <label htmlFor="episode-buy" className="btn">Cerrar</label>
          </div>
        </div>
      </div>
    </>
  )
}
