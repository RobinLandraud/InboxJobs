import React, { useEffect, useState } from 'react';
import { Users, User, Sparkles, Calendar, Heart } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Lemons Parallax Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lemon 1 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '10%', 
            left: '5%', 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` 
          }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon 2 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '25%', 
            right: '8%', 
            transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.05}deg)` 
          }}
        >
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon 3 */}
        <div 
          className="absolute opacity-15"
          style={{ 
            top: '50%', 
            left: '10%', 
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.08}deg)` 
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon 4 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '70%', 
            right: '15%', 
            transform: `translateY(${scrollY * 0.25}px) rotate(${-scrollY * 0.1}deg)` 
          }}
        >
          <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon 5 - Small */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '40%', 
            right: '25%', 
            transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * 0.12}deg)` 
          }}
        >
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon 6 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '85%', 
            left: '20%', 
            transform: `translateY(${scrollY * 0.3}px) rotate(${-scrollY * 0.08}deg)` 
          }}
        >
          <svg width="95" height="95" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#FCD34D" />
            <ellipse cx="50" cy="50" rx="28" ry="33" fill="#FDE68A" />
            <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#FBBF24" opacity="0.3" />
            <circle cx="50" cy="15" r="8" fill="#84CC16" />
          </svg>
        </div>

        {/* Lemon Slice 1 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '15%', 
            right: '30%', 
            transform: `translateY(${scrollY * 0.28}px) rotate(${scrollY * 0.15}deg)` 
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="#FDE68A" />
            <circle cx="50" cy="50" r="35" fill="#FEF3C7" />
            <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75" stroke="#FCD34D" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#FCD34D" />
          </svg>
        </div>

        {/* Lemon Slice 2 */}
        <div 
          className="absolute opacity-30"
          style={{ 
            top: '60%', 
            left: '35%', 
            transform: `translateY(${scrollY * 0.32}px) rotate(${-scrollY * 0.1}deg)` 
          }}
        >
          <svg width="75" height="75" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="#FDE68A" />
            <circle cx="50" cy="50" r="35" fill="#FEF3C7" />
            <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75" stroke="#FCD34D" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#FCD34D" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-orange-600 font-medium text-xs sm:text-base">✨ Solo ou en groupe, à vous de choisir</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Rencontrez des amis… <br/>Pas des profils
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-orange-800 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Rencontrez d'autres personnes ou groupes qui partagent vos passions pour des sorties conviviales et amusantes.
          </p>
          
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full text-base sm:text-lg font-semibold hover:from-orange-600 hover:to-yellow-600 shadow-2xl shadow-orange-300 transform hover:scale-105 transition">
            Commencer l'aventure
          </button>
        </div>

        {/* Illustration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2 sm:mb-3">En solo</h3>
            <p className="text-sm sm:text-base text-orange-700">
              Rencontrez d'autres personnes seules qui partagent vos passions
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2 sm:mb-3">En groupe</h3>
            <p className="text-sm sm:text-base text-orange-700">
              Créez votre groupe d'amis et rencontrez d'autres groupes
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2 sm:mb-3">Matchs variés</h3>
            <p className="text-sm sm:text-base text-orange-700">
              Groupe contre groupe, solo contre solo, ou mixez les deux
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2 sm:mb-3">Sorties fun</h3>
            <p className="text-sm sm:text-base text-orange-700">
              Planifiez des activités et découvrez de nouvelles amitiés
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-orange-900">
            Comment ça marche ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2">Inscrivez-vous</h3>
                  <p className="text-sm sm:text-base text-orange-700">Créez votre profil et partagez vos passions, hobbies et ce que vous aimez faire</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2">Choisissez votre mode</h3>
                  <p className="text-sm sm:text-base text-orange-700">Rencontrez en solo ou créez/rejoignez un groupe d'amis selon vos envies</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-orange-900 mb-2">Rencontrez</h3>
                  <p className="text-sm sm:text-base text-orange-700">Découvrez d'autres solos ou groupes dans votre région et organisez des sorties</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-6 sm:p-12 shadow-2xl">
              <div className="bg-white/90 rounded-2xl p-4 sm:p-8 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="font-semibold text-sm sm:text-base text-orange-900">Nouveaux matchs</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {['Les Aventuriers 🏔️', 'Team Foodie 🍕', 'Culture Club 🎭'].map((group, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-xl">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base text-orange-900 truncate">{group}</div>
                        <div className="text-xs sm:text-sm text-orange-600">3 km • 4 membres</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Prêt à vivre de nouvelles aventures ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-6 sm:mb-8 px-2">
            Rejoignez GroupMeet dès aujourd'hui et commencez à créer des souvenirs inoubliables
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-orange-600 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-50 shadow-lg transform hover:scale-105 transition">
            Créer mon compte gratuitement
          </button>
        </div>
      </section>
    </main>
    );
};