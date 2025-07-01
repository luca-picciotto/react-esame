import { useState } from "react";
import { post } from "../services/apiPost";
import type { Register } from "../types/accessType";

export function usePost() {
    const [result, setResult] = useState<Register | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const postData = async (data: any, endpoint: string) => {
        setLoading(true);
        post(data, endpoint)
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
        postData,
        result,
        error,
        loading
    };
}