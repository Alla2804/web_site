import React from 'react';
import {AdminMenu} from './AdminMenu';
import {Route, Switch} from "react-router-dom";
import {AddPost} from "./AddPost";
import {AddCat} from "./AddCat";
import {AddDog} from "./AddDog";

export class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        }
    }
    componentDidMount() {
    }

    render() {
        return(
            <section className="Volunteer-form-area section-gap">
                <AdminMenu/>
                <Switch>
                    <Route path="/admin/addCat">
                        <AddCat/>
                    </Route>
                    <Route path="/admin/addDog">
                        <AddDog/>
                    </Route>
                    <Route path="/admin/addPost">
                        <AddPost/>
                    </Route>
                </Switch>
            </section>
    )}
}

