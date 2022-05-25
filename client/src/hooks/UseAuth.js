import { useState, useEffect } from 'react';
import axios from '../config/axios';
import storage from '../util/storage';
const UseAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const fetchAuth = async () => {
    const token = storage.getToken();
    if (!token) return isAuth;
    try {
      const res = await axios.get('/auth');
      setIsAuth(() => res.data.msg === 'token_valid');
    } catch (err) {
      storage.removeToken();
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAuth();
  }, []);

  return isAuth;
};

export default UseAuth;
