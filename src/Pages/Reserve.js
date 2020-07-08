import React, { Component } from 'react'
import { reserve }from '../utils/reserveapi'
import DefaultLayout from '../Components/DefaultNav'

export default class Reserve extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlereserve = this.handlereserve.bind(this);
    }

    state = {  
        reserve: {},
          error: null,
    }

    handleInputChange(e){
        let reserveCopy = {...this.state.reserve};
        reserveCopy[e.target.name] = e.target.value;
        this.setState({
            reserve:reserveCopy
        })
    }

    handlereserve(e){
       e.preventDefault();
       reserve(this.state.reserve)
         .then((reponse) => {
          this.props.history.push("/shopping/allproduct")
         })
         .catch((error) => {
           this.setState({ error: error.response && error.response.data });
         })
        
       
    }
    render() {
        return (
            <DefaultLayout>
            <div>
                   <div className= "form">
            <h1>Reserve Tour</h1>
                <form>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" name ="name" placeholder="name" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >date</label>
                    <input type="text" className="form-control" name= "date" placeholder="Date" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label >Time </label>
                    <input type="text" className="form-control" name = "time" placeholder="Time" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Pick Up Location from Amsterdam</label>
                    <input type="text" className="form-control" name = "location" placeholder="Pick up location" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Destination</label>
                    <input type="text" className="form-control" name = "destination" placeholder="destination" onChange={this.handleInputChange}/>
                </div>
                <button type="submit" onClick={this.handlereserve} className="btn btn-primary">Reserve</button>
                </form>
            </div>   
            </div>
            </DefaultLayout>
        )
    }
}

