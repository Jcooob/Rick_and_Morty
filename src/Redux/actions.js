import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAILS, CLEAN_CHARACTER_DETAILS, SEARCH_BY_NAME, UPDATE_PAGE } from "./action-types";

export const getCharacters = (page, name) => {
    return function(dispatch) {
        const numberPage = page ? `&page=${page}` : ""
        const characterPerName = name ? `&name=${name}` : ""
        fetch(`https://rickandmortyapi.com/api/character/?status=alive${characterPerName}${numberPage}`)

        .then (response => response.json())
        .then (data => {
            if (data.error) {
                return dispatch(
                    {   
                        type: GET_ALL_CHARACTERS, 
                        payload: {
                            characters: [],
                            pages: 1
                        }
                    }
                )
            }

            const characters = data.results
            const pages = data.info.pages

            return dispatch({
                type: GET_ALL_CHARACTERS, 
                payload: {
                    characters: characters,
                    pages: pages
                }
                
            })
        })
    }
}

export const getCharacterDetails = (characterId) => {
    return function(dispatch) {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(character => {
            return dispatch({
                type: GET_CHARACTER_DETAILS, 
                payload: character
            })
        })
    }
}

export const cleanCharacterDetails = () => {
    return {type: CLEAN_CHARACTER_DETAILS, payload: null}
}

export const changePage = (page) => {
    return {type: UPDATE_PAGE, payload: page}
}

export const searchByName = (name) => {
    return {type: SEARCH_BY_NAME, payload: name}
}