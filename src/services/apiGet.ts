import type { Result } from "../types/resultType";

// se la get vuole un parametro nell'endpoint, inserirlo negli attributi della funzione
export async function getAll() {
    const endpoint: string = `https://d3660g9kardf5b.cloudfront.net/api/equipment`;
    try {
        const response: Response = await fetch(endpoint, {
            method: "GET",
            // headers: {
            //     "Authorization": `Bearer ${token}`,
            //     "Content-Type": "application/json"
            // }
        });

        if (!response.ok) throw new Error("errore nella getAll");

        const data: Result[] = await response.json();
        if (!Array.isArray(data)) {
            throw new Error("I dati ricevuti non sono in formato array");
        }
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Errore di connessione al server");
        }

        throw error;
    }
}

export async function getOne(
    param: number,
    endpoint: string
    // token?: string
) {
    try {
        const response: Response = await fetch(`${endpoint}/${param}`, {
            method: "GET",
            // headers: {
            //     "Authorization": `Bearer ${token}`,
            //     "Content-Type": "application/json"
            // }
        });

        if (!response.ok) throw new Error("errore nella getAll");

        const data: Result = await response.json();
        if (!data || typeof data !== "object") {
            throw new Error("Dati ricevuti non validi");
        }
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Errore di connessione al server");
        }

        throw error;
    }
}
