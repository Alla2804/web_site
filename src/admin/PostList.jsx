import React from 'react';
import {host} from "../config";

function Div(props){
    return(
        <div className="col-sm-12 mx-auto" >
            <div className="row">
                <div className="col-lg-3 mx-auto">{props.title}</div>
                <div className="col-lg-5 mx-auto">{props.text}</div>
                <div className="col-lg-2 mx-auto">{props.author}</div>
                <div className="col-lg-2 mx-auto">
                    <button className='delete-post-btn' onClick={()=>{
                        const formData = new FormData();
                        formData.append('id', props.id);
                        fetch(host+"/removePosts",{
                            method: "POST",
                            body: formData
                        })  .then(response=>response.json())
                            .then(result=>{
                                let posts = props.parent.state.posts;
                                posts.splice(props.index-1, 1);
                                props.parent.setState({
                                    posts: posts,
                                })
                            })
                    }
                    }>Удалить статью</button>
                </div>
            </div>
            <br/>
        </div>
    )
}

export class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch(host+"/getPosts")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    post: result.map(post=>{
                        const parser = new DOMParser();
                        const html = parser.parseFromString(post.text,'text/html');
                        return <Div
                            key={post.id}
                            title={post.title}
                            text={html.body.innerText.slice(0,50)+"..."}
                            author={post.author}
                            date_added={post.date_added}
                            id={post.id}
                        />})
                })
            })
    }

    render() {
        return (
            <div className="col-sm-12 mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mx-auto">
                            <h6 align="center">Заголовок</h6>
                        </div>
                        <div className="col-lg-5 mx-auto">
                            <h6 align="center">Текст</h6>
                        </div>
                        <div className="col-lg-2 mx-auto">
                            <h6 align="center">Автор</h6>
                        </div>
                        <div className="col-lg-2 mx-auto">
                            <h6 align="center">Удаление статьи</h6>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="single-cat-list" >
                    <div className="row"> {this.state.post}</div>
                </div>
            </div>
        )
    }
}