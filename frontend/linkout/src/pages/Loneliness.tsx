import React from "react";
import { User, Users, Heart } from "lucide-react";

export default function SolitudePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 p-6 sm:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Solitude et Isolement Social
          </h1>
          <p className="text-orange-800 text-lg sm:text-xl">
            Comprendre l'ampleur de la solitude et de l'isolement relationnel
            en France et dans le monde.
          </p>
        </header>

        {/* Pertinence de la solution */}
        <section className="grid md:grid-cols-2 gap-6 p-6 sm:p-12 rounded-3xl shadow-2xl border bg-white/90 border-orange-100">
          {/* Texte explicatif */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-900 mb-15">
              Pourquoi notre solution est d'actualité
            </h2>
            <p className="text-orange-700 text-base sm:text-lg">
              La solitude et l'isolement social ont fortement augmenté ces dernières années, en particulier après la crise sanitaire de 2020. Près d'un quart de la population française se sent régulièrement seule et l’isolement relationnel continue de croître depuis 2009.
            </p>
            <p className="text-orange-700 text-base sm:text-lg">
              Notre solution répond directement à cette problématique en favorisant la création de liens sociaux, facilitant les interactions et permettant un suivi régulier du bien-être relationnel. Elle s'inscrit pleinement dans le contexte actuel, validé par les études de la Fondation de France et de l'OMS.
            </p>
            <p className="text-orange-700 text-base sm:text-lg">
                En favorisant des interactions régulières et personnalisées, notre approche contribue non seulement à réduire la solitude, mais aussi à améliorer la qualité de vie et le bien-être mental des utilisateurs. Elle est particulièrement adaptée aux jeunes adultes, un des groupes les plus touchés par l’isolement.
            </p>
          </div>

          {/* Cartes visuelles uniformisées */}
            <div className="flex flex-col justify-center items-center space-y-6 w-full">
            {[ 
                { icon: Users, text: "+25% de Français se sentent souvent seuls" },
                { icon: User, text: "12% des Français de plus de 15 ans sont en situation d'isolement" },
                { icon: Heart, text: "+13% d’augmentation de l’isolement relationnel depuis 2009" }
            ].map((card, index) => {
                const Icon = card.icon;
                return (
                <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300 w-full max-w-xs min-h-[220px]"
                >
                    <Icon className="w-16 h-16 text-orange-600 mb-3 animate-pulse" />
                    <p className="text-orange-800 font-semibold text-center">
                    {card.text}
                    </p>
                </div>
                );
            })}
            </div>
        </section>

        {/* Sources */}
        <section className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl border border-orange-100 space-y-2">
          <h2 className="text-2xl font-bold text-orange-900 mb-2">Sources</h2>
          <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
            <li>
              <a
                className="underline hover:text-orange-600"
                href="https://www.who.int/teams/social-determinants-of-health/demographic-change-and-healthy-ageing/social-isolation-and-loneliness?utm_source=chatgpt.com"
                target="_blank"
              >
                OMS – Social Isolation and Loneliness
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-orange-600"
                href="https://www.fondationdefrance.org/fr/cat-personnes-vulnerables/etude-solitudes-2025?utm_source=chatgpt.com"
                target="_blank"
              >
                Fondation de France 2025 – Étude sur les solitudes
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
