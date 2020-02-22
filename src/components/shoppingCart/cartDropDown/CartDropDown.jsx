import React from 'react';
import './CartDropDown.css';

import CartItem from '../cartItem/CartItem';

import {connect} from "react-redux";

import {createStructuredSelector} from 'reselect';

import {Button,Grid,Label} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {selectCartItemsTotal,selectCartItems} from "../../../redux/cart/cartSelector";
import {mouseOut,mouseIn} from "../../../redux/cart/cartActions";



const CartDropDown=({cartItems,mouseOutHidden,mouseInHidden,history,total})=>(

    <div
        className={"cart-dropdown-in-dropdown"}
        onMouseEnter={mouseInHidden}
        onMouseLeave={mouseOutHidden}
    >
        <div className={"cart-items-in-dropdown"}>
            {
                cartItems.length ?
                    cartItems.map(cartItem=> {
                            return (
                                <div key={cartItem.id} className={"items-in-cartItem"}>
                                   <CartItem item={cartItem}/>
                                </div>
                            )
                        }
                    )
                    :
                    <span className={"empty-message-in-dropdown"}> سبد خرید شما خالی است </span>
            }
        </div>
        {
            cartItems.length ?
                <Grid className={"checkout-div-in-dropdown"}>
                    <Label className={"label-in-dropdown"} color='teal' tag>
                        مبلغ قابل پرداخت: <NumberFormat
                        value={total}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'تومان'} />
                    </Label>
                    <Button
                        inverted
                        className={"button-checkout-in-dropdown"}
                        color={"red"}
                        onClick={() => {
                            history.replace('/CheckOut');
                        }}
                    >
                        ثبت سفارش
                    </Button>
                </Grid>
                : null
        }
    </div>

);

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartItemsTotal
});

const mapDispatchToProps= dispatch=>({
    mouseOutHidden: ()=>dispatch(mouseOut()),
    mouseInHidden: ()=>dispatch(mouseIn())
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));