import React , {Component} from 'react';
import './Home.css';
import {Container,Dimmer,Loader} from "semantic-ui-react";

import {connect} from "react-redux";
import {fetchProductsStartAsync} from "../../../../redux/shop/shopActions";
import {createStructuredSelector} from "reselect";
import {selectProductIsFetching , selectShopData} from "../../../../redux/shop/shopSelector";
import {URL} from "../../../../config";
import ViewProducts from "../../components/viewProducts/ViewProducts";

class Home extends Component {

    componentDidMount() {
        const {fetchProduct} = this.props;
        fetchProduct(`${URL}/product`);
    }

    render() {

        const {isFetching,shopData} = this.props;
        if (isFetching === false) return <Dimmer> <Loader> درحال بارگزاری </Loader></Dimmer>

        return (
            <Container className={"mainContainer"}>
                <ViewProducts shopData={shopData}/>
            </Container>
        )

    }
}

const mapStateToProps= createStructuredSelector({
    shopData  : selectShopData,
    isFetching: selectProductIsFetching
});

const mapDispatchToProps= dispatch =>({
    fetchProduct: url => dispatch (fetchProductsStartAsync(url))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);