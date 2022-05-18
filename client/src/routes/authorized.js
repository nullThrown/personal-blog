import Home from '../pages/Home';
import Create from '../pages/Create';

const authorizedRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <Create />,
  },
];

export default authorizedRoutes;
