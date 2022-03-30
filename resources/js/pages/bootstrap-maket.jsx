import React from 'react';
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";

const BootstrapMaket = () => {
    return (
        <>
            <Helmet>
                <title>Мотивы майкрафта</title>
            </Helmet>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand"
                   href="#">Пустая штучка</a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"
                               href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'}
                                     to={'/traffic_light'}>Светофор</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link'}
                                     to={'/bootstrap'}>Bootstrap</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2"
                               type="search"
                               placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0"
                                type="submit">Search
                        </button>
                    </form>
                </div>
            </nav>
            <div id="carouselExampleIndicators"
                 className="carousel slide"
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"/>
                    <li data-target="#carouselExampleIndicators"
                        data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators"
                        data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://monitoringminecraft.ru/images/z/o/rjbn336s.jpg"
                             className="d-block w-100"
                             alt="Первый слайд"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://kartinkin.net/uploads/posts/2020-07/1593811580_60-p-fon-minecraft-83.png"
                             className="d-block w-100"
                             alt="Второй слайд"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://phonoteka.org/uploads/posts/2022-02/1645000502_69-phonoteka-org-p-fon-igri-mainkraft-74.png"
                             className="d-block w-100"
                             alt="Третий слайд"/>
                    </div>
                </div>
                <button className="carousel-control-prev"
                        type="button"
                        data-target="#carouselExampleIndicators"
                        data-slide="prev">
                        <span className="carousel-control-prev-icon"
                              aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next"
                        type="button"
                        data-target="#carouselExampleIndicators"
                        data-slide="next">
                        <span className="carousel-control-next-icon"
                              aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div className="container-fluid mx-0 px-0 justify-content-around bg-dark">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <div className="card border-info p-2 text-center bg-warning text-primary fa-10x">
                                <NavLink to={'/traffic_light'}>
                                    <i className="fa-solid fa-traffic-light"/>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="card border-info p-2 text-center bg-warning text-primary fa-10x">
                                <NavLink to={'/'}>
                                    <i className="fa-solid fa-paw"/>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="card border-info p-2 text-center bg-warning text-primary fa-10x">
                                <NavLink to={'/cofe_ex_machina'}>
                                    <i className="fa-solid fa-mug-saucer"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box border"
                                 style={{height: '300px'}}/>
                        </div>
                        <div className="col-md-4">
                            <div className="box border"
                                 style={{height: '300px'}}/>
                        </div>
                        <div className="col-md-4">
                            <div className="box border"
                                 style={{height: '300px'}}/>
                        </div>
                    </div>
                </div>
                <div className={'text-white d-flex align-items-center justify-content-center'}
                     style={{
                         backgroundImage: 'url("https://i.ytimg.com/vi/rH_DNaGrWwk/maxresdefault.jpg")',
                         height: '500px',
                         backgroundSize: 'cover'
                     }}>
                    <div className={'w-75'}>
                        <div className="bg-dark p-4"
                             style={{border: "3px solid black", boxShadow: "black 5px 10px 15px -5px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consequuntur
                            dolorem esse
                            est eveniet ex itaque laborum numquam, placeat, rerum tenetur. Aliquid enim excepturi
                            perferendis
                            voluptas! Pariatur placeat, quam.
                        </div>
                    </div>
                </div>
                <div className="container text-white py-2">
                    <h2 className={'text-center'}>Связаться с нами</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Контакты</h3>
                            <div className="py-1">
                                <i className="fa-solid fa-location-dot mr-2"></i>
                                г. Москва, Рязанский проспект, д. 7, стр. 1
                            </div>
                            <div className="py-1">
                                <i className="fa-brands fa-asymmetrik mr-2 text-danger"/>
                                <span>Нижегородская (МЦК)</span>
                            </div>
                            <div className="py-1">
                                <i className="fa-solid fa-clock mr-2"/>
                                <span>Понедельник - четверг: с 8-30 по 17-15, пятница: с 8-30 по 16-00; обучение по графику в субботу.</span>
                            </div>
                            <div className="py-1">
                                <a href="mailto:hotline@eduprof.ru"
                                   className={'text-white'}
                                >
                                    <i className="fa-solid fa-envelope mr-2"/>
                                    <span className={'text-info'}>hotline@eduprof.ru</span>
                                </a>
                            </div>
                            <div className="py-1">

                                <a href="tel:++74952605289"
                                   className={'text-white'}>
                                    <i className="fa-solid fa-phone mr-2"></i>
                                    <span className={'text-info'}>+7 (495) 260-52-89</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h3> Форма обратной связи </h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Ваша почта email
                                    </label>
                                    <input type="email"
                                           className="form-control"
                                           id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder={'example@ruby.io'}
                                    />
                                    <small id="emailHelp"
                                           className="form-text text-muted">
                                        На эту почту Вы получите ответ от нас.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Ваше имя</label>
                                    <input type="text"
                                           className={'form-control'}
                                           id={'nameInput'}
                                           placeholder={'Киберкотлета'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Ваше сообщение</label>
                                    <textarea className="form-control"
                                              id="exampleFormControlTextarea1"
                                              rows="2"
                                              placeholder={'Что Вы хотите нам сказать?'}
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox"
                                           className="form-check-input"
                                           id="exampleCheck1"/>
                                    <label className="form-check-label"
                                           htmlFor="exampleCheck1">
                                        Согласие на обработку данных
                                    </label>
                                </div>
                                <button type="submit"
                                        className="btn btn-success">
                                    Отправить
                                </button>
                            </form>
                            <div className="row display-4 justify-content-end text-right">
                                <div className="col-4 col-md-2 col-lg-2">
                                    <i className="fa-brands fa-vk"
                                       style={{
                                           background: 'linear-gradient(45deg, rgb(162 52 83) 33%, rgb(13, 97, 188) 66%, rgb(138, 169, 214))',
                                           WebkitBackgroundClip: 'text',
                                           WebkitTextFillColor: 'transparent'
                                       }}
                                    />
                                </div>
                                <div className="col-4 col-md-2 col-lg-2">
                                    <i className="fa-brands fa-facebook"
                                       style={{
                                           background: 'linear-gradient(45deg, rgb(5 125 255) 5%, rgb(15 248 227))',
                                           WebkitBackgroundClip: 'text',
                                           WebkitTextFillColor: 'transparent'
                                       }}
                                    />
                                </div>
                                <div className="col-4 col-md-2 col-lg-2">
                                    <i className="fa-brands fa-instagram"
                                       style={{
                                           background: 'linear-gradient(87deg, rgb(202 25 239) 33%, rgb(216 29 60) 50%, rgb(42 112 214))',
                                           WebkitBackgroundClip: 'text',
                                           WebkitTextFillColor: 'transparent'
                                       }}
                                    />
                                </div>
                                <div className="col-4 col-md-2 col-lg-2">
                                    <i className="fa-brands fa-twitter"
                                       style={{
                                           background: 'linear-gradient(45deg, rgb(5 125 255) 5%, rgb(15 248 227))',
                                           WebkitBackgroundClip: 'text',
                                           WebkitTextFillColor: 'transparent'
                                       }}
                                    />
                                </div>
                                <div className="col-4 col-md-2 col-lg-2">
                                    <i className="fa-brands fa-github"
                                       style={{
                                           background: 'linear-gradient(45deg, rgb(5 125 255) 5%, rgb(15 248 227))',
                                           WebkitBackgroundClip: 'text',
                                           WebkitTextFillColor: 'transparent'
                                       }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-2">
                    <div className="col-md-5">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A67e0f05322460c16567a6aa3836d18024d2d1f4753829b2fdaf790ef96b1b50c&amp;source=constructor"
                                width="100%"
                                height="400"
                                frameBorder="0"/>
                    </div>
                    <div className="col-md-5">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qu0GppGCb-1ZTNskeUjONJMIPdSrdF8h&ehbc=2E312F"
                                width="100%"
                                height="400"/>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container-fluid bg-dark text-white">
                    <div className="container text-right">
                        <i className="fa-solid fa-copyright mr-2"></i>
                        <span>Все права защищены. </span>
                        {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default BootstrapMaket;
