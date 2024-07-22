import { useEffect, useState } from "react";

const localCache = {}; // fuera del efecto y sin export

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();

        }, [url]); // cuando el url cambia, hacemos el fetch de nuevo

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    };

    const getFetch = async() => {

        if ( localCache[url] ) {
            console.log('usando cache');
            setState({
                data: localCache[url], 
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();
        const resp = await fetch(url);

        // sleep para ver la pantalla de carga:
        await new Promise( resolve => setTimeout(resolve, 1000));
        
        // Manejo de errores
        if ( !resp.ok ) {
            setState( {
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }
        
        // No hubo errores:
        const data = await resp.json();
        setState({
            data: data, 
            isLoading: false,
            hasError: false,
            error: null,
        })
        // Manejo de cache
        localCache[url] = data; // queda: {url de la peticion}: {data recibida de la peticion}
        //console.log(localCache);
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError : state.hasError,
    }
};
