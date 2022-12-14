import React from "react";

import { Navigate, useLocation} from "react-router-dom";

export const RequireAuth = ({ children }) => {
  let location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/entry" state={{ from: location }} replace />;
  }

  return children;
};
