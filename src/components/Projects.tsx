import { Link } from "react-router-dom";
import "./animations.css";
import { useEffect, useState } from "react";
import { useTheme } from "@/provider/ThemeProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Projects = ({ language }: { language: string }) => {
  const [isDark, setIsDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsDark(theme === "dark" ? true : false);
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? true
        : false;

      setIsDark(systemTheme);
    }
  }, [theme]);

  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-center py-12 max-md:px-12 max-md:text-center"
      >
        <div>
          <h2 className="text-center font-bold text-5xl my-12">
            {language == "de" ? "Projekte" : "Projects"}
          </h2>
          <p className="text-center text-xl flex max-md:flex-col max-md:gap-4">
            {language == "de"
              ? "Hier sind ein paar Beispiele, an welchen Projekten ich bereits gearbeitet habe."
              : "Here are some examples on which projects i have worked before."}{" "}
            <span className="text-red-600 font-bold pl-12 max-md:pl-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {language == "de" ? "NUR MOBILE ANSICHT" : "MOBILE ONLY"}{" "}
                    <span className="text-red-600 bg-red-300 rounded-full px-2">
                      ?
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xl max-w-96">
                      {language == "de"
                        ? "Diese Seiten wurden nur für mobile Endgeräte optimiert. Besuch die Seite entweder auf dem Smartphone oder nutze Rechtsklick/Untersuchen und aktiviere die Mobile Simulation."
                        : " These projects were planned for mobile only. Visit page on phone or use inspect and activate mobile simulator."}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </p>
        </div>
        <section className="flex gap-36 my-16 max-md:flex-col">
          <div className="flex flex-col justify-between items-center">
            <Link to="https://toktok.abothke.dev">
              {isDark ? (
                <img
                  className="phone"
                  src={
                    isHovered ? "/cringeMainDark.png" : "/cringeLandDark.png"
                  }
                  alt=""
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                />
              ) : (
                <img
                  className="phone"
                  src={
                    isHovered ? "/cringeMainLight.png" : "/cringeLandLight.png"
                  }
                  alt=""
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                />
              )}
            </Link>
            <h2 className="text-center my-8 mb-0 font-semibold max-w-96">
              {language == "de"
                ? "Instagram Klon, geschrieben in Vite/React (mit Tailwind/ShadCn) und Typescript."
                : "Instagram Clone, written in Vite/React (with Tailwind/Shadcn) with Typescript."}
            </h2>
            <h2 className="text-center font-semibold max-w-96">
              {" "}
              {language == "de"
                ? "Backend geschrieben in Node.js (Express.js) und MongoDB."
                : "Backend written in Node.js (Express.js) and MongoDB."}
            </h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Link to="https://e-schrott.netlify.app">
              {isDark ? (
                <img
                  className="phone"
                  src={
                    isHovered2
                      ? "/eschrottMainDark.png"
                      : "/eschrottLandDark.png"
                  }
                  alt=""
                  onMouseOver={() => setIsHovered2(true)}
                  onMouseOut={() => setIsHovered2(false)}
                />
              ) : (
                <img
                  className="phone"
                  src={
                    isHovered2
                      ? "/eschrottMainLight.png"
                      : "/eschrottLandLight.png"
                  }
                  alt=""
                  onMouseOver={() => setIsHovered2(true)}
                  onMouseOut={() => setIsHovered2(false)}
                />
              )}
            </Link>
            <h2 className="text-center my-8 font-semibold max-w-80">
              {language == "de"
                ? "Online Shop, geschrieben in Vite/React. (Automatischer Dark Mode)"
                : "Online Shop, written in Vite/React. (Auto Dark Mode)"}
            </h2>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
