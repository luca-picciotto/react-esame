// modificare il tipo di data in base allo swagger e togliere i valori di default
export async function postOne(
    token?: string ,
    data: { username: string; password: string } = {username: "s", password: "s"}
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
            password: data.password,
        }),
    });

    if (!response.ok) throw new Error('errore nella post')
}
