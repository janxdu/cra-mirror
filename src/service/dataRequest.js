import { get } from '../util/axiosUtil';

async function getHeadAccountInfo() {
  return get('/user/getHeadAccountInfo');
}

export { getHeadAccountInfo };
