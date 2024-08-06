import axios from 'axios';

const localhost = axios.create({
  baseURL:"http://localhost:3000"
})

const api ={
  get(endpoint){
    return localhost.get(endpoint);
  }
}