import useAuthStore from "../stores/useAuthStore";

export const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated()) return <Navigate to="/login" replace />;

  if (allowedRoles.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

//example usage
// <Route element={<ProtectedRoute />}>
//   <Route path="/dashboard" element={<Dashboard />} />
// </Route>;

// <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
//   <Route path="/admin" element={<AdminDashboard />} />
// </Route>
