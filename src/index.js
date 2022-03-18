import React from 'react';
import ReactDOM from 'react-dom';
// Main File
import App from './App';
// React BrowserRouter
import { BrowserRouter } from "react-router-dom";
// Redux Setup
import { Provider } from "react-redux";
// Store
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


