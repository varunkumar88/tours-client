import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './AllProduct.css'
import DefaultLayout from '../Components/DefaultNav'

export default class DeleteProduct extends Component {
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

    handleDelete=(id)=>{
        const currentproducts = this.state.products;
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(()=>{  
                this.componentDidMount();            
          this.props.history.push('/shopping/delete');  
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
                                                        <button className="btn btn-primary"  onClick={this.handleDelete.bind(this, eachCountry._id)}> Delete</button>
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

