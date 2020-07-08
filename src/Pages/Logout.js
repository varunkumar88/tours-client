  
import React, { Component } from 'react';
import {logout} from "../utils/auth";

export default class Logout extends Component {

    componentDidMount(){
        logout()
        this.props.history.push("/shopping/login");
            
    }

    render() {
        
        return (
            <div><h6>Logging out</h6></div>
        )
    }
}