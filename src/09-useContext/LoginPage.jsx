import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

// si hay varios contextos con el mismo nombre, react nso va a dar el que este mas cerca en el arbol de contexto
  const { user, setUser } = useContext( UserContext ); // es parecido a un custom hook

    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre aria-label="pre">
            { JSON.stringify( user, null, 3 ) }
          </pre>

          <button 
            className="btn btn-primary"
            onClick={ () => setUser( {id: 123, name: 'Juan', email: 'juan@google.com'} ) }
            > 
              Establecer usuario
          </button>
      </>
    )
  };