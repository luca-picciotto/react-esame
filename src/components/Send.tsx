import { useState } from "react";
import { usePost } from "../hooks/usePost";

export function Send() {
    const endpoint = "http://localhost:3000/api/permissions";
    const [name, setName] = useState<string>("");
    const { postData } = usePost();
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1 className="card-title">Send</h1>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-muted mb-4">
                            Send component is under construction.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                postData({ name }, endpoint);
                            }}
                        >
                            <div className="form-group">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter name..."
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Send;
