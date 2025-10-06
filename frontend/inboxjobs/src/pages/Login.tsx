import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate("/"); // Redirige vers la home
    } catch {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>
      <form onSubmit={handleSubmit} className="w-80 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Se connecter
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
