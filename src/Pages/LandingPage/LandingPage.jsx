import { Link } from "react-router-dom";
import rickAndMorty from '../../Assets/rick_and_morty.png';

const LandingPage = () => {
    
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold mb-12">Welcome</h1>
            <img
                src={rickAndMorty}
                alt="rickAndMorty"
                className="h-auto mb-4
                lg:max-w-70 lg:w-25
                sm:max-w-90 sm:w-80"
            />
            <Link to="/home">
                <button className="bg-blue-500 hover:bg-blue-700 text-white mt-16 font-bold py-2 px-4 rounded">
                    Enter
                </button>
            </Link>
        </div>
    );
}

export default LandingPage;
