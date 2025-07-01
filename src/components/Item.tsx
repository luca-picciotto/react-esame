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
            <h1>Item Details</h1>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>
                            Property
                        </th>
                        <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(item).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                {key}
                            </td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                {String(value)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}
