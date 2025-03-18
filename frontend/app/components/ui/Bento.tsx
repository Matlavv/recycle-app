import React from 'react';
import Image from 'next/image';
import leaves from '../../assets/leaves.png';
import jardin from '../../assets/jardin.jpg';
import bee from '../../assets/bee.jpg';

export default function Bento() {
  return (
    <div className="w-full max-w-2xl">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-3 sm:gap-4">
        {/* Grande carte à gauche */}
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-light-yellow shadow-sm">
          <Image src={leaves} alt="leaves" className="w-full h-full object-cover" />
        </div>

        {/* Carte en haut à droite */}
        <div className="relative overflow-hidden rounded-2xl shadow-sm">
          <Image src={jardin} alt="jardin" className="w-full h-full object-cover" />
        </div>

        {/* Carte en bas à droite */}
        <div className="relative overflow-hidden rounded-2xl shadow-sm">
          <Image src={bee} alt="jardin" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
