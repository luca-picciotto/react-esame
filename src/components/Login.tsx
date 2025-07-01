export function Login() {
    return (
         <div>
            <h2 className="mb-4">Login</h2>
            <form>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;