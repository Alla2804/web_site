import React from 'react';
import {Link} from "react-router-dom";
import {host} from "../config";

function PreviewInfo(props){
    return  <div className="col-lg-4 col-md-6">
                <div className="row">
                    <div className="single-cat-list">
                         <div className="single-cat-list" ><h3><p style={{fontSize:26,color:"#8c0494",fontFamily:"Georgia" }}><br />{props.nickname}</p></h3>
                              <img className="img-fluid img-thumbnail rounded" src={props.photo_1} alt="cat" style={{width:270,height:380}}/>
                         </div>
                         <div className="overlay">
                             <div className="text">
                                <Link to={`/OneCat/${props.id}`} className="primary-btn text-uppercase mb-5">выбрать</Link>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
}
export class Cats extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        fetch(host+"/getCats")
            .then(response=>response.json())
            .then(result=>{
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<PreviewInfo
                        id={result[i].id}
                        key={i}
                        index={i+1}
                        nickname={result[i].nickname}
                        photo_1={result[i].photo_1}
                    />)
                }
                this.setState({
                    cats: rows
                })
            })
    }
    render() {
        return (
            <section className="cat-list-area section-gap"
                     style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/pets-seamless-pattern-23238387.jpg)"}}>

                <div className="text-center shadow-sm bg-white rounded ">
                    <h1><p style={{fontSize:22,color:"#140395",fontFamily:"Georgia" }}>Сегодня <br />
                        в БЛАГОТВОРИТЕЛЬНОМ ФОНДЕ "БУДУ РЯДОМ" ждут хозяина:</p></h1>
                    <br />

                </div>
                <div className="container">
                        <div className="single-cat-list" >
                            <div className="row">{this.state.cats}</div>
                        </div>
                </div>
            </section>
        )
    }
}