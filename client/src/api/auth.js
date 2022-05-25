import axios from '../config/axios';
import storage from '../util/storage';

export const loginUser = async user => {
  try {
    const res = await axios.post('/auth/login', user);
    return res;
  } catch (err) {
    return Promise.reject(new Error(err));
  }
};
