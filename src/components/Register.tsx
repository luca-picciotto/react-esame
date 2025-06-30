import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

export function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    const { register } = useRegister()
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                register({ username, password})
            }}>
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
