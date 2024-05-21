import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./provider/ThemeProvider";
import Home from "./pages/Home";
import { LanguageProvider } from "./provider/LanguageProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system">
        <LanguageProvider defaultLanguage="en">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
