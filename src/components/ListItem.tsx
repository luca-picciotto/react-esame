import { useNavigate } from "react-router";
import useGetAll from "../hooks/useGetAll";
import { Navbar } from "./Navbar";
import type { Result } from "../types/resultType";

export function ListItem() {
    const { result, error, loading } = useGetAll();
    const navigate = useNavigate();

  
    if (loading) {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="loading">Loading...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="alert alert-danger">
                        <h4 className="alert-heading">Errore di caricamento</h4>
                        <p className="mb-2">
                            Non è stato possibile caricare i dati: {error}
                        </p>
                    </div>
                </div>
            </>
        );
    }
    if (!result || result.length === 0) {
        return (
            <>
                <Navbar />
                <div className="container">
                    <h1 className="mb-4">List Items</h1>
                    <div className="alert alert-info">
                        <p className="mb-0">Nessun elemento trovato.</p>
                    </div>
                </div>
            </>
        );
    }
    try {
        return (
            <>
                <Navbar />
                <div className="container">
                    <h1 className="mb-4">List Items</h1>
                    <div className="list-group">
                        {result?.map((res: Result) => (
                            <div
                                key={res.id}
                                className="list-group-item list-group-item-action"
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-1">{res.id}</h5>
                                        <p className="mb-1 text-muted">
                                            {Object.keys(res)[1]},{" "}
                                            {Object.keys(res)[2]}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigate(`/item`, {
                                                state: { item: res },
                                            });
                                        }}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    } catch (renderError) {
        console.error("Render error in ListItem:", renderError);
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="alert alert-danger mt-4">
                        <h4>Errore di rendering</h4>
                        <p>
                            Si è verificato un errore durante la visualizzazione
                            dei dati.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default ListItem;
