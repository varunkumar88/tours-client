import React, { Component } from 'react';
import {product} from '../utils/productapi'
import DefaultLayout from '../Components/DefaultNav'

export default class UploadProduct extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

    }

    state = {

      
        product: {},
          error: null,
    }

    handleInputChange(e){
        let productCopy = {...this.state.product};
        productCopy[e.target.name] = e.target.value;
        this.setState({
            product:productCopy
        })
    }

    handleUpload(e){
       e.preventDefault();
       product(this.state.product)
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
            <div className= "form">
                <h1>Upload Tour</h1>
             <form>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" name ="name" placeholder="productname"  onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >description</label>
                    <input type="text" className="form-control" name= "description" placeholder="FirstName" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label >Price </label>
                    <input type="text" className="form-control" name = "price" placeholder="LastName" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input type="email" className="form-control" name = "image" placeholder="EmailAddress" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Currency</label>
                    <input type="email" className="form-control" name = "currency" placeholder="currency" onChange={this.handleInputChange}/>
                </div>
                <button type="submit" onClick={this.handleUpload} className="btn btn-primary">Upload</button>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}