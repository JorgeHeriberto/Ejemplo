import React from 'react'
import Componte1 from './components/Componte2'
import Componte2 from './components/Componte2'
import Componte3 from './components/Componte3'
import './estilos.css'

const App = () => {
  const saludo = () =>{
    alert("Hola mundo");
  } 



  return (
    <>
    <Componte1/>
    <Componte2/>
    <Componte3 Texto="Presiona" bgcolor="blue" click={() => saludo()}/>
    <Componte3 Texto="Actuliza" bgcolor="yellow"/>
    <Componte3 Texto="Borra" bgcolor="red"/>
    </>
  )
}

export default App
