import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

type propsGuard = { children?: any };

export const Guard = ({ children }: propsGuard) => {
  const token = localStorage.getItem("miToken");
  if (token) {
    try {
      jwtDecode(token);
    } catch (err) {
      <Navigate to="/propertyForm" />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
