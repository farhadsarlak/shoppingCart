import React from 'react';
import {Responsive,Visibility} from "semantic-ui-react";
import {BrowserRouter,Switch , Route} from 'react-router-dom';
import Home from "./pages/Home";

const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};


const MobileContainer=()=>{

    return(
        <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Visibility once={false}>
                <BrowserRouter>
                    <Switch>

                        <Route path={"/"} component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Visibility>
        </Responsive>
    )
};


export default MobileContainer;