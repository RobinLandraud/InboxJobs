import React, { useState} from "react";
import { Users } from 'lucide-react';

const Header: React.FC = () => {

    return (
        <footer className="container mx-auto px-6 py-12 border-t border-orange-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-600">GroupMeet</span>
            </div>
            <div className="flex gap-8 text-orange-700">
                <a href="#" className="hover:text-orange-900 transition">À propos</a>
                <a href="#" className="hover:text-orange-900 transition">Contact</a>
                <a href="#" className="hover:text-orange-900 transition">Confidentialité</a>
                <a href="#" className="hover:text-orange-900 transition">CGU</a>
            </div>
            </div>
            <div className="text-center mt-8 text-orange-600">
            © 2024 GroupMeet. Tous droits réservés.
            </div>
        </footer>
    );
}

export default Header;