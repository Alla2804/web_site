import React from "react";
import {NavLink} from "react-router-dom";


export class AdminMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8"><h5 className="text-center"> Инструкция по работе в личном кабинете </h5> </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <nav className="nav flex-column">
                                <h5>
                                    <br/>
                                    <NavLink className="nav-link" to="AddCat">Добавить кошку</NavLink>
                                    <NavLink className="nav-link" to="AddDog">Добавить собаку</NavLink>
                                    <NavLink className="nav-link" to="AddPost">Добавить статью</NavLink>
                                    <br/>
                                </h5>
                            </nav>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-8">
                            <br/>
                            <p class="font-weight-lighter; text-muted;">
                            1. Для добавления нового животного или публикации, перейдите по ссылке слева
                            (добавить кошку, добавить собаку, добавить статью).
                            В панели добавления животных заполните все поля (кличка, текст (описание),
                            фотографии животного.<br/>
                            2. Для удаления животных или опубликованной статьи воспользуйтесь панелью,
                            которая располагается ниже рабочей области добавления фотографий.
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}