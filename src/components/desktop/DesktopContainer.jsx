import React , {Component} from 'react';
import {Responsive,Visibility, Container} from "semantic-ui-react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/Home";


const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopContainer extends Component {

    UNSAFE_componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts(`${URL}/product`);
    }

    render() {

        let {isFetching} = this.props;


        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                {isFetching ? <Dimmer> <Loader> در حال بارگزاری ... </Loader> </Dimmer> :
                    <Visibility once={true}>
                        <Container fluid>
                            <ScrollToTop>
                                <Header/>
                                <Switch>
                                    <Route path={"/submenu/:title"} component={SubMenu}/>
                                    <Route path={"/category/:title"} component={Category}/>
                                    <Route path={"/product/:title"} component={Product}/>
                                    <Route path={"/CompleteThePurchase"} component={CompleteThePurchase}/>
                                    <Route path={"/signIn&signOut"} component={SignInAndSignOut}/>
                                    <Route path={"/checkout"} component={Checkout}/>
                                    <Route path={"/categories"}/>
                                    <Route path={"/products"}/>
                                    <Route exact path={"/"} component={Home}/>
                                    <Route component={PageNotFound}/>
                                </Switch>
                                <Footer/>
                            </ScrollToTop>
                        </Container>
                    </Visibility>
                }
            </Responsive>
        );
    }
}

export default DesktopContainer;