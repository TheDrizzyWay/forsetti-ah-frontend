import axios from 'axios';
// https://drizzyforsettibackend.herokuapp.com/api/v1

const instance = axios.create({
  baseURL: 'https://drizzyforsettibackend.herokuapp.com/api/v1'
});

export default instance;
