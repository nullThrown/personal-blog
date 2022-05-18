import { useState, useEffect } from 'react';
import axios from '../config/axios';

const UseAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  const fetchAuth = async () => {
    let isTokenValid = false;
    try {
      // bad practice
      // setIsAuth hook is still being run conditionally
      // clever though
      const res = await axios.get('/auth');
      if (res.data.msg === 'token_valid') isTokenValid = true;
      setIsAuth(isTokenValid);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAuth();
  }, []);

  return isAuth;
};

export default UseAuth;
