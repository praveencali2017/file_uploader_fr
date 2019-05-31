import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>,
 document.getElementById('root'));

