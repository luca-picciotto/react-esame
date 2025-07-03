// modificare il tipo di data in base allo swagger e togliere i valori di default
export async function post(
    data: any,
    endpoint: string
    // token?: string 
) {

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        // in base allo swagger cambiare i nomi degli attributi
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('errore nella post')
    const result = await response.json();
    return result;
}
