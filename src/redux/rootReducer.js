import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:[
        'cart'
    ]
};

const rootReducer = combineReducers({
    cart: cartReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer);