import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumbrer = 100 ) =>{
    for (let i = 0; i < iterationNumbrer; i++) {
        console.log('Ahi vamos');
    }
    return `${ iterationNumbrer } iteraciones realizadas`;
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(400);
    const [show, setShow] = useState(true);

    // memoriza el resultado, y vuelve a ejecutar la función cuando cambia el valor del counter
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] );

  return (
   <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary mt-2" 
            onClick={ () => increment() } 
        >
            +1
        </button>

        <button 
            className="btn btn-primary mt-2" 
            onClick={ () => setShow(!show) }
        >
            Show/HIde { JSON.stringify(show) }
        </button>
   </>
  )
}
