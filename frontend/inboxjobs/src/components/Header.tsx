import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const { user } = useAuth();

    return (
        <header className="bg-slate-950 shadow-md">
            <div className="mx-auto px-6 py-6 flex justify-between items-center">
                <Link to="/" className="flex align-left items-center space-x-2 text-gray-300 hover:text-red-50">
                    <img src="/logo-lt.png" alt="Jobbox Logo" className="h-8" />
                    <h1 className="text-2xl font-bold italic">Jobbox</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-10">
                        <li>
                            <Link to="/jobs" className="text-gray-300 hover:text-red-50 transition">Applications</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-300 hover:text-red-50 transition">Saves</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-300 hover:text-red-50 transition">Documents</Link>
                        </li>
                        <li>
                            {user ? (
                                <Link to="/profile" className="px-4 py-2 bg-gray-700 text-gray-100 rounded-2xl hover:bg-gray-600 transition">Profile</Link>
                            ) : (
                                <Link to="/login" className="px-4 py-2 bg-gray-700 text-gray-100 rounded-2xl hover:bg-gray-600 transition">Login</Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;