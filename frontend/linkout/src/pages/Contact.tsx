import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-orange-800 text-lg sm:text-xl">
            Vous avez des questions ou souhaitez en savoir plus ? Nous sommes là pour vous aider.
          </p>
        </header>

        {/* Informations de contact */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
            <Mail className="w-16 h-16 text-orange-600 mb-3 animate-pulse" />
            <h2 className="text-2xl font-bold text-orange-900 mb-1">Email</h2>
            <p className="text-orange-700 text-center">contact@linkout.com</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
            <Phone className="w-16 h-16 text-orange-600 mb-3 animate-pulse" />
            <h2 className="text-2xl font-bold text-orange-900 mb-1">Téléphone</h2>
            <p className="text-orange-700 text-center">+33 7 69 10 80 40</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
            <MapPin className="w-16 h-16 text-orange-600 mb-3 animate-pulse" />
            <h2 className="text-2xl font-bold text-orange-900 mb-1">Adresse</h2>
            <p className="text-orange-700 text-center">712 La Brande, Jugeals-Nazareth, France</p>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="bg-white/90 backdrop-blur-sm p-6 sm:p-12 rounded-3xl shadow-2xl border border-orange-100 space-y-6">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Envoyez-nous un message</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="p-4 rounded-2xl border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              className="p-4 rounded-2xl border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="p-4 rounded-2xl border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              Envoyer
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
