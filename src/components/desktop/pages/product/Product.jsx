import React from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopData} from "../../../../redux/shop/shopSelector";

const Product=({match,shopData})=>{

    const product = shopData.find(pro=> pro.title === match.params.title);

    return(
        <Container className={"mainContainer"}>
            صفحه مربوط به محصول
            <h3>{product.title}</h3>
            <p>شما میتوانید استایل مورد نظر خود را اینجا وارد نمایید</p>
        </Container>
    )

};

const mapStateToProps= createStructuredSelector({
   shopData: selectShopData
});

export default connect(mapStateToProps)(Product);