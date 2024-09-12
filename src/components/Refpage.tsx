import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme } from "@/provider/ThemeProvider";
import Navbar from "./Navbar";

const Refpage = () => {
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

    const baseColor = theme === "light" ? 0xa9a9a9 : 0x0;
    const midtoneColor = theme === "light" ? 0xcf8484 : 0x0;
    const lowlightColor = theme === "light" ? 0x60607f : 0x5c002f;
    const highlightColor = theme === "light" ? 0xacac8c : 0x1e2d75;
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
        midtoneColor: midtoneColor,
        lowlightColor: lowlightColor,
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
        <main className="m-5 mt-0 flex flex-col min-h-dvh items-center justify-center max-md:mt-10">
          <h1>
            Wilkommen, danke dass Sie dem Link im Lebenslauf gefolgt sind 😊
          </h1>
        </main>
      </div>
    </>
  );
};

export default Refpage;
