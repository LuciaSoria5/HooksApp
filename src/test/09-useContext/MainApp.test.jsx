import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp/>', () => { 

    test('Debe mostrar el HomePage', () => { 

        render(     // Aca decimos que estamos en /login
            <MemoryRouter initialEntries={ ['/Login'] }>
                <MainApp />
            </MemoryRouter>
            );

            screen.debug();

        expect( screen.getByText('LoginPage') ).toBeTruthy(); // estamos en el login --> es la etiqueta h1
     });
 });