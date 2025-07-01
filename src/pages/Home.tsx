import { Navbar } from "../components/Navbar";

export function Home () {

    const nomeProgetto: string = "react-template";

    return (
        <>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Benvenuto in {nomeProgetto}</h1>
                <p className="text-muted mt-3">
                    Questo è un template React per gestire dati con API
                </p>
            </div>
            <div className="container text-center mt-5">
                <h2>Inizia a utilizzare il template</h2>
                <p className="text-muted mt-3">
                    Segui le istruzioni nella documentazione per configurare il tuo progetto.
                </p>
            </div>
        </>
    )
}

export default Home;