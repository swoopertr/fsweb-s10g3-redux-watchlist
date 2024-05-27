import { getPopularMovies } from ".";
import { getMovies } from "../movieData";

export const getMoviesActionCreator = () => async (dispatch, getState) => {
	dispatch({ type: getPopularMovies.fetchStart });
    try {
        let movies = await getMovies();
        dispatch({ type: getPopularMovies.fetchSuccess, payload: movies});
    } catch (error) {
        dispatch({ type: getPopularMovies.fetchError, payload: error });
    }finally{
        dispatch({ type: getPopularMovies.fetchComplete });
    }
    
    
    
    

};