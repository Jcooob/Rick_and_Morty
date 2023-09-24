import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { cleanCharacterDetails, getCharacterDetails } from '../../Redux/actions'
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const CharacterDetails = () => {

	const { id } = useParams();
	const dispatch = useDispatch();
	const character = useSelector(state => state.characterDetails)

	React.useEffect(() => {
		dispatch(getCharacterDetails(id))
		return () => dispatch(cleanCharacterDetails())
	}, [])

	if (!character) {
		return (
			<LoadingScreen />
		)
	}

  	return (
		<>
			<div className="mx-auto custom-bg h-screen w-screen flex flex-col">

				<Navbar />

				<div className="max-w-md mx-auto mb-12 bg-white p-4 shadow-md rounded-lg mt-16">
					<img
						src={character.image}
						alt={character.name}
						className="w-full h-auto rounded-lg mb-4"
					/>
					<h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
					<p className="text-gray-600">Species: {character.species}</p>
					<p className="text-gray-600">Gender: {character.gender}</p>
					<p className="text-gray-600">Status: {character.status}</p>
					<p className="text-gray-600">Location: {character.location.name}</p>
					<p className="text-gray-600">Origin: {character.origin.name}</p>

				</div>

			</div>

			<Footer />	
		</>
	);
};

export default CharacterDetails;
