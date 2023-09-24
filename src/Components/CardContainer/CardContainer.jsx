import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import loading from '../../Assets/loading.gif';
import error from '../../Assets/error.gif';

const CharacterContainer = ({ characters }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (characters.length === 0) {
                setShowError(true);
            }
        }, 3000);
        return () => {
            clearTimeout(timeoutId); 
        };
    }, [characters]);

    return (
        <div className="max-w-screen-xl mx-auto my-12 px-8"> 
            {characters.length > 0 ? ( 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {characters.map((character, index) => (
                        <div key={index}>
                            <Card character={character} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center" style={{height: "700px"}}>
                    {showError ? (
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={error}
                                alt="rickAndMorty"
                                className="mb-4 lg:max-w-70 sm:max-w-90"
                                style={{height: "450px"}}
                            />
                            <p className="text-2xl font-bold text-red-200">
                                Error: No characters found.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={loading}
                                alt="rickAndMorty"
                                className="h-120 w-150 mb-4 lg:max-w-70 sm:max-w-90"
                            />
                            <p className="text-2xl font-bold text-white">Loading...</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CharacterContainer;
