import axios from '../config/axios';
import storage from '../util/storage';
export const loginUser = async user => {
  try {
    const res = await axios.post('/auth/login', user);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
