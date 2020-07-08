import Axios from "axios";
import qs from "qs";
Axios.defaults.withCredentials = true

const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });

export const signup = (user)=>{
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user)
    })
    .then((response)=> {
        setUser(response.data);
    },(error) => {
        console.log(error)
    }) 
}

export const login = (user)=>{
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user)
    })
    .then((response)=> {   
        setUser(response.data);
    })
}


export const logout = ()=> {
    return clearUser();
}

export const clearUser = ()=> {
    window.localStorage.removeItem("user");
}

export const userIsLoggedIn = ()=> getUser()? true:false; 

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"));
}