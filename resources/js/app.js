import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./Index";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Index/>
    </BrowserRouter>,
    document.getElementById('senpai')
);
