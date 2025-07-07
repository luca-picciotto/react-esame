import { useState } from "react";
import { Register } from "../components/Register";
import Login from "../components/Login";
import { Navbar } from "../components/Navbar";

export function Access() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    
    return (
        <>
            <Navbar />
            <div className="container-sm mt-4">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center mb-0">Access</h1>
                    </div>
                    <div className="card-body">
                        {/* Tabs di selezione */}
                        <div className="nav-tabs mb-4">
                            <button
                                onClick={() => setActiveTab("login") }
                                className={`nav-tab ${
                                    activeTab === "login" ? "active" : ""
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setActiveTab("register")}
                                className={`nav-tab ${
                                    activeTab === "register" ? "active" : ""
                                }`}
                            >
                                Register
                            </button>
                        </div>

                        {/* Contenuto dinamico */}
                        <div>
                            {activeTab === "login" ? <Login /> : <Register />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Access;
