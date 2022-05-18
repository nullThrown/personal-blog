import { useState, useEffect } from 'react';
import axios from 'axios';
import storage from '../util/storage';

// place this in axios config file
let config = {
  headers: {
    x_auth_token: storage.getToken(),
  },
};

const UseAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  const fetchAuth = async () => {
    let isTokenValid = false;
    try {
      const res = await axios.get('http://localhost:4000/api/auth', config);
      if (res.data.msg === 'token_valid') {
        isTokenValid = true;
      }
      setIsAuth(isTokenValid);
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return isAuth;
};

export default UseAuth;
