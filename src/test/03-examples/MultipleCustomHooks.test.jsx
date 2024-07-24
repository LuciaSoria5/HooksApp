import { render, screen, fireEvent  } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples';
import { useFetch, useCounter } from '../../hooks';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe(' <Pruebas en <MultupleCustomHoks />', () => {

    const mockIncrement = jest.fn(); // jest function
    useCounter.mockReturnValue( { 
        counter: 1,
        increment: mockIncrement,
    });
   
    // Para que las funciones sean reseteadas anntes de realizarse, es decir, las pruebas son atómicas
    beforeEach(() => {
      jest.clearAllMocks();
    });
   

    test('Debe mostrar el componente por defecto ', () => {

      useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
      render(<MultipleCustomHooks />);
   
      const siguienteButton = screen.getByRole('button', { name: 'Siguiente' });
      const anteriorButton = screen.getByRole('button', { name: 'Anterior' });
   
      expect(screen.getByText('Cargando'));
      expect(screen.getByText('Informacion de Pokemon'));
      expect(anteriorButton.disable).toBeFalsy(); // Ninguno de los botones esta deshabilitado
      expect(siguienteButton.disable).toBeFalsy();
    });
   
    
    test('Debe mostrar el componente un pokemon', () => {
      
        useFetch.mockReturnValue({
        data: {
          name: 'Charmander',
          id: 2,
          sprites: {
            back_default: 'back_default',
            back_shiny: 'back_shiny',
            front_default: 'front_default',
            front_shiny: 'front_shiny',
          },
        },
        isLoading: false,
        hasError: null,
      });

      render(<MultipleCustomHooks />);

      expect(screen.getByText(`#2 - Charmander`)).toBeTruthy();
    });
   

    test('Debe llamar la función de incrementar', () => {
      useFetch.mockReturnValue({
        data: {
          name: 'Charmander',
          id: 2,
          sprites: {
            back_default: 'back_default',
            back_shiny: 'back_shiny',
            front_default: 'front_default',
            front_shiny: 'front_shiny',
          },
        },
        isLoading: false,
        hasError: null,
      });
   
      render(<MultipleCustomHooks />);
   
      const siguienteButton = screen.getByRole('button', { name: 'Siguiente' });
      fireEvent.click(siguienteButton);
   
      expect(mockIncrement).toHaveBeenCalled();
    });
});