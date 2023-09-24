import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { searchByName } from '../../Redux/actions';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

const Navbar = ({type}) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.name);

    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        setSearchQuery(name);
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
        dispatch(searchByName(searchQuery)); 
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        dispatch(searchByName(''));
    };

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    Rick and Morty
                </Link>
                
                {type === 'home' ? (
                <form onSubmit={handleSearchSubmit} className="flex space-x-4">
                    {searchQuery && (
                        <button
                            type="button"
                            className="text-white bg-red-400 hover:bg-red-600 px-2 py-1 rounded-md"
                            onClick={handleClearSearch}
                        >
                            X
                        </button>
                    )}
                    <input
                        type="text"
                        placeholder="Search character"
                        className="text-gray-800 px-2 py-1 rounded-md"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button
                        type="submit"
                        className="text-white bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded-md"
                    >
                        Search
                    </button>
                </form>
            ) : (
                <Link to="/home" className="text-white hover:underline">
                    Go Back
                </Link>
            )}
            </div>
        </nav>
    );
};

export default Navbar;

