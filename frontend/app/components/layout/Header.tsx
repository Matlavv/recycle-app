'use client';

import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="flex flex-row justify-between items-center p-4 sm:p-8 bg-white">
        <h1 className="text-dark-green text-lg font-bold font-urbanist">
          Recycle Me
        </h1>

        {/* Menu hamburger pour mobile */}
        <button
          className="lg:hidden p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-dark-green mb-1.5"></div>
          <div className="w-6 h-0.5 bg-dark-green mb-1.5"></div>
          <div className="w-6 h-0.5 bg-dark-green"></div>
        </button>

        {/* Menu desktop */}
        <div className="hidden lg:block">
          <ul className="flex flex-row space-x-9 items-center">
            <li className="text-dark-green font-urbanist bg-light-yellow px-3 py-1 rounded-lg">
              Accueil
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-1 rounded-lg transition-colors">
              Horaires de ramassage
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-1 rounded-lg transition-colors">
              Les bons gestes
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-1 rounded-lg transition-colors">
              Contact
            </li>
            <li className="text-dark-green font-urbanist rounded-3xl bg-light-green px-4 py-2 hover:bg-opacity-90 transition-colors">
              Rechercher un produit
            </li>
          </ul>
        </div>
      </div>

      {/* Menu mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-4">
          <ul className="flex flex-col space-y-4">
            <li className="text-dark-green font-urbanist bg-light-yellow px-3 py-2 rounded-lg text-center">
              Accueil
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-2 rounded-lg text-center transition-colors">
              Horaires de ramassage
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-2 rounded-lg text-center transition-colors">
              Les bons gestes
            </li>
            <li className="text-dark-green font-urbanist hover:bg-light-yellow px-3 py-2 rounded-lg text-center transition-colors">
              Contact
            </li>
            <li className="text-dark-green font-urbanist rounded-3xl bg-light-green px-4 py-2 text-center hover:bg-opacity-90 transition-colors">
              Rechercher un produit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
