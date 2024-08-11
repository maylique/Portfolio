import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme } from "@/provider/ThemeProvider";

const Home = () => {
  const sendPing = () => {
    navigator.sendBeacon("https://toktok-backend.abothke.dev/ping/");
  };

  useEffect(() => {
    sendPing();
  }, []);

  const { language }: { language: string } = useLanguage();
  const { theme: currentTheme }: { theme: string } = useTheme();
  const [theme, setTheme] = useState<string>(currentTheme);
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
    }

    const baseColor = theme === "light" ? 0xffffff : 0x0;
    const highlightColor = theme === "light" ? 0x606061 : 0x1e2d75;
    const zoom = theme === "light" ? 0.35 : 0.8;

    if (vantaEffect) {
      vantaEffect.destroy();
    }

    if (vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: highlightColor,
        midtoneColor: 0x0,
        lowlightColor: 0x0,
        baseColor: baseColor,
        blurFactor: 0.9,
        speed: 0.8,
        zoom: zoom,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // theme als Abhängigkeit hinzugefügt

  return (
    <>
      <div className="container" ref={vantaRef}>
        <Navbar language={language} />
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </>
  );
};

export default Home;
