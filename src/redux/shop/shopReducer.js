import shopActionTypes from './shopTypes';

const INITIAL_STATE ={
    isFetching:false,
    products: [],
    error: []
};

const shopReducer =(state=INITIAL_STATE, action)=>{

    switch (action.type) {
        case shopActionTypes.FETCH_PRODUCT_START:
            return{
                ...state,
                isFetching: true
            };
        case shopActionTypes.FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload
            };
        case shopActionTypes.FETCH_PRODUCT_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;

