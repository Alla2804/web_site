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
                        fetch(host+"/removeDogs",{
                            method: "POST",
                            body: formData
                        })  .then(response=>response.json())
                            .then(result=>{
                                let dogs = props.parent.state.cats;
                                dogs.splice(props.index-1, 1);
                                props.parent.setState({
                                    dogs: dogs,
                                })
                            })
                    }
                    }>Удалить собаку</button>
                </div>
            </div>
            <br/>
        </div>
    )
}

export class PostDogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
    }
    componentDidMount() {
        fetch(host+"/getDogs")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    dogs: result.map(dogs=>{
                        const parser = new DOMParser();
                        const html = parser.parseFromString(dogs.text,'text/html');
                        return <Div
                            key={dogs.id}
                            nickname={dogs.nickname}
                            text={html.body.innerText.slice(0,100)+"..."}
                            id={dogs.id}
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
                            <h6 align="center">Удаление собаки</h6>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="single-cat-list" >
                    <div className="row"> {this.state.dogs}</div>
                </div>
            </div>
        )
    }
}