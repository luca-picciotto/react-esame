import type { Result } from "../types/resultType";

// se la get vuole un parametro nell'endpoint, inserirlo negli attributi della funzione
export async function getAll() {
    const endpoint: string = `http://localhost:3000/api/users`;
    const response: Response = await fetch(endpoint, {
        method: "GET",
        // headers: {
        //     "Authorization": `Bearer ${token}`,
        //     "Content-Type": "application/json"
        // }
    });

    if (!response.ok) throw new Error("errore nella getAll");

    const data: Result[] = await response.json();

    return data;
}

export async function getOne(
    param: number,
    endpoint: string,
    // token?: string
) {
    const response: Response = await fetch(`${endpoint}/${param}`, {
        method: "GET",
        // headers: {
        //     "Authorization": `Bearer ${token}`,
        //     "Content-Type": "application/json"
        // }
    });

    if (!response.ok) throw new Error("errore nella getAll");

    const data: Result = await response.json();

    return data;
}
