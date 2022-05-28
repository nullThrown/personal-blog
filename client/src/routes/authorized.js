import Home from '../pages/Home';
import Create from '../pages/Create';
import Account from '../pages/Account';
import { Navigate } from 'react-router-dom';
import BlogPost from '../pages/BlogPost';
const authorizedRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post/:id',
    element: <BlogPost />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
];

export default authorizedRoutes;
