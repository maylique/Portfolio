import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme } from "@/provider/ThemeProvider";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Projectspage = () => {
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
  const navigate = useNavigate();

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

    window.scrollTo(0, 0);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // theme als Abhängigkeit hinzugefügt
  return (
    <>
      <div className="container2" ref={vantaRef}>
        <Navbar language={language} />
        <Projects language={language} />
        <div className="w-full flex justify-center items-center flex-col gap-10 mt-20 mb-20 relative">
          <section className="flex gap-56">
            <Button className="dark: bg-slate-800 dark:text-white text-xl p-8 hover:bg-slate-500">
              <Link to="https://github.com/maylique/TokTok">
                Cringestagram Codebase
              </Link>
            </Button>
            <Button className="dark: bg-slate-800 dark:text-white text-xl p-8 hover:bg-slate-500">
              <Link to="https://github.com/abothke/e-shop-react">
                eSchrott Codebase
              </Link>
            </Button>
          </section>
          <h2 className="font-bold text-3xl absolute -top-36">
            Code & Demovideos
          </h2>
          <section className="w-full flex items-center justify-center gap-20">
            <iframe
              width="390"
              height="798"
              src="https://www.youtube.com/embed/ry9bcTnnzLY"
              title="Cringestagram Demovideo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="400"
              height="798"
              src="https://www.youtube.com/embed/EcIP_aasTiY"
              title="eSchrott Demovideo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </div>
        <Footer language={language} />
      </div>
    </>
  );
};

export default Projectspage;
