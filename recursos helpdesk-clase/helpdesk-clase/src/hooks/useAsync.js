import { useState, useCallback } from "react";

export function useAsync(){
    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Llamará a las peticiones api
    const run = useCallback( async (creadorPromesa) => {
        setLoading(true);
        setError(null);

        try {
            const result = await creadorPromesa();
            setValue(result);
            return result;

        } catch (err){
            setError(err?.message ?? "Error desconocido");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {value, loading, error, run, setValue};
    
}