import React from 'react';

import {Card} from "semantic-ui-react";
import ProductItem from "./ProductItem";

const ViewProducts= ({shopData}) =>{

  return(
      <Card.Group itemsPerRow={4}>
          {
              shopData.map(item=> <ProductItem item={item} key={item.id}/>)
          }

      </Card.Group>
  )

};

export default ViewProducts;