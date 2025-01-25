import React from 'react';

export default function Description() {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-2">
            <h2 className="text-dark-green font-urbanist font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
              Ton guide pour
            </h2>
            <h2 className="text-dark-green font-urbanist bg-light-yellow font-bold text-2xl sm:text-3xl lg:text-4xl px-3 py-1 text-center lg:text-left">
              trier facilement
            </h2>
            <h2 className="text-dark-green font-urbanist font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
              tes déchets
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <p className="text-dark-green font-urbanist text-base sm:text-lg text-center lg:text-left max-w-2xl">
            Bienvenue sur{' '}
            <span className="text-dark-green font-urbanist font-bold">
              Recycle Me
            </span>
            , ton guide pratique pour trier facilement tes déchets. Choisis ta
            ville, trouve en quelques clics{' '}
            <span className="text-dark-green font-urbanist font-bold pr-1">
              la bonne poubelle
            </span>
            pour chaque produit, et consulte les jours et{' '}
            <span className="text-dark-green font-urbanist font-bold pr-1">
              horaires de ramassage
            </span>
            presque chez toi. Ensemble, adoptons les bons gestes pour préserver
            l&apos;environnement !
          </p>
        </div>
      </div>
    </div>
  );
}
