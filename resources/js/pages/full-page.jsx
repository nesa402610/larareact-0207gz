import React from 'react';
import Navbar from "../components/Integrator/Navbar";
import TopBlock from "../components/Integrator/top-block";
import HightlightCols from "../components/Integrator/hightlight-cols";
import HightlightColsText from "../components/Integrator/hightlight-cols-text";
import Footer from "../components/Integrator/footer";
import {Helmet} from "react-helmet";

const FullPage = () => {
    return (
        <>
            <Helmet>
                <title>ООО "Интегратор"</title>
            </Helmet>
            <Navbar/>
            <TopBlock/>
            <HightlightCols/>
            <Footer/>
        </>
    );
};

export default FullPage;
