import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import {BiEnvelope, FiPhone} from "react-icons/all";
import {FaInstagram} from "react-icons/fa";
import {Redirect} from "react-router-dom";

export class Contacts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
            title: "",
            text: "",
            redirect: false
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("tel", this.state.tel);
        formData.append("title", this.state.title);
        formData.append("text", this.state.text);
        fetch("http://skipkris7.beget.tech/fund/php/handlerMail.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                   redirect: true
                })
            })
    }

    render(){
        const redirect = this.state.redirect;
        if(redirect){
            return <Redirect to="/" />
        }else{
            return(
                <section className="contact-page-area section-gap">
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 d-flex flex-column address-wrap">
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <AiOutlineHome size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="contact-details mt-3">
                                        <h5>г. Москва</h5>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <FiPhone size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="contact-details mt-3">
                                        <h5>+7 (903) 186 86 69</h5>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <BiEnvelope size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="contact-details mt-3">
                                        <h5>budu-ryadom@yandex.ru</h5>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <FaInstagram size='40' color='#FAB700'/>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="contact-details mt-3">
                                        <h5>@charityfund_budu_ryadom</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h2 className='massage mb-3'>Отправить сообщение</h2>
                                <form onSubmit={this.handlerSubmit} className="form-area">
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <input value={this.state.name} onChange={this.handlerInput} name="name" type="text" placeholder="Введите имя" className="form-control mb-3 font-weight-bold" />
                                            <input value={this.state.tel} onChange={this.handlerInput} name="tel" type="tel" placeholder="+7(___)___-__-__" className="form-control mb-3 font-weight-bold" />
                                            <input value={this.state.title} onChange={this.handlerInput} name="title" type="text" placeholder="Тема" className="form-control mb-3 font-weight-bold" />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <textarea value={this.state.text} onChange={this.handlerInput} name="text" className="common-textarea form-control" placeholder="Сообщение"/>
                                        </div>
                                        <div className="col-sm-3.5 d-flex ml-auto">
                                            <input type="submit" className="form-control btn genric-btn primary" style={{borderRadius:"40px", height:"50px"}} value="Отправить сообщение"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}