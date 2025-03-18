import React from 'react';
import mountain_2 from '../../assets/mountain_2.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative bg-grey overflow-visible">
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center p-16">
        <div className="flex flex-col w-full sm:w-1/3 gap-4">
          <h4 className="font-urbanist text-lg font-semibold text-dark-green">
            Recycle Me
          </h4>
          <p className="font-urbanist text-base text-dark-green">
            Recycle.me est une application web visant à aider les consommateurs
            à trier leur déchet facilement{' '}
          </p>
          <button className="bg-light-green p-3 rounded-3xl w-full sm:w-44 flex flex-row justify-center items-center hover:scale-105 transition-transform mt-3">
            <span className="text-dark-green font-urbanist font-semibold">
              Contacte-nous
            </span>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-0 mt-10">
          <ul>
            <li className="font-urbanist text-base text-dark-green">Accueil</li>
            <li className="font-urbanist text-base text-dark-green">
              Rechercher un produit
            </li>
            <li className="font-urbanist text-base text-dark-green">
              Horaires de ramassage
            </li>
            <li className="font-urbanist text-base text-dark-green">
              Les bons gestes
            </li>
            <li className="font-urbanist text-base text-dark-green">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-0 mt-10">
          <ul>
            <li className="font-urbanist text-base text-dark-green">
              Mentions légales
            </li>
            <li className="font-urbanist text-base text-dark-green">
              Politique de confidentialité
            </li>
            <li className="font-urbanist text-base text-dark-green">
              Politique de cookies
            </li>
          </ul>
        </div>
      </div>    
      <div className='w-full absolute left-0 right-0 justify-center items-center sm:block hidden'>
          <p className="font-semibold uppercase text-center mix-blend-screen text-black bg-gray-200 w-screen sm:text-8xl md:text-8xl lg:text-[150px] xl:text-[180px]">
              Rejoins nous
          </p>
      </div>
      <div className='static sm:block hidden'>
        <Image src={mountain_2} alt="mountain" className="w-full object-cover object-bottom h-[400px]" />
      </div>
    </div>
  );
}
