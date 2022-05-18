import Home from '../pages/Home';
import Create from '../pages/Create';
import { Navigate } from 'react-router-dom';

const authorizedRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
];

export default authorizedRoutes;
