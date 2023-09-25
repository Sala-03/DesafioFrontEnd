import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://localhost:9090',
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }
    
  });

  //headers: {'Access-Control-Allow-Origin':'*'}
