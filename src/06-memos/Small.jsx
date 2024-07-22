import React from "react";

export const Small = React.memo(({ value }) => { // el memo recibe por parametro a todo el componente

    console.log('Me volvi a dibujar') // ya no se vuelve a dibujar cuando cambia el boton de tru/false

  return (
    <small>{ value }</small>
  )
})
