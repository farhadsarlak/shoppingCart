import React from 'react';
import './Product.css';
import {Card,Image,Label,Icon,Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NumberFormat from 'react-number-format';
import {connect} from "react-redux";
import {addItemToCart} from "../../../../redux/cart/cartActions";

const ProductItem =({item,addItemToCart})=>{

    return(
        <Card className="ui yellow raised fluid card card-productOffers">
            <Image
                as={Link} to={`/product/${item.title}`}
                src={`/assets/images/products/${item.products}/${item.id}/${item.images[0]}.jpg`}
                ui={false}
                centered
                size={"small"}
                wrapped
            />
            <Card.Content>
                <Card.Header
                    className={"cart-header-productOffer"}
                    as={Link} to={`/product/${item.title}`}
                >
                    {item.title.substring(0 , 50)+'...'}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <div className={"textLeft"}>
                    <NumberFormat
                        value={item.price}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                    تومان
                </div>
                {item.discount ?
                    <div className={"textLeft"}>
                        <Label color={"red"} pointing>
                            <Icon name={"percent"}/>
                            {item.discount}
                        </Label>
                    </div> : null
                }
                <Button
                    icon={"plus"}
                    basic
                    color={"teal"}
                    onClick={()=> addItemToCart(item)}
                />
            </Card.Content>
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
   addItemToCart : item => dispatch(addItemToCart(item))
});

export default connect(null,mapDispatchToProps)(ProductItem);