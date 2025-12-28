import React, { useState } from 'react';
import { Users, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    interests: [] as string[],
    description: ''
  });

  const totalSteps = 5;

  const interestOptions = [
    '🏃 Sport',
    '🎬 Cinéma',
    '🎵 Musique',
    '🍕 Cuisine',
    '✈️ Voyages',
    '📚 Lecture',
    '🎨 Art',
    '🎮 Jeux vidéo',
    '🌿 Nature',
    '🍷 Gastronomie',
    '🏔️ Randonnée',
    '🎭 Théâtre'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInterestToggle = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Logique d'inscription ici
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '' && formData.lastName.trim() !== '';
      case 2:
        return formData.email.trim() !== '' && formData.email.includes('@');
      case 3:
        return formData.age !== '' && parseInt(formData.age) >= 18;
      case 4:
        return formData.interests.length > 0;
      case 5:
        return formData.description.trim().length >= 20;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-orange-600">GroupMeet</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-2">
            Créez votre compte
          </h1>
          <p className="text-orange-700">
            Étape {currentStep} sur {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500'
                    : 'bg-orange-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-6 sm:p-8 mb-6">
          {/* Step 1: Nom et Prénom */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  Commençons par votre identité
                </h2>
                <p className="text-orange-700">Comment vous appelez-vous ?</p>
              </div>
              <div>
                <label className="block text-orange-900 font-medium mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-orange-900 font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  placeholder="Votre nom"
                />
              </div>
            </div>
          )}

          {/* Step 2: Email */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  Votre adresse email
                </h2>
                <p className="text-orange-700">Nous l'utiliserons pour vous contacter</p>
              </div>
              <div>
                <label className="block text-orange-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>
          )}

          {/* Step 3: Age */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  Quel âge avez-vous ?
                </h2>
                <p className="text-orange-700">Vous devez avoir au moins 18 ans</p>
              </div>
              <div>
                <label className="block text-orange-900 font-medium mb-2">
                  Âge
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                  placeholder="Votre âge"
                  min="18"
                />
              </div>
            </div>
          )}

          {/* Step 4: Centres d'intérêt */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  Vos centres d'intérêt
                </h2>
                <p className="text-orange-700">
                  Sélectionnez au moins un centre d'intérêt ({formData.interests.length} sélectionné{formData.interests.length > 1 ? 's' : ''})
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-3 rounded-xl font-medium transition border-2 ${
                      formData.interests.includes(interest)
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-transparent shadow-lg'
                        : 'bg-white text-orange-700 border-orange-200 hover:border-orange-400'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Description */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  Parlez-nous de vous
                </h2>
                <p className="text-orange-700">
                  Décrivez-vous en quelques mots (minimum 20 caractères)
                </p>
              </div>
              <div>
                <label className="block text-orange-900 font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition resize-none"
                  placeholder="Dites-nous qui vous êtes, ce que vous aimez faire, vos passions..."
                  rows={6}
                />
                <p className="text-sm text-orange-600 mt-2">
                  {formData.description.length} / 20 caractères minimum
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 border-2 border-orange-200 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                isStepValid()
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 shadow-lg shadow-orange-200'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                isStepValid()
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 shadow-lg shadow-orange-200'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Check className="w-5 h-5" />
              Créer mon compte
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-orange-700">
          Vous avez déjà un compte ?{' '}
          <button className="text-orange-600 font-semibold hover:text-orange-800 transition">
            Connectez-vous
          </button>
        </div>
      </div>
    </div>
  );
}