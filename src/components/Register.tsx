import { useState } from "react";
import { usePost } from "../hooks/useRegister";

export function Register() {
    const endpoint = 'https://d3660g9kardf5b.cloudfront.net/api/register';
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    const { postData } = usePost();
    return (
        <div>

            <h1>Register</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    postData({ username, password }, endpoint);
                }}
            >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                {/* <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div> */}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button> 
            </form>
        </div>
    );
}
