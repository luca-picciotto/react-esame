import { Navbar } from "../components/Navbar";

export function Home () {

    const nomeProgetto: string = "react-template";

    return (
        <>
            <h1>Benvenuto in {nomeProgetto}</h1>
            <Navbar />
            
        </>
    )
}

export default Home;