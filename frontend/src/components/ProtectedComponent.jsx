import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;