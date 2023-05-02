import React from 'react'
import ModalListCharacters from './ModalListCharacters'
import ModalCreateCharacters from './ModalCreateCharacter'
import ModalDeleteCharacters from './ModalDeleteCharacter'

export default function CharactersButton() {
  return (
    <div className="btn-group btn-group-vertical bg-base-100 shadow-xl w-[40%]">
      <h1 className="font-bold text-lg">Personajes</h1>
      <ModalCreateCharacters />
      <ModalListCharacters />
      <ModalDeleteCharacters />
    </div>
  )
}

