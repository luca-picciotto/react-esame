import { Link } from "react-router";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">User Register</Link>
                </li>
                <li>
                    <Link to="/list">List Item</Link>
                </li>
            </ul>
        </nav>
    );
}
