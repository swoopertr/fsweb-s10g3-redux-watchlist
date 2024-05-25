import { movies } from "./../movies"
import { ADD_LIST, REMOVE_FRM_FAV_LIST, REMOVE_FRM_DEFLT_LIST, NEXT_MOVIE } from "./../ActionsforRedux"


export const initialState = {
    defaultMovies: movies,
    favMovies: [], // 1,2,3
    currentMovieId: movies[0].id,
}


export const reducerFn = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload]
            };
            break
        case REMOVE_FRM_FAV_LIST:
            return {
                ...state,
                favMovies: state.favMovies.filter(movie => movie !== action.payload) // action.payload -> 3
            };
            break
        case REMOVE_FRM_DEFLT_LIST:
            return {
                ...state,
                defaultMovies: state.defaultMovies.filter(movie => movie.id !== action.payload) // action.payload -> 3
            };
            break;
        case NEXT_MOVIE:
            const currentMovie = state.defaultMovies.find(item => item.id === state.currentMovieId)
            const currentIndex = state.defaultMovies.indexOf(currentMovie);
            const nextIndex = (currentIndex + 1) % state.defaultMovies.length;
            return {
                ...state,
                currentMovieId: state.defaultMovies[nextIndex].id,
            };
            break;
        default:
            return state;
    }
}