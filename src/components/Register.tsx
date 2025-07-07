import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

export function Register() {
    const endpoint = "https://d3660g9kardf5b.cloudfront.net/api/register";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    const { error, postData } = usePost();
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token && token?.trim() !== "") navigate("/");
    // }, [navigate]);
    return (
        <div>
            <h2 className="mb-4">Register</h2>
            <form
                onSubmit={(e) => {
                    if (username.trim() === "" || password.trim() === "") {
                        setAlertMessage("Username and password are required");
                        e.preventDefault();
                        return;
                    } else {
                        postData({ username, password }, endpoint);
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
                {error && <p>{error?.toString()}</p>}
                <button type="submit" className="btn btn-success w-100">
                    Register
                </button>
            </form>
        </div>
    );
}
