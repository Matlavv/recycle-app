import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-4 w-full max-w-4xl">
      <input
        type="text"
        className="rounded-3xl w-full p-4"
        placeholder="Entrez le nom du produit"
      />
      <button
        type="submit"
        className="rounded-full bg-light-green p-4 min-w-[140px]"
      >
        <p className="text-dark-green font-urbanist">Rechercher</p>
      </button>
    </div>
  );
}
