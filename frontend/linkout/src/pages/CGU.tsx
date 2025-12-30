import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CGUPage() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex flex-col items-center p-6 sm:p-12">
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-8 sm:p-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-orange-900 mb-6 text-center">
                    Conditions Générales d'Utilisation (CGU)
                </h1>

                <p className="text-orange-700 mb-4">
                    Bienvenue sur <span className="font-semibold text-orange-900">Linkout</span>. 
                    En utilisant notre plateforme, vous acceptez les présentes Conditions Générales d’Utilisation.
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">1. Utilisation du service</h2>
                    <p className="text-orange-700">
                        Linkout permet aux utilisateurs de rencontrer d'autres personnes ou groupes partageant leurs passions.
                        Vous vous engagez à utiliser la plateforme de manière responsable et respectueuse des autres membres.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">2. Création de compte</h2>
                    <p className="text-orange-700">
                        Pour accéder à certaines fonctionnalités, vous devez créer un compte avec des informations exactes et à jour. 
                        La confidentialité de votre mot de passe est de votre responsabilité.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">3. Contenu et comportement</h2>
                    <p className="text-orange-700">
                        Vous vous engagez à ne pas publier de contenu offensant, discriminatoire ou illégal. 
                        Tout manquement peut entraîner la suspension ou la suppression de votre compte.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">4. Protection des données</h2>
                    <p className="text-orange-700">
                        Vos informations personnelles sont protégées conformément à notre politique de confidentialité. 
                        Nous ne partagerons pas vos données avec des tiers sans votre consentement.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">5. Responsabilité</h2>
                    <p className="text-orange-700">
                        Linkout a pour rôle de mettre en relation les utilisateurs afin de faciliter les rencontres. 
                        Nous ne sommes pas les organisateurs des événements ni responsables des interactions ou activités réalisées par les utilisateurs. 
                        Chaque participant est responsable de sa propre sécurité et de ses actions lors des rencontres.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-900 mb-2">6. Modification des CGU</h2>
                    <p className="text-orange-700">
                        Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des changements via la plateforme.
                    </p>
                </section>

                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition"
                    >
                        Retour
                    </button>
                </div>
            </div>
        </main>
    );
}