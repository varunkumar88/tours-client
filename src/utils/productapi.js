import Axios from "axios";
import qs from "qs";
Axios.defaults.withCredentials = true  
const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const product = (product) => {
    return axios({
        method: "POST",
        url: "products",
        data: qs.stringify(product)
    })
    .then((response)=> {
    })
    .catch((error) => {
        console.log(error);
    });  
};

