import React from "react";
import {host} from "../config";
import {NavLink, Redirect} from "react-router-dom";

export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            redirect: false,
        }
    }
    componentDidMount() {
        fetch(host+"/php/getUser.php",{
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result !== "error"){
                    this.setState({
                        login: result.login,
                    })
                }else{
                    this.setState({
                        redirect: true,
                    });
                }
            });
    }

    render() {
        const redirect = this.state.redirect;
        if (redirect){
            return <Redirect to="/"/>
        }
        else
        return (
            <section className="Volunteer-form-area section-gap">
                <div className="container">
                    <div>
                        <h3>Поздравляем, вы вошли в личный кабинет <br/> под "login": {this.state.login}</h3>
                    </div>
                    <br/>
                    <div className="mb-3">
                        <NavLink className="btn btn-primary" to="/admin/addCat">Пройдите к добавлению животных и статей</NavLink>
                    </div>
                </div>
            </section>
        )
    }
}