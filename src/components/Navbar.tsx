import { Link, useNavigate } from "react-router";

export function Navbar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List Item</Link>
                    </li>
                    <li>
                        <Link to="/access">User Access</Link>
                    </li>
                    
                    {token ? <button className="btn btn-danger" onClick={() => {localStorage.clear();  navigate('/access');}}>Logout</button>: ""}
                </ul>
            </div>
        </nav>
    );
}
