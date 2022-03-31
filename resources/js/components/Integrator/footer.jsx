import React from 'react';
import logo from './src/Vector.svg'

const Footer = () => {
    return (
        <footer className={'bg-dark pt-5 pb-2 text-white'}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 d-flex align-items-center"
                         style={{fontSize: '23px'}}>
                        <img  className={'img-fluid'}
                            src={logo}
                              style={{height: '20px', paddingRight: '4px'}}
                             alt="asda"/>
                        <span >Мы на VK</span>
                    </div>
                    <div className="col-md-8 text-center" style={{fontSize: '23px'}}>
                        © Все права защищены ООО “Интегратор“ - {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
