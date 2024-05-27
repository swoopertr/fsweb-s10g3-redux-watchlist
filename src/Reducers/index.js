
import { ADD_LIST, REMOVE_FRM_FAV_LIST, REMOVE_FRM_DEFLT_LIST, NEXT_MOVIE, PRODUCT_ACTIONS } from "./../ActionsforRedux"
import { getPopularMovies } from "./../ActionsforRedux"

export const initialState = {
    defaultMovies: [],
    favMovies: [], // 1,2,3
    currentMovieId: -1,
    fetchState: "NOT_FETCHED" | "FETCHING" | "FETCHED" | "FETCH_FAILED",
    characters: [],
    error: ''
}


export const reducerFn = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload]
            };
        case REMOVE_FRM_FAV_LIST:
            return {
                ...state,
                favMovies: state.favMovies.filter(movie => movie !== action.payload) // action.payload -> 3
            };
            
        case REMOVE_FRM_DEFLT_LIST:
            return {
                ...state,
                defaultMovies: state.defaultMovies.filter(movie => movie.id !== action.payload) // action.payload -> 3
            };
           
        case NEXT_MOVIE:
            const currentMovie = state.defaultMovies.find(item => item.id === state.currentMovieId)
            const currentIndex = state.defaultMovies.indexOf(currentMovie);
            const nextIndex = (currentIndex + 1) % state.defaultMovies.length;
            return {
                ...state,
                currentMovieId: state.defaultMovies[nextIndex].id,
            };
            
        case PRODUCT_ACTIONS.fetchStart:
            return { ...state, isFetching: true, error: '' };
        case PRODUCT_ACTIONS.fetchSuccess:
            return { ...state, isFetching: false, characters: action.payload};
        case PRODUCT_ACTIONS.fetchError:
            return { ...state, isFetching: false, error: action.payload};

        case getPopularMovies.fetchStart:
            return { ...state, isFetching: true, error: '' };
        case getPopularMovies.fetchSuccess:
            let newCurrentMovieId = state.currentMovieId
            if(state.currentMovieId == -1) {
                newCurrentMovieId = action.payload[0].id
            }

            return { 
                ...state, 
                isFetching: false, 
                defaultMovies: action.payload,
                currentMovieId: newCurrentMovieId
            };
        case getPopularMovies.fetchError:
            return { ...state, isFetching: false, error: action.payload};
        case getPopularMovies.fetchComplete:
            return { ...state, isFetching: false, fetchState: 'FETCHED'};
        default:
            return state;
    }
}