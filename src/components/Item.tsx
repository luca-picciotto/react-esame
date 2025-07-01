import { useLocation, useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import type { LocationState } from "../types/generalType";

export function Item() {
    const navigate = useNavigate();
    const location = useLocation();

    const item = (location.state as LocationState)?.item;

   if (!item) {
        navigate("/list");
        return null;
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Item Details</h1>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">
                        Go Back
                    </button>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">{item.name}</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(item).map(([key, value]) => (
                                    <tr key={key}>
                                        <td className="fw-bold">{key}</td>
                                        <td>{String(value)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
