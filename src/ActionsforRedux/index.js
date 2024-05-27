export const ADD_LIST = "ADD_LIST"
export const REMOVE_FRM_FAV_LIST = "REMOVE_FRM_FAV_LIST"
export const REMOVE_FRM_DEFLT_LIST = "REMOVE_FRM_DEFLT_LIST"
export const NEXT_MOVIE = "NEXT_MOVIE"
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES"

export const addListAction = (id) => {
    return { type: ADD_LIST, payload: id }
}

export const removeFromFavListAction = (id) => {
    return { type: REMOVE_FRM_FAV_LIST, payload: id }
}

export const removeFromDefaultListAction = (id) => {
    return { type: REMOVE_FRM_DEFLT_LIST, payload: id }
}

export const nextMovieAction = () => {
    return { type: NEXT_MOVIE }
}

export const getPopularMovies = Object.freeze({
    fetchStart: "FETCH_MOVIES_START",
    fetchSuccess: "FETCH_MOVIES_SUCCESS",
    fetchError: "FETCH_MOVIES_ERROR",
    fetchComplete: "FETCH_MOVIES_COMPLETE"
  })



export const PRODUCT_ACTIONS = Object.freeze({
    fetchStart: "FETCH_PRODUCTS_START",
    fetchSuccess: "FETCH_PRODUCTS_SUCCESS",
    fetchError: "FETCH_PRODUCTS_ERROR",
  });