import React from 'react';
import {host} from "../config";



export class OneDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            id: '',
            photo1:'',
            photo2:'',
            photo3:'',
        }
    }

    componentDidMount() {
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        formData.append('id',this.props.match.params.id);

        fetch(host+"/getDog", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                    nickname: result.nickname,
                    text: result.text,
                    photo_1: result.photo_1,
                    photo_2: result.photo_2,
                    photo_3: result.photo_3,
                    photo_4: result.photo_4,
                });
            })
    }

    render() {
        return (<div className="container-fluid" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>
                <div className="container" style={{height:100}}></div>
                <div className="container-fluid my-5" style={{textAlign:"center",fontSize:"xx-large",fontFamily:"cursive",color:"black",textDecoration:"underline"}}>
                    {this.state.nickname}
                </div>
                <div className="container text-center shadow-sm p-3 mb-5 bg-white rounded lh-lg">
                    <p style={{fontSize:20, color: "#3c3c3c", lineHeight: 2, fontFamily: "cursive"}}>
                        {this.state.text}
                    </p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 my-5" >
                            <img src={host+this.state.photo_1}  alt="" className="img-fluid"/>

                        </div>
                        <div className="col-lg-4 col-md-4 my-5">
                                <img src={host+this.state.photo_2}   alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-4 col-md-4 my-5">
                            <img src={host+this.state.photo_3}   alt="" className="img-fluid"/>
                        </div>
                     </div>
                </div>
             </div>
            
        )
    }
}