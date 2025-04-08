import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ adminOnly = false }: { adminOnly?: boolean }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (adminOnly && !isLoading) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PrivateRoute;