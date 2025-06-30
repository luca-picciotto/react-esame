import { useState } from "react";
import { postRegister } from "../services/apiPost";
import type { Register } from "../types/accessType";

export function useRegister() {
    const [result, setResult] = useState<Register | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const register = async (data: Register) => {
        setLoading(true);
        postRegister(data)
            .then(() => {
                setResult(data);
                setError(null);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
                console.log("successo");
                
            });
    };

    return {
        register,
        result,
        error,
        loading
    };
}