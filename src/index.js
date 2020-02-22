import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {PersistGate} from "redux-persist/integration/react";
import {Provider} from 'react-redux';
import {store,persistor} from "./redux/Store";
import App from './App';

const rootEl = document.getElementById("root");

let renderApp=()=>{

    render(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
        ,rootEl
    )
};

if (module.hot){
    module.hot.accept('./App',()=>{
        setTimeout(renderApp)
    })
}

renderApp();

