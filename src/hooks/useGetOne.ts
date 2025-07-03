import { useState } from "react";
import type { Result } from "../types/resultType";
import { getOne } from "../services/apiGet";

export function useGetOne() {
    const [result, setResult] = useState<Result>();
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);
    const endpoint = "http://localhost:3000/api";
    const getDetail = (id: number): Promise<Result> => {
        setLoading(true);
        setError(null);

        return getOne(id, endpoint)
            .then((data) => {
                setResult(data);
                return data;
            })
            .catch((err) => {
                setError(err.message || "Errore nella ricerca");
                return err;
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { result, error, loading, getDetail };
}

export default useGetOne;
