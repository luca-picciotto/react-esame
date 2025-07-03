import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export function Home() {
    const nomeProgetto: string = "react-template";

    return (
        <>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Benvenuto in {nomeProgetto}</h1>
                <ul className="list-unstyled">
                    <p className="text-muted mt-3">
                        Istruzioni per l'uso:
                        <Link to="/istruzioni">Clicca qui</Link>
                    </p>
                </ul>
            </div>
        </>
    );
}

export default Home;
