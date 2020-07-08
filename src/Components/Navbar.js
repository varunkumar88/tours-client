import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {getUser} from '../utils/auth'
import {Fragment} from "react";


export default function Navbar() {
  let user = getUser();
    return ( 
      <Fragment> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/shopping/allproduct">Taxi Tour</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {user ?  
                <div>
                   <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className = "nav-link" to="/shopping/reservation">Reservation</Link>
                      </li>
                      <li className="nav-item">
                        <Link className = "nav-link" to="/shopping/delete">Delete Product</Link>
                      </li>
                      <li className="nav-item">
                        <Link className = "nav-link" to="/shopping/upload">Upload Product</Link>
                      </li>
                      <li className="nav-item">
                          <Link className = "nav-link" to="/shopping/logout">Logout</Link>
                      </li>
                      <li className="nav-item">
                      <p>welcome {user.firstName} {user.lastName}</p>
                      </li>
                   </ul>
            </div>
                     :
              <div>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                       <Link className = "nav-link" to="/shopping/allproduct">All Tour</Link>
                     </li>      
                     <li class="nav-item">
                       <Link className = "nav-link" to="/shopping/login">Login</Link>
                     </li>
                     <li class="nav-item">
                        <Link className = "nav-link" to="/shopping/signup">Register</Link>
                     </li> 
                  </ul>
              </div>}
    
            </div>
          </nav>
    
    </Fragment>   
    )
}


