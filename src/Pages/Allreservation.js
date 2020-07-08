import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './AllProduct.css'
import DefaultLayout from '../Components/DefaultNav'

export default class products extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/reserve")
        .then((response)=>{
            this.setState({products: response.data})
        })
    }

    handleDelete=(id)=>{
        this.props.history.push('/shopping/reservreservation');
        const currentproducts = this.state.products;
        axios.delete(`http://localhost:3000/reserve/${id}`)
        .then(()=>{         
          this.props.history.push('/shopping/reservation');
        })
        .catch((error)=>{
          console.log(error);
          this.setState({
            error: error.response.data.message
          })
        })
      }


    render() {
 return(  
    <DefaultLayout>
          <div className= "">
                  <div className="container pt-5">
                        <h3>Reserve</h3>   
                    </div>
                        {this.state.products.map((eachCountry, index)=>{
                            return(
                                <div className="container " key={eachCountry.index}> 
                                     <div className="row" key={eachCountry.index}>
                                          <div className="card-body">
                                             <h1>Name of customer {eachCountry.name}</h1>
                                              <p>Time to be picked {eachCountry.time} from {eachCountry.location}</p>
                                             <p> going to {eachCountry.destination}</p>                                                                       
                                              <button className="btn btn-primary"  onClick={this.handleDelete.bind(this, eachCountry._id)}> Delete</button>                                                            
                                          </div>
                                      </div>
                                  </div>                          
                                                        )
                                                    })}
          </div>
       </DefaultLayout>
    )
    
    }
}

