import { useState } from "react";
import { usePost } from "../hooks/usePost";

export function Register() {
    const endpoint = 'https://d3660g9kardf5b.cloudfront.net/api/register';
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    const { postData } = usePost();
    return (
        <div>
            <h2 className="mb-4">Register</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    postData({ username, password }, endpoint);
                }}
            >
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
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
                    <label htmlFor="password" className="form-label">Password:</label>
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
                <button type="submit" className="btn btn-success w-100">
                    Register
                </button> 
            </form>
        </div>
    );
}
