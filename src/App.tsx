import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
