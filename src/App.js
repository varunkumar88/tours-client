import React, { Component } from 'react'
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Uploadtour from './Pages/UploadProduct';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllProduct from './Pages/AllProducts';
import Default from './Components/Default'
import Navbar from './Components/Navbar'
import Reserve from './Pages/Reserve'
import ProtectRoute from './Components/ProtectRoute'
import DeleteProduct from './Pages/DeleteProduct'
import AllReservation from './Pages/Allreservation'
import Logout from './Pages/Logout'
export default class App extends Component {
  

  

/*  componentDidMount(){
    var config = { withCredentails: true }
    debugger

    axios.get(`${process.env.REACT_APP_api_base}`, config)
    .then((response)=>{
      console.log(response);
      debugger
      this.setState({
        
        message:response.data.message
      })
    })
    .catch(err=> {
      debugger
    })

  }*/

  render() {
    return (
      <div>
       
        <Switch>
      
        <Route exact path ="/shopping/signup" component={Signup}/>
        <Route exact path ="/shopping/login" component={Login}/>
        <Route exact path = "/" component = {AllProduct}/>
        <Route exact path = "/shopping/allproduct" component = {AllProduct}/>
        <Route exact path = "/shopping/reserve"  component = {Reserve}/>
        <ProtectRoute exact path = "/shopping/delete" redirectTo="/shopping/login" component = {DeleteProduct}/>
        <ProtectRoute exact path = "/shopping/upload" redirectTo="/shopping/login" component = {Uploadtour}/>
        <ProtectRoute exact path = "/shopping/reservation"  redirectTo="/shopping/login" component = {AllReservation}/>
        <Route exact path="/shopping/logout"  component = {Logout} />
        <Route  component={Default}/>
        </Switch>
       
       
        
      </div>




    )
  }
}
