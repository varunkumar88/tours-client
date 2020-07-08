import React, { Component } from 'react';
import { login } from '../utils/auth';
import DefaultLayout from '../Components/DefaultNav'

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    state = {
        user: {},
        error:null
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user:userCopy
        })
    }

    handleLoginClick(e){
        e.preventDefault();
        login(this.state.user)
        .then(()=> {
            this.props.history.push("/shopping/reservation")
        })
        .catch((err)=> {
            // handle error
        })
    }

    render() {
        return (
            <DefaultLayout>
            <div className= "form">
            <h1>Login</h1>
                <form>
               
                <div className="form-group">
                    <label >Email </label>
                    <input type="email" className="form-control" name = "email" placeholder="EmailAddress" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" name= "password" placeholder="Password" onChange={this.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>

                </form>
            </div>
            </DefaultLayout>
        )
    }
}