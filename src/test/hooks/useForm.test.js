import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm()', () => { 

    const initialForm = {
        name: 'Lucia',
        email: 'luci@gmail.com'
    }

    test('Debe regresar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
     });

     test('Debe cambiar el nombre del formulario', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        const newValue = 'Juan';

        act( () => {                // modifcamos el campo 'name' y le ponemos el valor 'Juan'
            onInputChange( { target : { name: 'name', value: newValue } } );
        })

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

      });

      test('Debe realizar el reset del formulario', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        const newValue = 'Juan';

        act( () => {                // modifcamos el campo 'name' y le ponemos el valor 'Juan'
            onInputChange( { target : { name: 'name', value: newValue } } );
            onResetForm();
        })

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

       });

 });