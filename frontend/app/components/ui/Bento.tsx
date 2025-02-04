import React from 'react';

export default function Bento() {
  return (
    <div className="w-full max-w-2xl">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-3 sm:gap-4">
        {/* Grande carte à gauche */}
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-light-yellow shadow-sm">
          <div className="p-4">
            <h3 className="text-sm font-medium text-dark-green font-urbanist">
              Mobile friendly
            </h3>
            <p className="mt-1 text-sm text-dark-green font-urbanist line-clamp-2">
              Anim aute id magna aliqua ad ad non deserunt sunt.
            </p>
          </div>
          <div className="p-2">
            <div className="h-52 w-full rounded-lg bg-light-green/20"></div>
          </div>
        </div>

        {/* Carte en haut à droite */}
        <div className="relative overflow-hidden rounded-2xl bg-dark-green p-4 shadow-sm">
          <h3 className="text-sm font-medium text-light-yellow font-urbanist">
            Performance
          </h3>
          <p className="mt-1 text-sm text-light-yellow font-urbanist line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur.
          </p>
          <div className="absolute bottom-0 right-0 p-2">
            <div className="h-12 w-12 rounded-lg bg-light-green/20"></div>
          </div>
        </div>

        {/* Carte en bas à droite */}
        <div className="relative overflow-hidden rounded-2xl bg-grey p-4 shadow-sm">
          <h3 className="text-sm font-medium text-dark font-urbanist">
            Security
          </h3>
          <p className="mt-1 text-sm text-dark font-urbanist line-clamp-2">
            Morbi viverra dui mi arcu sed tellus.
          </p>
          <div className="absolute bottom-0 right-0 p-2">
            <div className="h-12 w-12 rounded-lg bg-light-green/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
