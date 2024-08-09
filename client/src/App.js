import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute.js";
import PublicRoute from "./components/Routes/PublicRoute.js";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
