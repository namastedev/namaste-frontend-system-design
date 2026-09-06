import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  // Write Authentication Logic
  // Make login APi call, ceck if token valid
  const isAuthenticated = false;

  // <Outlet /> is used to render child components of ProtectedRoute 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
