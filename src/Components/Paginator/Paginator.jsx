import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { changePage } from '../../Redux/actions';

const Paginator = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector((state) => state.pages);
    const currentPage = useSelector((state) => state.page);

    const handlePageChange = (newPage) => {
        dispatch(changePage(newPage));
    };

    useEffect(() => {
        const delay = 1000;
    
        const timer = setTimeout(() => {
            if (currentPage > totalPages) {
                dispatch(changePage(1));
            }
        }, delay);
    
        return () => {
            clearTimeout(timer);
        };
    }, [currentPage, totalPages]);
    

    const generatePageButtons = () => {
        const buttons = [];
        let start = currentPage - 2;
        let end = currentPage + 2;

        if (start < 1) {
            start = 1;
            end = Math.min(start + 4, totalPages);
        }

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(end - 4, 1);
        }

        for (let i = start; i <= end; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`px-2 py-2 lg:py-2 lg:px-3 mx-2 mb-2 sm:mb-0 rounded ${
                        i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        if (start > 1) {
            buttons.unshift(
                <span key="ellipsis-start" className="md:mx-3 lg:mx-5 mb-2 sm:mb-0">
                    ...
                </span>
            );
        }

        if (end < totalPages) {
            buttons.push(
                <span key="ellipsis-end" className="md:mx-3 lg:mx-5 mb-2 sm:mb-0">
                    ...
                </span>
            );
        }

        return buttons;
    };

    return (
        <div className="mt-4 py-4 bg-gray-700 text-white">
            <div className="flex sm:flex-row justify-center items-center">
                <button
                    className={`px-3 py-2 mr-2 rounded ${
                        currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {generatePageButtons()}

                <button
                    className={`px-3 py-2 ml-2 rounded ${
                        currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Paginator;
