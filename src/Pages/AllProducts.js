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
        axios.get("http://localhost:3000/products")
        .then((response)=>{
            this.setState({products: response.data})
        })
    }

    handleReserve=(id)=>{
        this.props.history.push('/shopping/reserve');

        const currentproducts = this.state.products;

    // Remove deleted item from state.
    /*
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(()=>{         
          this.props.history.push('/shopping/reserve');
        })
        .catch((error)=>{
          console.log(error);
          this.setState({
            error: error.response.data.message
          })
        })*/
      }


    render() {
 return(  
   <DefaultLayout>
          <div className= "">
                  <div className="container pt-5">
                        <h3>Tours</h3>   
                </div>
                        {this.state.products.map((eachCountry, index)=>{
                            return(
                                <div className ="justify-content-md-center display">
                                   <div className="container " key={eachCountry.index}>
                                             <div className="row" key={eachCountry.index}>
                                                  <div className="col-md-3">
                                                        <div className="card">
                                                            <img src={`${eachCountry.image}`} alt="no pic" class="card-img-top" />
                                                            <div className="card-body">
                                                            <h5>{eachCountry.description}</h5>
                                                            <h5>{eachCountry.price}{eachCountry.currency}</h5>                                                                       
                                                            <button className="btn btn-primary" onClick={this.handleReserve}> Reserve</button>   
                                                            </div>
                                                        </div>
                                                     </div>  
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

