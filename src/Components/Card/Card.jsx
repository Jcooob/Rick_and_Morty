import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gradient-to-r from-blue-900 via-green-900 to-green-700 rounded-lg shadow-md p-2 text-white">

            <div className="bg-black p-4 rounded-lg bg-opacity-75">
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-32 h-32 my-4 rounded-full mx-auto mb-8 bg-red-500 transform transition-transform hover:scale-110 cursor-pointer"
                    onClick={openModal}
                />

                <h2 className="text-2xl font-semibold">{character.name}</h2>
                <p className="text-gray-200">{character.species} - {character.gender}</p>
                <p className="text-gray-200">Status: {character.status}</p>
                <p className="text-gray-200">Origin: {character.origin.name}</p>
                <p className="text-gray-200">Location: {character.location.name}</p>
                <Link to={`/detail/${character.id}`} className="text-white text-xl">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-blue-300 underline"
                    >
                        Details
                    </a>
                </Link>
            </div>

            {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="modal">
                    <img
                    src={character.image}
                    alt={character.name}
                    className="max-w-screen-md max-h-screen"
                    />
                    <button onClick={closeModal} className="close-button">
                        Close
                    </button>
                </div>
            </div>
      )}

        </div>
    );
}

export default CharacterCard;
