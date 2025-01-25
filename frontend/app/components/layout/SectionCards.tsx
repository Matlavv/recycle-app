import React from 'react';

export default function SectionCards() {
  const ArrowUpRight03Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <path
        d="M16.5 7.5L6 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="bg-light-yellow p-4 rounded-3xl w-full sm:w-72 h-44 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer">
          <div className="flex justify-end">
            <ArrowUpRight03Icon className="text-dark-green" />
          </div>
          <p className="text-dark-green font-urbanist text-left font-semibold">
            Les horaires de ramassage près de chez toi
          </p>
        </div>
        <div className="bg-dark-green p-4 rounded-3xl w-full sm:w-72 h-44 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer">
          <div className="flex justify-end">
            <ArrowUpRight03Icon className="text-light-yellow" />
          </div>
          <p className="text-light-yellow font-urbanist text-left font-semibold">
            Adopte les bons réflexes au quotidien
          </p>
        </div>
        <div className="bg-grey p-4 rounded-3xl w-full sm:w-72 h-44 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer">
          <div className="flex justify-end">
            <ArrowUpRight03Icon />
          </div>
          <p className="font-urbanist text-left font-semibold">
            Une question à nous poser ? Contacte-nous !
          </p>
        </div>
      </div>
    </div>
  );
}
