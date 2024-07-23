const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    if ( action.type === '[TODO] add todo' ){
        // creas un arreglo igual al initialState y le añadis el payload
        return [ ...state, action.payload ];
    };

    return state; // no hubo cambios del estado, no pasó nada digamos 
};

let todos = todoReducer(); // va a utilizar el estado inicial y una acción vacía

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo, // carga que está en la acción.
}

todos = todoReducer( todos, addTodoAction );
//console.log(todos);

/* ESTO ESTA MAL!!! ESTO MUTA EL ESTADO.
todos.push({
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
})
    */