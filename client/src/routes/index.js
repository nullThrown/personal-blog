import { useRoutes, useLocation } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import authorizedRoutes from './authorized';
import notAuthorizedRoutes from './notAuthorized';
import UseAuth from '../hooks/UseAuth';

export const AppRoutes = () => {
  const errorRoute = { path: '/*', element: <NotFound /> };

  const isAuth = UseAuth();
  const routes = isAuth ? authorizedRoutes : notAuthorizedRoutes;
  const element = useRoutes([...routes, errorRoute]);

  return <>{element}</>;
};

export default AppRoutes;
