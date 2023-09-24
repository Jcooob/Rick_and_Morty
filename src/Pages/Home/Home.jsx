import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCharacters, changePage, searchByName } from "../../Redux/actions";
import '../../Styles/styles.css'
import Navbar from '../../Components/Navbar/Navbar'
import CardContainer from '../../Components/CardContainer/CardContainer'
import Paginator from '../../Components/Paginator/Paginator'
import Footer from '../../Components/Footer/Footer';

const Home = () => {

    const dispatch = useDispatch();

    const characters = useSelector((state) => state.characters);
    const pages = useSelector((state) => state.pages);
    const name = useSelector((state) => state.name);
    const page = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getCharacters(page, name));
    }, [page, name]);

    return (
        <>
            <div className="custom-background">
                <Navbar type={"home"}/>
                <CardContainer characters={characters} />
                <Paginator pages={pages} />
                <Footer />
            </div>
        </>
    )
}

export default Home;