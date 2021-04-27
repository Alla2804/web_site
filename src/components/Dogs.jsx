import React from 'react';
import {Link} from "react-router-dom";
import {host} from "../config";


function Div(props){
    return (
        <div className="col-lg-3 col-md-6">
            <div className="single-cat-list" style={{borderStyle:"solid"}}>
                <Link to={`/OneDog/${props.id}`}>
                    <h3>
                        <p style={{fontSize:30,textAlign:"center",color:"black",fontFamily:"cursive"}}>{props.nickname}</p>
                    </h3>
                    <img src={props.photo_1} alt="" style={{width:250,height:355}}/>
                </Link>
            </div>
        </div>
    )
}

export class Dogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        }
    }
    componentDidMount() {
        fetch(host+"/getDogs")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    dogs: result.map(dogs=>{
                        return <Div
                            key={dogs.id}
                            id={dogs.id}
                            nickname={dogs.nickname}
                            text={dogs.text}
                            photo_1={dogs.photo_1}
                        />})
                })
            })
    }

    render() {
        return(
        <section className="cat-list-area section-gap"
                 style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>>
            <div className="text-center shadow-sm bg-white rounded ">
                <h1><p style={{fontSize:22,color:"#140395",fontFamily:"Georgia" }}>Сегодня <br />
                    в БЛАГОТВОРИТЕЛЬНОМ ФОНДЕ "БУДУ РЯДОМ" ждут хозяина:</p></h1>
                <br/>
            </div>
            <div className="container">
                <div className="single-cat-list" >
                    <div className="row">{this.state.dogs}</div>
                </div>
            </div>
        </section>)
    }
}