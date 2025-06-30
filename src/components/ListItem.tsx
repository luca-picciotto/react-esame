import { useNavigate } from "react-router";
import useGetAll from "../hooks/useGetAll";
import { Navbar } from "./Navbar";

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
                {result?.map((res) => (
                    <div key={res.show.id}>
                        <p>{res.show.name}</p>
                        <button
                            onClick={() => {
                                navigate(`/item/${res.show.id}`);
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
