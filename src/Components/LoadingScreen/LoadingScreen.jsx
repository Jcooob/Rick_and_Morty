import React from 'react';
import loading from '../../Assets/loading.gif'

const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen custom-bg">
            <img
                src={loading} 
                alt="Loading"
                className="w-80 h-100 mb-4"
            />
            <p className="text-2xl text-white font-semibold">Loading...</p>
        </div>
    );
};

export default LoadingScreen;
