import React from 'react'
import * as C from './styles'
import { useState } from 'react'

export const Input = () => {

  const [cityToSearch, setCityToSearch] = useState("")

  return (
    <C.Input onChange={e => setCityToSearch(e.target.value)} placeholder='Cidade...' value={cityToSearch}/>
  )
}
