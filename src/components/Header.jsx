import React from 'react';
import {Link, NavLink} from "react-router-dom";
import carusel1 from "./img/carusel/carusel1.png";
import carusel2 from "./img/carusel/carusel2.png";
import carusel3 from "./img/carusel/carusel3.png";
import carusel4 from "./img/carusel/carusel4.png";
import carusel5 from "./img/carusel/carusel5.png";
import carusel6 from "./img/carusel/carusel6.png";
import carusel7 from "./img/carusel/carusel7.png";
import carusel8 from "./img/carusel/carusel8.png";
import carusel9 from "./img/carusel/carusel9.png";
import carusel10 from "./img/carusel/carusel10.png";
import carusel11 from "./img/carusel/carusel11.png";
import carusel12 from "./img/carusel/carusel12.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Header extends React.Component{
    render(){
        return(
            <div className="banner-area">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-8 mt-120">
                            <h1 className="text">ПОМОГАЕМ ПРОСТО ПОМОГАТЬ.</h1>
                            <h3 className="fund">Благотворительный фонд "БУДУ РЯДОМ".</h3>
                            <p className="text-white sub-head">
                                Объединяем людей для помощи бездомным животным
                            </p>
                            <NavLink to="/gallery" className="primary-btn header-btn text-uppercase btn-secondary ml-50">Выбрать друга</NavLink>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 m-auto">
                            <OwlCarousel className='main-carousel relative d-flex' loop autoplay={true}>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel1}  alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel2} alt="dog"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel3} alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel4} alt="dog"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel5} alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel6} alt="dog"/></Link>
                                </div>
                                <div className="mage-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel7} alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel8} alt="dog"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel9} alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel10} alt="dog"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel11} alt="cat"/></Link>
                                </div>
                                <div className="image-carusel active">
                                    <Link to='/gallery'><img className="img-fluid" src={carusel12} alt="dog"/></Link>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}