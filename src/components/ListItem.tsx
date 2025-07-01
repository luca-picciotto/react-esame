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
                    <div className="alert alert-danger">{error}</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="mb-4">List Items</h1>
                <div className="list-group">
                    {result?.map((res: Result) => (
                        <div key={res.id} className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{res.name}</h5>
                                    <p className="mb-1 text-muted">{res.address}, {res.city}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        navigate(`/item`, {state: { item: res } });
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
}

export default ListItem;
