import React from 'react';
import './CartItem.css';
import {Menu,Image,Icon,Label} from "semantic-ui-react";

import {withRouter,Link} from "react-router-dom";

import {connect} from "react-redux";
import {removeFromCart} from "../../../redux/cart/cartActions";

const cartItem = ({item,history,clearItem}) => {
    const {id,quantity,title,products} = item;

    return(
        <Menu
            secondary
            className={"cart-items-class"}
            as={Link}
            to={"/"}
            onItemClick={()=>history.replace('/')}
        >
            <Image
                src={`/assets/images/products/${products}/${id}/product_1.jpg`}
                alt={title}
            />
            <div className={"item-details-cart"}>
                <span className={"name-in-dropdown"}>{title}</span>
                <Label className={"quantity-in-dropdown"} color='teal' pointing>{quantity} عدد </Label>
            </div>

            <div className={"trash-icon-in-carts"}>
                <Icon
                    onClick={() =>clearItem(item)}
                    name={"trash alternate"} size={"large"} color={"red"}
                />
            </div>
        </Menu>
    )
};

const mapDispatchToProps = dispatch =>({
    clearItem : item=> dispatch(removeFromCart(item))
});

export default withRouter(connect(null,mapDispatchToProps)(cartItem))