import React from 'react';
import {Container , Responsive , Visibility} from "semantic-ui-react";
import {BrowserRouter,Route , Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";


const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

function DesktopContainer() {

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={true}>
                <Container fluid>
                    <BrowserRouter>
                        <Header/>
                        <Switch>
                            <Route path={"/checkout"}/>
                            <Route path={"/product/:title"} component={Product}/>
                            <Route exact path={"/"} component={Home}/>
                        </Switch>
                    </BrowserRouter>
                </Container>
            </Visibility>
        </Responsive>
    );
}

export default DesktopContainer;