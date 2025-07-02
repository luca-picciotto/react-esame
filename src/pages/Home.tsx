import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export function Home () {

    const nomeProgetto: string = "react-template";

    return (
        <>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Benvenuto in {nomeProgetto}</h1>
                <p className="text-muted mt-3">
                    Istruzioni per l'uso:
                    <ul className="list-unstyled">
                        <li>1. Installa le dipendenze con <code>npm install</code></li>
                        <li>2. Avvia il server di sviluppo con <code>npm start</code></li>
                        <li>3. Modifica i file nella cartella <code>src</code> per iniziare a sviluppare</li>
                        <Link to="/istruzioni">Clicca qui</Link>
                    </ul>
                </p>
            </div>
           
        </>
    )
}

export default Home;