import { useEffect, useReducer } from "react"
import { todoReducer, TodoList, TodoAdd } from "./";

const initialState = [];

const init = () => {
    // intenta parsear lo que haya en el valor de la calave 'todos' en el local storage, 
    // y si da error retorna un arreglo vacío
    return  JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const TodoApp = () => {

                            // pasamos la referencia del todoReducer, no lo ejecutamos
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

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

    return (
        <>
            <h1>TodoApp: 10, <small>pedientes: 2</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">     
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ handleNewTodo } 
                    />
                </div>

            </div>

        </>
    )
};
