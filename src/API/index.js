import axios from 'axios';

    const ApiCall = axios.create({
        baseURL: "https://interno.saibweb.com.br/api/v1/teste",
    });
  
export default ApiCall;
