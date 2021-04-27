import React from 'react';
import {host} from "../config";

function Div(props){
    return(
        <div className="col-sm-12 mx-auto" >
            <div className="row">
                <div className="col-lg-2 mx-auto">{props.nickname}</div>
                <div className="col-lg-8 mx-auto">{props.text}</div>
                <div className="col-lg-2 mx-auto">
                    <button className='delete-post-btn' onClick={()=>{
                        const formData = new FormData();
                        formData.append('id', props.id);
                        fetch(host+"/removeCats",{
                            method: "POST",
                            body: formData
                        })  .then(response=>response.json())
                            .then(result=>{
                                let cats = props.parent.state.cats;
                                cats.splice(props.index-1, 1);
                                props.parent.setState({
                                    cats: cats,
                                })
                            })
                    }
                    }>Удалить кошку</button>
                </div>
            </div>
            <br/>
        </div>
    )
}
export class PostCats extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
        }
    }
    componentDidMount() {
        fetch(host+"/getCats")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    cats: result.map(cats=>{
                        const parser = new DOMParser();
                        const html = parser.parseFromString(cats.text,'text/html');
                        return <Div
                            key={cats.id}
                            nickname={cats.nickname}
                            text={html.body.innerText.slice(0,100)+"..."}
                            id={cats.id}
                        />})
                })
            })
    }

    render() {
        return (
            <div className="col-sm-12 mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 mx-auto">
                            <h6 align="center">Кличка</h6>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <h6 align="center">Текст</h6>
                        </div>
                        <div className="col-lg-2 mx-auto">
                            <h6 align="center">Удаление кошки</h6>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="single-cat-list" >
                    <div className="row"> {this.state.cats}</div>
                </div>
            </div>
        )
    }
}