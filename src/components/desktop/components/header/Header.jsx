import React from 'react';
import './Header.css';
import {Container,Menu,Image,Button,Segment,Icon} from "semantic-ui-react";
import CartIcon from "../../../shoppingCart/cartIcon/CartIcon";

import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartDropDown from "../../../shoppingCart/cartDropDown/CartDropDown";

const Header = ({hidden}) => {

    return(
        <Segment vertical textAlign={'center'}>
            <Container fluid>
                <Menu borderless fixed={"top"} size={"large"}>
                    <Menu.Item>
                        <Image as={Link} to={"/"} src={"/assets/images/banner1.png"} size={"tiny"}/>
                    </Menu.Item>
                    <Menu.Item className={"header-Title"}>
                        <h1>دیجی آنلاین</h1>
                    </Menu.Item>
                    <Menu.Item position={"left"}>
                        <Button basic icon labelPosition={"right"} style={{marginLeft:'0.5em'}}>
                            ورود / عضویت
                            <Icon name={"user outline"}/>
                        </Button>
                        <CartIcon/>
                        {
                            hidden ? null :
                                <CartDropDown/>
                        }
                    </Menu.Item>
                </Menu>
            </Container>
        </Segment>
    )
};
const mapStateToProps = state => ({
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);