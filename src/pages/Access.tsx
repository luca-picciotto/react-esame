// pages/Access.tsx
import { useState } from "react";
import { Register } from "../components/Register";
import Login from "../components/Login";
import { Navbar } from "../components/Navbar";

export function Access() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    return (
        <>
            <Navbar />
            <div
                style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}
            >
                <h1>Access</h1>

                {/* Bottoni di selezione */}
                <div
                    style={{
                        display: "flex",
                        marginBottom: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        overflow: "hidden",
                    }}
                >
                    <button
                        onClick={() => setActiveTab("login")}
                        style={{
                            flex: 1,
                            padding: "12px 20px",
                            border: "none",
                            backgroundColor:
                                activeTab === "login" ? "#007bff" : "#f8f9fa",
                            color: activeTab === "login" ? "white" : "#333",
                            cursor: "pointer",
                            fontWeight:
                                activeTab === "login" ? "bold" : "normal",
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setActiveTab("register")}
                        style={{
                            flex: 1,
                            padding: "12px 20px",
                            border: "none",
                            backgroundColor:
                                activeTab === "register"
                                    ? "#007bff"
                                    : "#f8f9fa",
                            color: activeTab === "register" ? "white" : "#333",
                            cursor: "pointer",
                            fontWeight:
                                activeTab === "register" ? "bold" : "normal",
                        }}
                    >
                        Register
                    </button>
                </div>

                {/* Contenuto dinamico */}
                <div>{activeTab === "login" ? <Login /> : <Register />}</div>
            </div>
        </>
    );
}

export default Access;
