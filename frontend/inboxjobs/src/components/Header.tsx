import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Users, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-50">
            <nav className="flex justify-between items-center">
                <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition"
                        onClick={() => navigate("/")}>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="40" fill="orange" />
                            <circle cx="50" cy="50" r="35" fill="#FEF3C7" />
                            <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75" stroke="#FCD34D" strokeWidth="2" />
                            <circle cx="50" cy="50" r="8" fill="#FCD34D" />
                        </svg>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold">LinkOut</span>
                </button>
                
                {/* Desktop Menu - visible à partir de 640px */}
                <div className="hidden sm:flex gap-4 items-center">
                    <button className="px-6 py-2 text-orange-600 hover:text-orange-700 font-medium transition">
                        Connexion
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full
                                     hover:from-orange-600 hover:to-yellow-600 font-medium shadow-lg shadow-orange-200 transition"
                                     onClick={() => navigate("/register")}>
                        S'inscrire
                    </button>
                </div>

                {/* Mobile Burger Menu - visible uniquement en dessous de 640px */}
                <button 
                    className="block sm:hidden p-2 text-orange-600 hover:text-orange-700 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="sm:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
                    <div className="flex flex-col p-4 gap-3">
                        <button 
                            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 font-medium shadow-lg shadow-orange-200 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Connexion
                        </button>
                        <button 
                            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 font-medium shadow-lg shadow-orange-200 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            S'inscrire
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;