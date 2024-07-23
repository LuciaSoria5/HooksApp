
export const todoReducer = ( initialState = [], action ) => {
    
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload];
        
        case '[TODO] Remove Todo':
            // el filter retorna un nuevo arreglo
            // en el payload nos viene el id
            return initialState.filter( todo => todo.id != action.payload ); 
        
        case '[TODO] Toggle Todo':
            // el map retorna un nuevo arreglo
            // en el payload nos viene el id
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialState;
    }
};