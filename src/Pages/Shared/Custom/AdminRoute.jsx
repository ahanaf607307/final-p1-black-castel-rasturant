import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Firebase/useAuth";
import useAdmin from "../Custom/useAdmin";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <h1>Loading ...</h1>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
}

export default AdminRoute;
