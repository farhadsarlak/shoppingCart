import shopActionTypes from './shopTypes';
import axios from 'axios';

export const fetchProductsPending = () => ({
    type: shopActionTypes.FETCH_PRODUCT_START
});

export const fetchProductsSuccess = products =>({
   type: shopActionTypes.FETCH_PRODUCT_SUCCESS,
   payload:products
});

export const fetchProductsError = error =>({
   type:shopActionTypes.FETCH_PRODUCT_ERROR,
   payload: error
});

export const fetchProductsStartAsync = url => {
    return dispatch =>{
        dispatch(fetchProductsPending());
        axios.get(url)
            .then(response=>{
                dispatch(fetchProductsSuccess(response.data));
                return response.data
            })
            .catch(error =>
                dispatch(fetchProductsError(error)))
    }
};