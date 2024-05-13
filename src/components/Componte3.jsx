import React from 'react'

const Componte3 = ({ Texto, bgcolor, click }) => {
  return (
    <button style={{background:bgcolor}} onClick={ click}>{ Texto }</button>
  )
}

export default Componte3

