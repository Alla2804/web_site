import React from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import {host} from "../config";
import {PostDogs} from "./PostDogs";
import {Redirect} from "react-router-dom";

export class AddDog extends React.Component{
    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            nickname: "",
            text: "",
            photo_1: "",
            photo_2: "",
            photo_3: "",
            photo_4: "",
            redirect: false,
        }
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerInputFile = this.handlerInputFile.bind(this);
    }
    componentDidMount() {

    }
    handlerInputFile(e){
        e.preventDefault();
        const file1 = e.target.files[0];
        const file2 = e.target.files[1];
        const file3 = e.target.files[2];
        const file4 = e.target.files[3];
        this.setState({
            photo_1: file1,
            photo_2: file2,
            photo_3: file3,
            photo_4: file4
        })

    }
    handlerInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handlerSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('nickname',this.state.nickname);
        formData.append('text',this.state.text);
        formData.append('photo_1', this.state.photo_1);
        formData.append('photo_2', this.state.photo_2);
        formData.append('photo_3', this.state.photo_3);
        formData.append('photo_4', this.state.photo_4);
        fetch(host+'/addDog',{
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
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
                        <h5 class="text-center">Добавление собак</h5>
                        <br/>
                        <form onSubmit={this.handlerSubmit}>
                            <div className="mb-3">
                                <input value={this.state.nickname} onChange={this.handlerInputChange} name="nickname" type="text" placeholder="Введите кличку кошки" className="form-control"/>
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
                            <div className="col-lg-12 mx-auto">
                                <h5 className="text-center">Добавление фотографий</h5>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input onChange={this.handlerInputFile} name="file"  type="file" className="form-control" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input onChange={this.handlerInputFile} name="file"  type="file" className="form-control" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input onChange={this.handlerInputFile} name="file"  type="file" className="form-control" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input onChange={this.handlerInputFile} name="file"  type="file" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="mb-3 text-center">
                                <input type="submit" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <h5 class="text-center"> Редактирование списка собак </h5>
                    <br/>
                    <PostDogs/>
                </div>
            )
    }
}