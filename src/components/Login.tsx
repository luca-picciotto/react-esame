import { useState } from "react";
import { usePost } from "../hooks/usePost";

export function Login() {
    const endpoint = "https://d3660g9kardf5b.cloudfront.net/api/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = usePost();

    return (
        <div>
            <h2 className="mb-4">Login</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    login({ username, password }, endpoint);
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
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;
