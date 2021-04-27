import React from 'react';
import {Link} from "react-router-dom";
import {FaInstagram, FaEnvelopeSquare, FaPhoneSquare, FaHome} from "react-icons/fa";

export class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-area">
                <div className="container">
                    <div className="row pt-50 pb-50">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-footer-widget">
                                <h6>Разделы</h6>
                                <div className="row">
                                    <ul className="col footer-nav">
                                        <li><Link to="/">Главная</Link></li>
                                        <li><Link to="/about">О нас</Link></li>
                                        <li><Link to="/articles">Полезные статьи</Link></li>
                                    </ul>
                                    <ul className="col footer-nav">
                                        <li><Link to="/cats">Кошки</Link></li>
                                        <li><Link to="/dogs">Собаки</Link></li>
                                        <li><Link to="/help">Помощь</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Контакты</h6>
                                <ul className="list-contact">
                                    <li className="flex-row d-flex">
                                        <div className="icon">
                                            <FaHome color={'white'}/>
                                        </div>
                                        <div className="detail">
                                            <h4>г. Москва</h4>
                                        </div>
                                    </li>
                                    <li className="flex-row d-flex my-2">
                                        <div className="icon">
                                            <FaPhoneSquare color={'white'}/>
                                        </div>
                                        <div className="detail">
                                            <h4>+7 (903) 186 86 69</h4>
                                        </div>
                                    </li>
                                    <li className="flex-row d-flex my-2">
                                        <div className="icon">
                                            <FaEnvelopeSquare color={'white'}/>
                                        </div>
                                        <div className="detail">
                                            <h4>budu-ryadom@yandex.ru</h4>
                                        </div>
                                    </li>
                                    <li className="flex-row d-flex ">
                                        <div className="icon">
                                            <FaInstagram color={'white'}/>
                                        </div>
                                        <div className="detail">
                                            <Link to="https://www.instagram.com/charityfund_budu_ryadom/"><h4>@charityfund_budu_ryadom</h4></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-text">
                    <div className="container">
                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-6 footer-text m-0 text-white">
                                Copyright &copy;
                                All rights reserved | This template is made with by <Link
                                    to="https://colorlib.com" target="_blank">Colorlib</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}