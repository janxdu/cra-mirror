import axios from 'axios';
import { BASE_API_URL } from '../config';

function createAxios() {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000,
  });

  return instance;
}

export default createAxios;
