import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {getUser} from '../utils/auth'
import {Fragment} from "react";


export default function Navbar() {
  let user = getUser();

    return (
       
      <Fragment> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Taxi Tour</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
                {user ?  
                <div>
                   <ul class="navbar-nav mr-auto">
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


