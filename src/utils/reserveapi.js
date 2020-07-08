import Axios from "axios";
import qs from "qs";
Axios.defaults.withCredentials = true    
const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const reserve = (reserve) => {
    return axios({
        method: "POST",
        url: "reserve",
        data: qs.stringify(reserve)
    })
    .then((response)=> {
       // setreserve(response.data);
    })
    .catch((error) => {
        console.log(error);
    });  
};

