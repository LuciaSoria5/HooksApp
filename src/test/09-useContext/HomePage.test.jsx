import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => { 

    const user = {
        name: 'Lucia',
        id: 1
    };

    test('Debe mostrar el componente sin el usuario', () => { 

        render( 
            <UserContext.Provider value={ { user: null } } >
                <HomePage />
            </UserContext.Provider>
        );

        // si bien el HTML no lo renderiza, en la consola el Null del <pre> aparece igual
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
     });

     test('Debe mostrar el componente con el usuario', () => { 

        render( 
            <UserContext.Provider value={ { user } } >
                <HomePage />
            </UserContext.Provider>
        );

        // si bien el HTML no lo renderiza, en la consola el Null del <pre> aparece igual
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` ) // el id tiene que ser un str, no un int
     });
 });