import React from 'react';
import './CartIcon.css';
import {Image} from "semantic-ui-react";
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../../redux/cart/cartSelector";
import {mouseOut,mouseIn} from "../../../redux/cart/cartActions";

const CartIcon = ({itemCount,history,mouseInHidden,mouseOutHidden}) => (
    <div
        className={"cart-icon"}
        onMouseEnter={mouseInHidden}
        onMouseLeave={mouseOutHidden}
        onClick={()=> history.replace('/')}
    >
        <Image src={"/assets/images/shopping-bag.svg"} className={"shopping-icon"}/>
        <span className={"item-count"}> {itemCount} </span>
    </div>
);

const mapStateToProps= createStructuredSelector({
    itemCount : selectCartItemsCount
});

const mapDispatchToProps= dispatch =>({
    mouseInHidden : ()=> dispatch(mouseIn()),
    mouseOutHidden: ()=> dispatch(mouseOut())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartIcon));