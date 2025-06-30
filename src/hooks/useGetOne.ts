import { useState } from "react";
import type { Item } from "../types/resultType";
import { getOne } from "../services/apiGet";

export function useGetOne() {
    const [result, setResult] = useState<Item>();
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);

    const getDetail = (id: number): Promise<Item> => {
        setLoading(true);
        setError(null);

        return getOne(id)
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
