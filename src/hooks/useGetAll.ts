import { useEffect, useState } from "react";
import type { Result } from "../types/resultType";
import { getAll } from "../services/apiGet";

export function useGetAll() {
    const [result, setResult] = useState<Result[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);

        getAll()
            .then((res: Result[]) => {
                setLoading(true);
                setError(null);
                setResult(res);
            })
            .catch((err) => {
                console.error("Errore nell'uso dei useGetAll: ", err);
                if (err instanceof Error) {
                    setError(err.message);
                } else if (typeof err === "string") {
                    setError(err);
                } else {
                    setError("Errore sconosciuto");
                }
                setResult(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { result, error, loading };
}

export default useGetAll;
