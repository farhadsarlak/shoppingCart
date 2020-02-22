import {cartTypes} from "./cartTypes";

export const addItemToCart = item => ({
   type   : cartTypes.ADD_TO_CART_ITEM,
   payload: item
});

export const removeFromCart = item => ({
   type: cartTypes.REMOVE_FROM_CART_ITEM,
   payload: item
});

export const decrement= item=>({
   type:cartTypes.DEC_ITEM,
   payload:item
});

export const mouseIn = () =>({
   type: cartTypes.MOUSE_IN
})

export const mouseOut = () =>({
   type: cartTypes.MOUSE_OUT
});