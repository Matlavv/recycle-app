'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center p-4 sm:p-8 bg-white">
      <div className="flex items-center">
        <Image src={logo} alt="logo" className="sm:w-10 sm:h-12 w-6 h-7 sm:mr-8 mr-2" />
        <h1 className="text-dark-green text-lg font-bold font-urbanist">
          Recycle Me
        </h1>
      </div>

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
  );
};
