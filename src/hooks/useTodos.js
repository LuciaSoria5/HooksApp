import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer";


// intenta parsear lo que haya en el valor de la calave 'todos' en el local storage,  y si da error retorna un arreglo vacío
const init = () => JSON.parse( localStorage.getItem( 'todos' )) || [];
const initialState = [];

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init ); // pasamos la referencia del todoReducer, no lo ejecutamos

    // Almacenar en el localStorage nuestros todos, para que no se pierdan cuando recargamos el navegador
    // actualizamos el localStorage cada vez que se actualice el todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]); 
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch( action );
    };

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    };

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    };

    const pendingTodosCount = todos.filter( todo => !todo.done ).length;
    const todosCount = todos.length;

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
    todos,
    todosCount,
  };
};
