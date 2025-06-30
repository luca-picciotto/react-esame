import { useEffect, useState } from "react";
import type { Result } from "../types/resultType";
import { getAll } from "../services/apiGet";

export function useGetAll () {

    const [result, setResult] = useState<Result[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        setLoading(true);

        getAll()
            .then((res: Result[])=> {
                setResult(res);
            })
            .catch((err: string)=> {
                setError(err);
            })
            .finally(()=>{
                setLoading(false);
            })
    }, [])

    return {result, error, loading};
}

export default useGetAll;