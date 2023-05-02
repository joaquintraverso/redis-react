import React, { useEffect } from 'react'
import ModalListEpisodes from './ModalListEpisodes'
import ModalReserveEpisodes from './ModalReserveEpisode'
import ModalConfirmEpisodes from './ModalConfirmEpisode'

export default function EpisodesButton() {

  let fetchEpisodes = async () => {
    await fetch('http://localhost:4000/episodes/add',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
  }

  useEffect(() => {
    fetchEpisodes()
  }, [])
  
  return (
    <div className="btn-group btn-group-vertical bg-base-100 shadow-xl w-[40%]">
      <h1 className="font-bold text-100">The Mandalorian</h1>
      <ModalListEpisodes />
      <ModalReserveEpisodes />
      <ModalConfirmEpisodes />
    </div> 
  )
}
