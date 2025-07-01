import { Link } from "react-router";

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/access">User Access</Link>
                    </li>
                    <li>
                        <Link to="/list">List Item</Link>
                    </li>
                    <li>
                        <Link to="/send">Send Item</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
