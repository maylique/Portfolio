import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect, useMemo, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme } from "@/provider/ThemeProvider";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "overlayscrollbars/overlayscrollbars.css";
import {
  OverlayScrollbarsComponent,
  useOverlayScrollbars,
} from "overlayscrollbars-react";

const Projectspage = () => {
  const { language }: { language: string } = useLanguage();
  const { theme: currentTheme }: { theme: string } = useTheme();
  const oppositeTheme = useMemo(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
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

    window.scrollTo(0, 0);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // theme als Abhängigkeit hinzugefügt

  const [overlayScrollbarsApplied, setOverlayScrollbarsApplied] =
    useState(true);
  const [bodyOverlayScrollbarsApplied, setBodyOverlayScrollbarsApplied] =
    useState<boolean | null>(null);

  const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] =
    useOverlayScrollbars({
      defer: true,
      events: {
        initialized: () => {
          setBodyOverlayScrollbarsApplied(true);
        },
        destroyed: () => {
          setBodyOverlayScrollbarsApplied(false);
        },
      },
      options: {
        scrollbars: {
          theme: `os-theme-${oppositeTheme}`,
          clickScroll: true,
        },
      },
    });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);
  return (
    <>
      <Navbar language={language} />
      <OverlayScrollbarsComponent
        element="span"
        events={{
          scroll: () => {
            /* ... */
          },
        }}
        defer
        className="floatScroll"
      >
        <div className="container2" ref={vantaRef}>
          <Projects language={language} />
          <div className="flex justify-center items-center gap-10 mt-20 mb-20 relative">
            <h2 className="font-bold text-3xl absolute -top-36">
              Code & Demovideos
            </h2>
            <article className="flex gap-56 items-center justify-center">
              <section className=" flex gap-14 flex-col place-items-center">
                <Button className="dark: bg-slate-800 dark:text-white text-xl p-8 hover:bg-slate-500">
                  <Link to="https://github.com/maylique/TokTok">
                    Cringestagram Codebase
                  </Link>
                </Button>
                <iframe
                  width="390"
                  height="798"
                  src="https://www.youtube.com/embed/ry9bcTnnzLY"
                  title="Cringestagram Demovideo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </section>
              <section className="w-full flex items-center justify-center gap-14 flex-col place-items-center">
                <Button className="dark: bg-slate-800 dark:text-white text-xl p-8 hover:bg-slate-500">
                  <Link to="https://github.com/abothke/e-shop-react">
                    eSchrott Codebase
                  </Link>
                </Button>
                <iframe
                  width="400"
                  height="798"
                  src="https://www.youtube.com/embed/EcIP_aasTiY"
                  title="eSchrott Demovideo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </section>
            </article>
          </div>
          <Footer language={language} />
        </div>
      </OverlayScrollbarsComponent>
    </>
  );
};

export default Projectspage;
