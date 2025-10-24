import React, { useState} from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-slate-950 shadow-md">
            <div className="mx-auto px-6 py-6 flex justify-between items-center">
                <Link to="/" className="flex align-left items-center space-x-2 text-gray-300 hover:text-red-50">
                    <img src="/logo-lt.png" alt="Jobbox Logo" className="h-8" />
                    <h1 className="text-2xl font-bold italic">Jobbox</h1>
                </Link>

                {/* Bouton burger (mobile) */}
                <button
                    className="md:hidden text-gray-300 hover:text-red-50 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                <nav className={`${
                        menuOpen ? 'block' : 'hidden'
                    } absolute top-16 right-0 md:static md:flex`} >
                    <ul className="flex items-center flex-col space-y-4 pr-8 md:flex-row md:space-x-10 md:space-y-0 md:pr-0">
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