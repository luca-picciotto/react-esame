import ListItem from "../components/ListItem";

export function Home () {

    const nomeProgetto: string = "react-template";

    return (
        <>
            <h1>{nomeProgetto}</h1>
            <ListItem></ListItem>
        </>
    )
}

export default Home;