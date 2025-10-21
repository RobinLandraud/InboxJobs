import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    return (
        <main>
            <h1>Welcome to InboxJobs</h1>
            {user ? (
                <div>
                    <p>Hello, {user.username}!</p>
                    <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
                </div>
            ) : (
                <div>
                    <p>Please log in to access your dashboard.</p>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            )}
        </main>
    );
};

export default Home;