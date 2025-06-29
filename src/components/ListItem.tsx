import useGetApi from "../hooks/useGetAll";

export function ListItem() {
    const { result, error, loading } = useGetApi();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) return <p>{error}</p>;

    return (
        <div>
            {result?.map((res) => (
                <p>{res.show.name}</p>
            ))}
        </div>
    );
}

export default ListItem;
