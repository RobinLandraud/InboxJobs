import React from "react";
import useAuth from "../hooks/useAuth";

const Header: React.FC = () => {
    const { user } = useAuth();

    return (
        <header className="bg-slate-950 shadow-md">
            <div className="mx-auto px-6 py-6 flex justify-between items-center">
                <a href="/" className="flex align-left items-center space-x-2 text-gray-300 hover:text-red-50">
                    <img src="/logo-lt.png" alt="Jobbox Logo" className="h-8" />
                    <h1 className="text-2xl font-bold italic">Jobbox</h1>
                </a>
                <nav>
                    <ul className="flex space-x-10">
                        <li>
                            <a href="/jobs" className="text-gray-300 hover:text-red-50 transition">Applications</a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-300 hover:text-red-50 transition">Saves</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-300 hover:text-red-50 transition">Documents</a>
                        </li>
                        <li>
                            {user ? (
                                <a href="/profile" className="px-4 py-2 bg-gray-700 text-gray-100 rounded-2xl hover:bg-gray-600 transition">Profile</a>
                            ) : (
                                <a href="/login" className="px-4 py-2 bg-gray-700 text-gray-100 rounded-2xl hover:bg-gray-600 transition">Login</a>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;