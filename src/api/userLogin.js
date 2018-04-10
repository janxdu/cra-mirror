import createAxios from '../util/axiosUtil';

async function login(data) {
  let axios = createAxios();
  try {
    return await  axios.post('/user/login', {
      username: data.username,
      password: data.password
    });
  } catch (error) {
    console.error(error);
  }
}

export { login };
