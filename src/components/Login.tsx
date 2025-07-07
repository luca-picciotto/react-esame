import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

export function Login() {
    const endpoint = "https://d3660g9kardf5b.cloudfront.net/api/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { error, login } = usePost();
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token && token?.trim() !== "") navigate("/");
    // }, [navigate]);
    return (
        <div>
            <h2 className="mb-4">Login</h2>
            <form
                onSubmit={(e) => {
                    if (username.trim() === "" || password.trim() === "") {
                        setAlertMessage("Username and password are required");
                        e.preventDefault();
                        return;
                    } else {
                        login({ username, password }, endpoint);
                        e.preventDefault();
                    }
                }}
            >
                <div className="form-group">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                {alertMessage && <p>{alertMessage}</p>}
                {error && (
                    <div className="container">
                        <div className="alert alert-danger">
                            <h4 className="alert-heading">
                                Errore di caricamento
                            </h4>
                            <p className="mb-2">
                                Non è stato possibile caricare i dati: {error}
                            </p>
                        </div>
                    </div>
                )}
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;
