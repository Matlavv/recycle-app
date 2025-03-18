import React from 'react';

export default function Description() {
  return (
    <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-2">
          <h2 className="text-dark-green font-urbanist font-bold text-2xl sm:text-3xl lg:text-4xl ">
            Ton guide pour
          </h2>
          <h2 className="text-dark-green font-urbanist bg-light-yellow font-bold text-2xl sm:text-3xl lg:text-4xl px-2">
            trier facilement
          </h2>
          <h2 className="text-dark-green font-urbanist font-bold text-2xl sm:text-3xl lg:text-4xl lg:w-full lg:mt-2">
            tes déchets
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="text-dark-green font-urbanist text-base sm:text-lg text-center lg:text-left max-w-2xl flex flex-col gap-4">
            <p>
              Bienvenue sur <span className="font-bold">Recycle Me</span>, ton
              guide pratique pour trier facilement tes déchets. Choisis ta
              ville, trouve en quelques clics{' '}
              <span className="font-bold">la bonne poubelle</span> pour chaque
              produit, et consulte les jours et{' '}
              <span className="font-bold">horaires de ramassage</span> presque
              chez toi.
            </p>
            <p className="font-bold">
              Ensemble, adoptons les bons gestes pour préserver
              l&apos;environnement !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
