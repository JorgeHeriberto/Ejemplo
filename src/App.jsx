import React, { useState } from 'react'


const App = () => {

  const [contador, setContador] = useState(100)

  return (
    <div style={{ textAlign:'center'}}>
      <div>Mi contador es  </div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador+1)}>
        Incrementar
      </button>
      <button onClick={() => setContador(contador-1)}>
        Decrementar
      </button>
      <button onClick={() => setContador(0)}>
        inicilizar en 0
      </button>
    </div>
  )
}

export default App