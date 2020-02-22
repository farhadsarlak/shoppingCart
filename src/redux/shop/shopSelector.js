import {createSelector} from "reselect";

const selectShop= state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shopData => shopData.products
);

export const selectProductIsFetching = createSelector(
    [selectShop],
    shopFetching => shopFetching.isFetching
);
