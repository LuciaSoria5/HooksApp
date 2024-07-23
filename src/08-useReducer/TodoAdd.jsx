import { useForm } from "../hooks";

export const TodoAdd = ( { onNewTodo } ) => {

    const { onResetForm, onInputChange, description } = useForm({ description: '' });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (description.length < 1) return;

        const newTodo = {
            id: new Date().getTime(), 
            description,
            done: false 
            }
        onNewTodo( newTodo );
        onResetForm();
    }

  return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
  )
}
