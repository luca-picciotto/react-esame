import { useNavigate, useParams } from "react-router";
import useGetOne from "../hooks/useGetOne";
import { useEffect, useState } from "react";
import type { Item } from "../types/resultType";

export function Item() {
    const { id } = useParams<{ id: string }>();
    const { getDetail } = useGetOne();
    const [item, setItem] = useState<Item>();
    const navigate = useNavigate();


    useEffect(() => {
       if(!id) {
            navigate("/list");
            return;
       }
            getDetail(parseInt(id))
                .then((data) => {
                    setItem(data);
                })
                .catch((error) => {
                    console.error("Error fetching item details:", error);
                });
    }, [id]);

    return(
        <div>
            <h1> Item </h1>
            <p>{item?.name}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}