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
export const logoutUser = async user => {
  try {
    const res = await axios.post('/auth/login', user);
    return res;
  } catch (err) {
    return Promise.reject(new Error(err));
  }
};
// further authorizes actions for a already authed(logged in) user
// e.g., changing one's password or other sensitive account information
// this action requires that a user is already authed (client has token)
export const reAuthUser = async password => {
  try {
    const res = await axios.post('/auth/reauth', { password });
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
