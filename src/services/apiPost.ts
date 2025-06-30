import type { Register } from "../types/accessType";

// modificare il tipo di data in base allo swagger e togliere i valori di default
export async function postRegister(
    data: Register,
    token?: string 
) {
    const endpoint = "https://d3660g9kardf5b.cloudfront.net/api/register";

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        // in base allo swagger cambiare i nomi degli attributi
        body: JSON.stringify({
            username: data.username,
            // email: data.email,
            password: data.password,
        }),
    });

    if (!response.ok) throw new Error('errore nella post')
}
