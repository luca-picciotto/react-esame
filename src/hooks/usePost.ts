import { useState } from "react";
import { post } from "../services/apiPost";
import type { LoginResponse, Register } from "../types/accessType";

export function usePost() {
    const [result, setResult] = useState<Register | LoginResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const postData = async (data: any, endpoint: string): Promise<any> => {
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

    const login = async (data: any, endpoint: string) => {
        setLoading(true);
        setError(null);

        post(data, endpoint)
            .then((res: LoginResponse) => {
                setResult(res);
                console.log("Login riuscito:", res.token);

                localStorage.setItem("token", res.token);
                setError(null);
            })
            .catch((err) => {
                setError(err.message || "Errore durante il login");
                setResult(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        postData,
        login,
        result,
        error,
        loading,
    };
}
