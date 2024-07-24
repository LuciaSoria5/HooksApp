import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe('Pruebas en <LoginPage />', () => { 
    
    const user = {
        name: 'Lucia',
        id: 1
    };
    const setUserMock = jest.fn();

    test('Debe mostrar el componente sin el usuario', () => { 

        render( 
            <UserContext.Provider value={ { user: null } } >
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
     });

     test('Debe llamar el setUser cuando se hace click en el boton', () => { 

        render( 
            <UserContext.Provider value={ { user: null, setUser: setUserMock } } >
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button');
        fireEvent.click( setUserButton );

        expect( setUserMock ).toHaveBeenCalledWith( {id: 123, name: 'Juan', email: 'juan@google.com'} );
     });
});