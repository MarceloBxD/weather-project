import React from 'react'
import * as C from './styles'

export const Button = ({value}) => {
    
  return (
    <C.Button onClick={e => console.log(e.target)}>{value}</C.Button>
  )
}
