import React from 'react';
import Bento from '../ui/Bento';

export default function JoinUsSection() {
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="text-dark-green font-urbanist font-semiBold text-2xl sm:text-3xl lg:text-4xl">
        Le changement commence
        <span className="text-dark-green bg-light-yellow pl-2">avec vous</span>
      </h2>
      <div>
        <Bento />
      </div>
    </div>
  );
}
