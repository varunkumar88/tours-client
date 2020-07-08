import React, { Component } from 'react';
import {signup} from '../utils/auth';
import Navbar from '../Components/Navbar'
import DefaultLayout from '../Components/DefaultNav'


export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);

    }

    state = {
        user: {},
          error: null,
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user:userCopy
        })
    }

  async  handleSignupClick(e){
       e.preventDefault();
       signup(this.state.user)
        this.props.history.push("/shopping/login");
        
    }

    render() {
        return (
            <DefaultLayout>
            <div className= "form">
             <h1>Sign Up</h1>
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control" name ="userName" placeholder="Username"  onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Firstname</label>
                        <input type="text" className="form-control" name= "firstName" placeholder="FirstName" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="text" className="form-control" name = "lastName" placeholder="LastName" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" name = "email" placeholder="EmailAddress" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" name= "password" placeholder="Password" onChange={this.handleInputChange}/>
                    </div>
                      <button type="submit" onClick={this.handleSignupClick} className="btn btn-primary">SignUp</button>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}