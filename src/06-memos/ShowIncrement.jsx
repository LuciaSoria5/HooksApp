import React from 'react';

export const ShowIncrement = React.memo( ({ increment }) => {
    console.log('Me estoy ejecutando :D')
  return (
    <button 
        className="btn btn-primary"
        onClick={ () => { 
            increment( 5 ); // ejecuta la funcion incrementFather(value) de <CallbackHook />
         }}
    >
        Incrementar
    </button>
  )
} );
