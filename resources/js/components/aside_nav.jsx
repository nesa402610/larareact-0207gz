import React from 'react';
import {NavLink} from "react-router-dom";

const AsideNav = () => {
    return (
        <aside className={'col-sm-auto d-flex flex-column'}
               style={{gap: '.3rem'}}>
            <NavLink className={'bg-light p-2'}
                     to={'/'}>Первый вебинар</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/my_page'}>Второй вебинар</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/traffic_light'}>Светофор</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/flex'}>Flex</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/positions'}>Позиции</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/pxremem'}>Единицы измерения</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/contacts'}>Контакты</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/bootstrap'}>Bootstrap</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/bootstrap2'}>Bootstrap 2</NavLink>
            <NavLink className={'bg-light p-2'}
                     to={'/bootstrap-maket'}>Bootstrap - верстка</NavLink>
            <NavLink className={'bg-light p-2 '}
                     to={'/Integrator'}>Верстка сайта</NavLink>
            <NavLink className={'bg-light p-2 '}
                     to={'/cofe_ex_machina'}>Кофемашина</NavLink>

        </aside>
    );
};

export default AsideNav;
