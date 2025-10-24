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
      <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to InboxJobs</h1>

        {user ? (
            <div className="text-center space-y-4">
            <p className="text-lg">Hello, <span className="font-semibold">{user.username}</span>!</p>
            <button
                onClick={() => navigate("/dashboard")}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Go to Dashboard
            </button>
            </div>
        ) : (
            <div className="text-center space-y-4">
            <p className="text-lg">Please log in to access your dashboard.</p>
            <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Login
            </button>
            </div>
        )}
      </main>
  );
};

export default Home;