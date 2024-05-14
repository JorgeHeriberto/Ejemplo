import React from 'react'
import Componte1 from './Componte1'


export const AirQualityScreen = () => {
  return (
    <>
     <div>Aplicacion de la calidad del aire </div>
     <div className='card card-info'>
        <div className='card-header'>
            <h4 className='card-title'>Datos del aire</h4>
        </div>
        <div className='card-body'>
          <div className='row'>
              <div className='col-lg-4 col-md-6 col-xs-12'>
                <Componte1 valor={10} texto="CO" icono="fas fa-wind" color="bg-primary"/>
              </div>
              <div className='col-lg-4 col-md-6 col-xs-12'>
                <Componte1 valor={5.7} texto="O" icono="fab fa-airbnb" color="bg-orange"/>
              </div>
          </div>
        </div>
        <div className='card-footer'>
            <button className='btn btn-secondary'>Cancelar</button>
            <button className='btn btn-success float-right'>Aceptar</button>
        </div>
     </div>
    </>
   
  )
}
