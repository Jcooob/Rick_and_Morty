import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAILS, CLEAN_CHARACTER_DETAILS, SEARCH_BY_NAME, UPDATE_PAGE } from "./action-types";

const initialState = {
    // Todos los personajes que se obtienen de la API están con STATUS = ALIVE.
    characters: [],
    characterDetails: null,
    pages: null,
    page: 1,
    name: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload.characters,
                pages: action.payload.pages
            }

        case GET_CHARACTER_DETAILS:
            return {
                ...state,
                characterDetails: action.payload
            }

        case CLEAN_CHARACTER_DETAILS:
            return {
                ...state,
                characterDetails: action.payload
            }
        
        case SEARCH_BY_NAME:
            return {
                ...state,
                name: action.payload
            }
        
        case UPDATE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;