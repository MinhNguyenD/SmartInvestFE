import "./App.css";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
