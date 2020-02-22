import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import {persistStore} from "redux-persist";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

const middleWares=[thunk];

if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middleWares));
const persistor= persistStore(store);

if (process.env.NODE_ENV !== 'production'){
    if(module.hot){
        module.hot.accept('./rootReducer',()=>{
            const newRootReducer = require('./rootReducer').default;
            store.replaceReducer(newRootReducer);
        })
    }
}

export {store,persistor}