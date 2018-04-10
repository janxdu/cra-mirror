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
    return await axios.post(url, data, config);
  } catch (error) {
    console.error(error);
    return createAPIError();
  }
}

export default createAxios;
export { post };
