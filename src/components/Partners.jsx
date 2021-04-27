import React from 'react';
import {Link} from "react-router-dom";
import marsik from './img/partners/marsik.png';
import isadora from './img/partners/isadora.jpg';
import joyfulbox from './img/partners/joyfulbox.png';
import diamondanimal from './img/partners/diamondanimal.png';

export class Partners extends React.Component{
    render(){
        return(
            <div className="partners-container mt-100 mb-50 text-center  d-flex">
                <div className="row px-3 m-auto">
                    <div className="partners mb-30 col-sm-10">
                        <h1>Партнёры фонда</h1>
                    </div>
                    <div className="partner-item col-sm-3">
                        <Link to="https://marsik.spb.ru/pomoshch-priyutam/blagotvoritelnyi-fond-budu-ryadom/"><img className="marsik" src={marsik} style={{height:'200px'}} alt="marsik" /></Link>
                        <h4>Зоотовары</h4>
                    </div>
                    <div className="partner-item col-sm-3">
                        <Link to="https://www.isa-dora.com/"><img className="isadora" src={isadora} style={{height:'200px'}} alt="isadora" /></Link>
                        <h4>Груминг-студия</h4>
                    </div>
                    <div className="partner-item col-sm-3">
                        <Link to="https://joyfulbox.ru/nuzhdy-priyutov/found_budu_ryadom%20"><img className="joyfulbox" src={joyfulbox} style={{height:'200px'}} alt="joyfulbox" /></Link>
                        <h4>Зоотовары</h4>
                    </div>
                    <div className="partner-item col-sm-3">
                        <Link to="https://diamond-animal.ru/"><img className="diamondanimal" src={diamondanimal} style={{height:'200px'}} alt="diamondanimal" /></Link>
                        <h4>Уникальные ювелирные украшения с животными</h4>
                    </div>
                </div>
            </div>
        )
    }
}