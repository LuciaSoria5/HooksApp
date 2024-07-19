import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        { /* si no lo ponemos asi --> onClick={ () => increment(2) } lo que
        pasa es que le pasamos el evento click por parametro, 
        y no queremos eso --> onClick={ (event) => increment(event) }*/}
        <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
        <button onClick={ reset } className="btn btn-primary">Reset</button>
        <button onClick={ () => decrement(2) }className="btn btn-primary">-1</button>
    </>
  )
};
