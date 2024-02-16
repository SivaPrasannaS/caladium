import { lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LazyComponent from "./components/LazyComponent";
import { useSelector } from "react-redux";
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyMain = lazy(() => import("./pages/user/Main"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));

function UserRoutes() {
  return (
    <LazyMain>
      <Routes>
        <Route path="/home" element={<LazyComponent component={LazyHome} />} />
      </Routes>
    </LazyMain>
  )
}

function AdminRoutes() {
  return (
    <LazyDashboard>
      <Routes>
      </Routes>
    </LazyDashboard>
  )
}

function App() {
  const isUserAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated || window.location.pathname === "/")
      navigate("/sign_in");
  }, [isUserAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/sign_up" element={<LazyComponent component={LazyRegister} />} />
      <Route path="/sign_in" element={<LazyComponent component={LazyLogin} />} />
      {userRole?.role === "USER" && <Route path="/user/*" element={<LazyComponent component={UserRoutes} />} />}
      {userRole?.role === "ADMIN" && <Route path="/admin/*" element={<LazyComponent component={AdminRoutes} />} />}
    </Routes>
  )
}

export default App;