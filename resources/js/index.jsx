import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import First_veb from "./pages/First_veb";
import My_page from "./pages/my_page";
import Traffic_light from "./pages/traffic_light";
import Contacts from "./pages/contacts";
import Positions from "./pages/positions";
import Pxremem from "./pages/pxremem";
import Flex from "./pages/flex";
import Bootstrap from "./pages/bootstrap";
import Aside_nav from "./components/aside_nav";
import Bootstra2 from "./pages/bootstra-2";
import BootstrapMaket from "./pages/bootstrap-maket";
import FullPage from "./pages/full-page";

const Index = () => {
    const [sidebar, setSidebar] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.match(/\/non-sidebar/)) {
            console.log(1);
            setSidebar(false);
        } else setSidebar(true);
    }, [location]);
    return (
        <div className={`container-fluid px-0 ${sidebar ? ' d-flex' : ''}`}>
            {sidebar ? <Aside_nav/> : ''}
            <div>
                <Routes>
                    <Route path={'/'} element={<First_veb/>}/>
                    <Route path={'/my_page'} element={<My_page/>}/>
                    <Route path={'/traffic_light'} element={<Traffic_light/>}/>
                    <Route path={'positions'} element={<Positions/>}/>
                    <Route path={'flex'} element={<Flex/>}/>
                    <Route path={'pxremem'} element={<Pxremem/>}/>
                    <Route path={'contacts'} element={<Contacts/>}/>
                    <Route path={'bootstrap'} element={<Bootstrap/>}/>
                    <Route path={'bootstrap2'} element={<Bootstra2/>}/>
                    <Route path={'non-sidebar/'}>
                        <Route path={'bootstrap-maket'} element={<BootstrapMaket/>}/>
                        <Route path={'Integrator'} element={<FullPage/>}/>
                    </Route>

                </Routes>
            </div>
        </div>
    );
};

export default Index;
