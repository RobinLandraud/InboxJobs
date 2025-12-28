import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Users, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate("/");
    } catch {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-900 mb-2">
            Bon retour !
          </h1>
          <p className="text-orange-700">
            Connectez-vous pour continuer l'aventure
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label className="block text-orange-900 font-medium mb-2">
                Nom d'utilisateur ou Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="votre@email.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-orange-900 font-medium mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-orange-600 hover:text-orange-800 font-medium text-sm transition"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Submit Button */}
            {!loading ? (
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 shadow-lg shadow-orange-200 transition transform hover:scale-105"
              >
                Se connecter
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-xl font-semibold cursor-not-allowed opacity-70"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion en cours...
                </span>
              </button>
            )}
          </form>
        </div>

        {/* Sign up Link */}
        <div className="text-center mt-6">
          <p className="text-orange-700">
            Pas encore de compte ?{' '}
            <button
              onClick={() => navigate("/register")}
              className="text-orange-600 font-semibold hover:text-orange-800 transition"
            >
              Inscrivez-vous
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}