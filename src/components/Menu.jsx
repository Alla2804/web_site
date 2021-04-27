import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from './img/fund-logo/logo3.png';


export class Menu extends React.Component{
    render(){
        return(
            <header id="header" style={{background:'rgba(255,255,255,0.73)', height:'90px'}}>
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="/"><img className='logo' src={logo} alt='logo'/></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active">
                                    <NavLink className="nav-link active" aria-current="page" to="/">
                                        <h6 className="text">Главная</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        <h6 className="text">О нас</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cats">
                                        <h6 className="text">Кошки</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dogs">
                                        <h6 className="text">Собаки</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/help">
                                        <h6 className="text">Помочь</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/articles">
                                        <h6 className="text">Полезные статьи</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts">
                                        <h6 className="text">Контакты</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" style={{color:'grey'}} to="/auth">Кабинет</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}