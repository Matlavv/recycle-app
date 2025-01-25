import Image from 'next/image';
import React from 'react';
import mountain from '../../assets/moutain.png';
import SearchBar from '../ui/SearchBar';

export default function SectionSearchBar() {
  return (
    <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] xl:aspect-[3/1]">
        <Image
          src={mountain}
          alt="searchBar"
          fill
          priority
          className="object-cover rounded-3xl"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center sm:gap-5 w-full px-4">
          <h1 className="text-white text-2xl sm:text-5xl lg:text-6xl font-semiBold font-urbanist text-center">
            Simplifiez votre tri,
          </h1>
          <h1 className="text-white text-2xl sm:text-5xl lg:text-6xl font-semiBold font-urbanist text-center">
            protégez la planète
          </h1>
        </div>
        <div className="hidden lg:flex absolute top-3/4 left-1/2 transform -translate-x-1/2 w-full justify-center px-4">
          <SearchBar />
        </div>
      </div>
      <div className="lg:hidden mt-8 px-4">
        <SearchBar />
      </div>
    </div>
  );
}
