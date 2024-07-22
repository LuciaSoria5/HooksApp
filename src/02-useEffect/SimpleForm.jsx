import { useEffect, useState } from "react"
import { Messagge } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'lucisoria@google.com'
    });

    const { username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value
        });
    };
    // Es mejor tener efectos individuales por cada efecto secundario que querramos tener:
    useEffect(() => { 
        /* console.log("use effect called") */
    }, []); // [] --> solo se ejecuta cuando el form es renderizado por primera vez
    
    useEffect(() => { 
        /* console.log("formState changed") */
    }, [ formState ]); // se ejecuta cada vez que cambia el form

    useEffect(() => { 
        // console.log("email changed") 
    }, [ email ]); // se ejecuta cada vez que cambia el email del form
    
  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="luci@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        { 
            username === 'strider2' && <Messagge />
        }
    </>
  )
};
