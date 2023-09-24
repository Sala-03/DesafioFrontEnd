import axios from 'axios';

const baseURL = process.env.BASE_URL;

export const API = axios.create({ baseURL});
