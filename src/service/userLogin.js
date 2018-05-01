import { post } from '../util/axiosUtil';

async function login(data) {
  return post('/login', {
    username: data.username,
    password: data.password
  });
}

export { login };
