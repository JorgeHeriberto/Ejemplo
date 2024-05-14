import React from 'react'

const Componte1 = ({valor,texto,color,icono}) => {
  return (
    <div>
      <>
      <div className={`small-box ${ color}`}>
        <div className='inner'>
          <h3>{valor}</h3>
          <p>{texto}</p>
        </div>
        <div className='icon'>
          <i className={ icono }> </i>
        </div>
        <a href='#' className='small-box-footer'>More info
        <i className='fas fa-arrow-circle-right'></i></a>
      </div>
      </>
    </div>
  )
}

export default Componte1
