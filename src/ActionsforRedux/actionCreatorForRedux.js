import axios from "axios";
import { PRODUCT_ACTIONS } from ".";
const API_URL = 'https://rickandmortyapi.com/api/character';


export const getProductsActionCreator = () => dispatch => {
	dispatch({ type: PRODUCT_ACTIONS.fetchStart });
	axios
		.get(API_URL)
		.then(res => dispatch({ 
			type: PRODUCT_ACTIONS.fetchSuccess, 
			payload: res.data.results 
		}))
		.catch(err => dispatch({
			type: PRODUCT_ACTIONS.fetchError, 
			payload: err.message
		}))
};
