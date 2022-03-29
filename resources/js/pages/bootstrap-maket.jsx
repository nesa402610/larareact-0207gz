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
                <div className="container d-flex text-white justify-content-around py-4">
                    <div className="col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae in quam tempora. Accusantium
                        ad
                        cumque cupiditate debitis dolorem eaque earum enim incidunt natus necessitatibus nemo numquam,
                        pariatur repellat soluta?
                    </div>
                    <div className="col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis culpa doloribus
                        magnam
                        molestiae neque officia quas quo sequi voluptates? Dolorum ducimus enim laboriosam libero nam
                        necessitatibus sint sit vitae.
                    </div>
                    <div className="col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consequuntur,
                        corporis
                        culpa debitis dicta dolorem eligendi, est fugiat itaque iusto nobis nostrum numquam odio quam
                        quasi
                        reprehenderit rerum vel.
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
            </div>
        </>
    );
};

export default BootstrapMaket;
