import { Link } from "react-router-dom";
import "./animations.css";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/provider/ThemeProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const Projects = ({ language }: { language: string }) => {
  const [isDark, setIsDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { theme } = useTheme();
  const [matches, setMatches] = useState(
    matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    setIsDark(theme === "dark" ? true : false);
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? true
        : false;

      setIsDark(systemTheme);
    }

    const handleResize = () => {
      setMatches(matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!animationPlayed && entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          setAnimationPlayed(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [animationPlayed]);

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
              ? "Hier sind ein paar Beispiele, an welchen Projekten ich bereits gearbeitet habe. Auf die Bilder klicken, um auf die Seite zu gelangen."
              : "Here are some examples on which projects I have worked before. Click on the pictures to get to the page."}
            <span className="text-red-600 font-bold pl-12 max-md:pl-0">
              {language == "de" ? "NUR MOBILE ANSICHT" : "MOBILE ONLY"}{" "}
              {matches ? (
                <Popover>
                  <PopoverTrigger className="waitJello">
                    <span className="text-red-600 bg-red-300 rounded-full px-2">
                      ?
                    </span>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-xl max-w-96">
                      {language == "de"
                        ? "Diese Seiten wurden nur für mobile Endgeräte optimiert. Besuch die Seite entweder auf dem Smartphone oder nutze Rechtsklick/Untersuchen und aktiviere die Mobile Simulation."
                        : "These projects were planned for mobile only. Visit page on phone or use inspect and activate mobile simulator."}
                    </p>
                  </PopoverContent>
                </Popover>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="waitJello">
                      <span className="text-red-600 bg-red-300 rounded-full px-2">
                        ?
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xl max-w-96">
                        {language == "de"
                          ? "Diese Seiten wurden nur für mobile Endgeräte optimiert. Besuch die Seite entweder auf dem Smartphone oder nutze Rechtsklick/Untersuchen und aktiviere die Mobile Simulation."
                          : "These projects were planned for mobile only. Visit page on phone or use inspect and activate mobile simulator."}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </span>
          </p>
        </div>
        <section className="flex gap-36 my-16 max-md:flex-col">
          <div className="flex flex-col justify-between items-center">
            <div className="flex text-red-600 font-bold gap-4 mb-5">
              <Popover>
                <PopoverTrigger
                  className={isVisible ? "tracking-in-expand" : "opacity-0"}
                >
                  {matches ? (
                    <p>
                      {language == "de"
                        ? "Touch für Demo Account"
                        : "Touch here for demo account"}
                    </p>
                  ) : (
                    <p>
                      {language == "de"
                        ? "Hier klicken für Demo Account"
                        : "Click here for demo account"}
                    </p>
                  )}
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-xl max-w-96">
                    {language == "de"
                      ? "E-Mail: demo@dev (Passwort: demo) oder Account selbst erstellen."
                      : "E-Mail: demo@dev (Password: demo) or create your own account."}
                  </p>
                </PopoverContent>
              </Popover>
            </div>
            <Link ref={projectRef} to="https://toktok.abothke.dev">
              {isDark ? (
                <img
                  className="phone"
                  src={
                    isHovered ? "/cringeMainDark.png" : "/cringeLandDark.png"
                  }
                  alt=""
                  onMouseOver={() => !matches && setIsHovered(true)}
                  onMouseOut={() => !matches && setIsHovered(false)}
                />
              ) : (
                <img
                  className="phone"
                  src={
                    isHovered ? "/cringeMainLight.png" : "/cringeLandLight.png"
                  }
                  alt=""
                  onMouseOver={() => !matches && setIsHovered(true)}
                  onMouseOut={() => !matches && setIsHovered(false)}
                />
              )}
            </Link>
            <h2 className="text-center my-8 mb-0 font-semibold max-w-96">
              {language === "de"
                ? "Instagram Klon, geschrieben in Vite/React (mit Tailwind/ShadCn) und Typescript."
                : "Instagram Clone, written in Vite/React (with Tailwind/Shadcn) with Typescript."}
            </h2>
            <h2 className="text-center font-semibold max-w-96">
              {language === "de"
                ? "Backend geschrieben in Node.js (Express.js) und MongoDB."
                : "Backend written in Node.js (Express.js) and MongoDB."}
            </h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="mb-7"></div>
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
                  onMouseOver={() => !matches && setIsHovered2(true)}
                  onMouseOut={() => !matches && setIsHovered2(false)}
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
                  onMouseOver={() => !matches && setIsHovered2(true)}
                  onMouseOut={() => !matches && setIsHovered2(false)}
                />
              )}
            </Link>
            <h2 className="text-center my-8 font-semibold max-w-80">
              {language === "de"
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
