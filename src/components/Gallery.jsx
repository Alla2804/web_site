import React from 'react';
import {Link} from "react-router-dom";
import cats from './img/cats/bondandjinks.jpg';
import dogs from './img/dogs/roxy5.jpg';

export class Gallery extends React.Component{
    render(){
        return(
            <section className="post-content-area">
                <div className="container text-center mt-100">
                    <h2 style={{color:'#FAB700'}}>Выбрать друга</h2>
                    <div className="row text-center">
                        <div className="col-md-6 posts-list">
                            <div className="cats my-4">
                                <Link to="/cats" ><img src={cats} alt='cats' height={350} style={{borderRadius:'50%'}}/></Link>
                                <h3 className='cat-list mt-3 mb-5' style={{color:'darkslategrey'}}>Кошки</h3>
                            </div>
                        </div>
                        <div className="col-md-6 posts-list">
                            <div className="dogs my-4">
                                <Link to="/dogs"><img src={dogs} alt='dogs' height={350} style={{borderRadius:'50%'}} /></Link>
                                <h3 className='dog-list mt-3 mb-5' style={{color:'darkslategrey'}}>Собаки</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}