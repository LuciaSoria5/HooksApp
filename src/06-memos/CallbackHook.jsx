import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // esta funcion se la vamos a pasar como argumento al componente <ShowIncrement />
    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value ); // memorizamos esta funcion
      },
      [], // [] significa que solo se va a ejecutar la primera vez
    );

    // useEffect(() => {
    //   incrementFather();
    // }, [incrementFather]);
    

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr/>

        <ShowIncrement increment={ incrementFather }/>
    </>
  )
};
