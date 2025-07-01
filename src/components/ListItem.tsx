import { useNavigate } from "react-router";
import useGetAll from "../hooks/useGetAll";
import { Navbar } from "./Navbar";
import type { Result } from "../types/resultType";

export function ListItem() {
    const { result, error, loading } = useGetAll();
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>List Items</h1>
            <Navbar />
            <div>
                {result?.map((res: Result) => (
                    <div key={res.id}  >
                        <p>{res.name}</p>
                        <button
                            onClick={() => {
                                console.log();
                                
                                navigate(`/item`, {state: { item: res } });
                            }}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListItem;
