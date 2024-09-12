import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./provider/ThemeProvider";
import Home from "./pages/Home";
import { LanguageProvider } from "./provider/LanguageProvider";
import Cringestagram from "./pages/Cringestagram";
import Eschrott from "./pages/Eschrott";
import Projectspage from "./pages/Projectspage";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider defaultLanguage="en">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cringestagram" element={<Cringestagram />} />
            <Route path="/eSchrott" element={<Eschrott />} />
            <Route path="/projects" element={<Projectspage />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
