import React from 'react';

export default function SectionNumber() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-3">
        <span className="text-dark-green font-urbanist font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl bg-light-yellow px-2 py-1 rounded-lg">
          20 millions
        </span>
        <span className="text-dark-green font-urbanist text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
          de tonnes de CO₂ évitées
        </span>
      </div>
      <span className="text-dark-green font-urbanist text-lg sm:text-xl lg:text-2xl xl:text-3xl mt-3 text-center">
        chaque année grâce au recyclage
      </span>
    </div>
  );
}
