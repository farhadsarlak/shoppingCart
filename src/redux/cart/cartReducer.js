import {cartTypes} from "./cartTypes";
import {addItemToCart,removeItemFromCart,decrementItem} from "./cartUtil";

const INITIAL_STATE={
  cartItems:[]
};

const cartReducer=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case cartTypes.ADD_TO_CART_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };

        case cartTypes.REMOVE_FROM_CART_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            };

        case cartTypes.DEC_ITEM:
            return{
              ...state,
              cartItems: decrementItem(state.cartItems,action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;