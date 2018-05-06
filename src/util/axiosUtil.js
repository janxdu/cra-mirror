import axios from 'axios';
import { BASE_API_URL } from '../config';
import { createAPIError } from './errorUtil';

function createAxios() {
  return axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000,
  });
}

async function post(url, data, config) {
  let axios = createAxios();
  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return createAPIError();
  }
}

async function get(url, config) {
  let axios = createAxios();
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return createAPIError();
  }
}

export default createAxios;
export { get, post };
