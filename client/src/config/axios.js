import Axios from 'axios';
import storage from '../util/storage';

const axios = Axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: { x_auth_token: storage.getToken() },
});

// look into if setting these headers is necessary
axios.defaults.headers.delete['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded';

export default axios;
