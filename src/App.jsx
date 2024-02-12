import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/user/Home";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/")
      navigate("/sign_in");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/sign_up" element={<Register />} />
      <Route path="/sign_in" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
