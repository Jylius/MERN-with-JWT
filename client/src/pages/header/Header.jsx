import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");  // Token'ı doğru şekilde kaldır
        navigate("/login");
    }

    return (
        <header className={`navbar ${token ? "has-background-primary" : "has-background-dark"}`}>
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-item has-text-white has-text-weight-bold">
                        {token ? "Logged In" : "Not Logged In"}
                    </span>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        {token ? (
                            <>
                                <Link to="/dashboard" className="navbar-item has-text-white">Dashboard</Link>
                                <button onClick={handleLogout} className="navbar-item has-text-white">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="navbar-item has-text-white">Login</Link>
                                <Link to="/register" className="navbar-item has-text-white">Signup</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}