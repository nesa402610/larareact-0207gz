import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import index from "./index";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <index/>
    </BrowserRouter>,
    document.getElementById('senpai')
);
