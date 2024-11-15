import React from 'react';

export const Header = () => {
    return (
        <div className="flex flex-row justify-between p-8">
            <h1 className="text-dark-green text-lg font-bold font-urbanist">Recycle Me</h1>
            <div className="">
                <ul className="flex flex-row space-x-9 items-center">
                    <li className="text-dark-green font-urbanist bg-light-yellow">Accueil</li>
                    <li className="text-dark-green font-urbanist">Horaires de ramassage</li>
                    <li className="text-dark-green font-urbanist">Les bons gestes</li>
                    <li className="text-dark-green font-urbanist">Contact</li>
                    <li className="text-dark-green font-urbanist rounded-3xl bg-light-green px-4 py-2">Rechercher un produit</li>
                </ul>
            </div>
        </div>
    );
};
