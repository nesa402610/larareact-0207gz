import React from 'react';
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import First_veb from "./pages/First_veb";
import My_page from "./pages/my_page";
import Traffic_light from "./pages/traffic_light";
import Contacts from "./pages/contacts";
import Positions from "./pages/positions";
import Pxremem from "./pages/pxremem";
import Flex from "./pages/flex";
import Bootstrap from "./pages/bootstrap";

const Index = () => {
    return (
        <div className={'container-fluid d-flex'}>
            <aside className={'col-2 d-flex flex-column'} style={{gap: '.3rem'}}>
                <NavLink className={'bg-light p-2'} to={'/'}>Первый вебинар</NavLink>
                <NavLink className={'bg-light p-2'} to={'/my_page'}>Второй вебинар</NavLink>
                <NavLink className={'bg-light p-2'} to={'/traffic_light'}>Светофор</NavLink>
                <NavLink className={'bg-light p-2'} to={'/flex'}>Flex</NavLink>
                <NavLink className={'bg-light p-2'} to={'/positions'}>Позиции</NavLink>
                <NavLink className={'bg-light p-2'} to={'/pxremem'}>Единицы измерения</NavLink>
                <NavLink className={'bg-light p-2'} to={'/contacts'}>Контакты</NavLink>
                <NavLink className={'bg-light p-2'} to={'/bootstrap'}>Bootstrap</NavLink>
                <NavLink className={'bg-light p-2 '} to={'/bootstrap'}>Кофемашина</NavLink>
            </aside>
            <div className="col">
                <Routes>
                    <Route path={'/'} element={<First_veb/>}/>
                    <Route path={'/my_page'} element={<My_page/>}/>
                    <Route path={'/traffic_light'} element={<Traffic_light/>}/>
                    <Route path={'positions'} element={<Positions/>} />
                    <Route path={'flex'} element={<Flex/>} />
                    <Route path={'pxremem'} element={<Pxremem/>} />
                    <Route path={'contacts'} element={<Contacts/>} />
                    <Route path={'bootstrap'} element={<Bootstrap/>} />
                </Routes>
            </div>
        </div>
    );
};

export default Index;
