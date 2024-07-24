import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import StockProfilePage from "@/pages/StockProfilePage";
import PorfolioPage from "@/pages/PorfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage />, errorElement: <ErrorPage /> },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/porfolio",
        element: (
          <ProtectedRoute>
            <PorfolioPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "stock/:symbol/profile",
        element: (
          <ProtectedRoute>
            <StockProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
