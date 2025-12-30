import React, { useState} from "react";
import { Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="container mx-auto px-6 py-12 border-t border-orange-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" fill="orange" />
                    <circle cx="50" cy="50" r="35" fill="#FEF3C7" />
                    <path
                        d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75"
                        stroke="#FCD34D"
                        strokeWidth="2"
                    />
                    <circle cx="50" cy="50" r="8" fill="#FCD34D" />
                </svg>
                </div>
                <span className="text-xl font-bold text-orange-600">LinkOut</span>
            </div>
            <div className="flex gap-8 text-orange-700">
                <button className="hover:text-orange-900 transition"
                    onClick={() => navigate('/loneliness')}
                >À propos</button>
                <button className="hover:text-orange-900 transition"
                    onClick={() => navigate('/contact')}
                >Contact</button>
                <button className="hover:text-orange-900 transition"
                    onClick={() => navigate('/cgu')}
                >CGU</button>
            </div>
            </div>
            <div className="text-center mt-8 text-orange-600">
            © 2025 LinkOut. Tous droits réservés.
            </div>
        </footer>
    );
}

export default Header;