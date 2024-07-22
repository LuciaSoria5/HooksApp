import { useEffect, useState } from "react"

export const Messagge = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
      //console.log('Message Mounted') // cuando aparece el mensaje

      const onMouseMove = ({ x, y }) => {
        // const coords = { x, y };
        setCoords({ x, y});    
      }
      // aca creamos el listener
      window.addEventListener( 'mousemove', onMouseMove);
    
      return () => { //console.log('Message Unmounted') // cuando desaparece el mensaje
        /* aca eliminamos el listener --> si no lo borramos, sigue ahi por mas 
        que se borre el useEffect, y se crean mas cada vez que el mismo se ejecuta */ 
        window.removeEventListener( 'mousemove', onMouseMove );
      }

    }, []);
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        <h5>{JSON.stringify(coords)}</h5>
    </>
  )
};
