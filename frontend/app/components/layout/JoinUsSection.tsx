import React from 'react';
import Bento from '../ui/Bento';

export default function JoinUsSection() {
  const ArrowUpRight03Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
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
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <h2 className="text-dark-green font-urbanist font-semiBold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
            Le changement commence{' '}
            <span className="text-dark-green bg-light-yellow px-2 py-1 rounded-lg">
              avec vous
            </span>
          </h2>
          <p className="text-dark-green font-urbanist text-sm sm:text-md text-center lg:text-left">
            Suivez notre évolution sur les réseaux sociaux !<br />
            Lorem ipsum dolor sit amet consectetur. Nam enim id sagittis gravida
            id libero vitae. Cras eu faucibus vitae mattis imperdiet feugiat
            lectus. Sit cursus adipiscing massa vitae. Varius id dapibus
            dignissim morbi. Sit cursus adipiscing massa vitae. Varius id
            dapibus dignissim morbi.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-light-green p-3 rounded-3xl w-full sm:w-60 flex flex-row justify-between items-center hover:scale-105 transition-transform">
              <span className="text-dark-green font-urbanist font-semibold">
                Rejoins la communauté !
              </span>
              <ArrowUpRight03Icon className="text-dark-green" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Bento />
        </div>
      </div>
    </div>
  );
}
