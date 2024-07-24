import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />' , () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe mostrar el Todo pendiente de completar', () => { 

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole( 'listitem' );
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span'); // el getByRole no funciona con span
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through'); // es la clase que hace que aparezca tachado
     });

     test('Debe mostrar el Todo completado ', () => { 
        
        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
      });

      test('Span debe llamar al ToggleTodo cuando se haga click', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

       });

       test('Button debe llamar al deleteTodo', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
       });
 });