import React from 'react';
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import {host} from "../config";
import {PostList} from "./PostList";
import {Redirect} from "react-router-dom";

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            text: "",
            author: "",
            redirect: false,

        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }
    componentDidMount() {

    }
    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }
    handlerSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",this.state.title);
        formData.append("text",this.state.text);
        formData.append("author",this.state.author);
        fetch(host+"/addPost",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
        this.setState({
            redirect: true
        })
    }
    render() {
        if(this.state.redirect)
            return <Redirect to="/cabinet"/>
        else
            return(
                <div className="container">
                    <div className="col-sm-12 mx-auto">
                        <h5 class="text-center">Добавление статей</h5>
                        <br/>
                        <form onSubmit={this.handlerSubmit}>
                            <div className="mb-3">
                                <input value={this.state.title} onChange={this.handlerInputChange} name="title" type="text" placeholder="Введите название статьи" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <SunEditor
                                    ref={this.sunEditorRef}
                                    name="text"
                                    setOptions = {
                                        {
                                            buttonList:[
                                                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                                                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                                                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
                                            ]
                                        }
                                    }
                                    onChange={(value)=>{
                                        const name = (this.sunEditorRef.current.props.name);
                                        this.setState({
                                            [name]: value
                                        })
                                    }}
                                    placeholder="Добавьте текст"
                                    height="200px"/>
                            </div>
                            <br/>
                            <div className="mb-3 text-center">
                                <input type="submit" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <h5 class="text-center"> Редактирование списка статей </h5>
                    <br/>
                    <PostList/>
                </div>
            )
    }
}