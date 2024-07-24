import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en el useCounter' ,() => {
    
    test('Debe retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
     });

     test('Debe generar el counter con el valor 100', () => {
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);
     });

     test('Debe incrementar el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => {
            increment(); // el valor del counter es 10
            increment(); // el valor del counter sigue siendo 10, porque es un primitivo y se crean mas variables para cada funcion --> tuvimos que tocar algo en useCounter.js para que ande
        })

        expect( result.current.counter ).toBe(12);
        // Como el counter es primitivo, no anda si pones solo counter
      });

      test('Debe decrementar el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act( () => {
            decrement(); // el valor del counter es 10
            decrement(); // el valor del counter sigue siendo 10, porque es un primitivo y se crean mas variables para cada funcion --> tuvimos que tocar algo en useCounter.js para que ande
        })

        expect( result.current.counter ).toBe(8);
        // Como el counter es primitivo, no anda si pones solo counter
      });

      test('Debe resetear el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            decrement();
            reset();
        })

        expect( result.current.counter ).toBe(10);
        // Como el counter es primitivo, no anda si pones solo counter
      });

});
