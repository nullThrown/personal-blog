import Landing from '../pages/Landing';
import Login from '../pages/Login';

const notAuthorizedRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default notAuthorizedRoutes;
