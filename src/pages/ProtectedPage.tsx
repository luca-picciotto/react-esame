import { useEffect, useState, type PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export function ProtectedPage({ children }: PropsWithChildren) {
    const [authorized, setAuthorized] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || token?.trim() === "") {
            navigate("/access");
        } else {
            setAuthorized(true);
        }
    }, [navigate]);

    if (!authorized) {
        return (
            <div className="container">
                <div className="loading">Loading...</div>
            </div>
        );
    } else {
        return children;
    }
}
