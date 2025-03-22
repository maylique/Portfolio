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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Github, LinkedinIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Hero = ({ language }: { language: string }) => {
  const [isDark, setIsDark] = useState(false);
  const [matches, setMatches] = useState(
    matchMedia("(max-width: 768px)").matches
  );
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
    const handleResize = () => {
      setMatches(matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  const [clickedOrHovered, setClickedOrHovered] = useState(false);

  return (
    <>
      <main
        id="home"
        className="m-5 mt-0 flex flex-col min-h-dvh items-center justify-center max-md:mt-10"
      >
        <section className="flex gap-28 justify-between items-center mb-20 max-md:flex-col-reverse max-md:text-center max-md:gap-10">
          <article className="max-w-xl">
            <h1 className="text-7xl font-extrabold m-6 ml-4 mb-14 max-md:text-6xl max-md:mb-20 relative">
              Full Stack {language == "de" ? "Entwickler" : "Developer"}{" "}
              <div className="waitShake max-md:my-3 max-md:static absolute top-8 right-10 text-8xl">
                <span>👋</span>
              </div>
            </h1>
            <h3 className="lg:text-3xl m-4 fontSize1dot5xl">
              {language == "de" ? "Moin, ich bin " : "Hi there, I'm "}
              <span className="text-red-500">Jannik</span>. <br />
              {language == "de"
                ? "Ich bin ein Full Stack Entwickler mit einer Leidenschaft für Webentwicklung und komme aus Hannover."
                : "I'm a full stack developer with a passion for web development based in Hannover, Germany."}
              🚩
            </h3>
            <div className="flex m-4 mt-10 gap-5 max-md:justify-center">
              <Link to="https://www.linkedin.com/in/jannik-guski-b15519304">
                <LinkedinIcon className="hover:text-blue-400" size={48} />
              </Link>
              <Link to="https://github.com/maylique">
                <Github className="hover:text-blue-400" size={48} />
              </Link>
            </div>
          </article>
          <img
            className="heroImg border-gray-600 border-2 w-96 h-96 dark:border-gray-400 max-md:w-64 max-md:h-64 object-cover"
            src="/code.jpg"
            alt="code picture"
          />
        </section>
        <section className="m-4 flex gap-10 items-center mt-10 max-md:flex-col max-md:mt-0 max-md:mb-6">
          <div className="flex gap-5 max-md:flex-col relative">
            <h5 className="text-xl font-bold pr-6 max-md:pr-0 whitespace-nowrap">
              Tech Stack
            </h5>
            {matches ? (
              <Popover>
                <PopoverTrigger
                  onClick={() => {
                    if (clickedOrHovered === true) {
                      setTimeout(() => {
                        setClickedOrHovered(!clickedOrHovered);
                      }, 10000);
                    } else {
                      setClickedOrHovered(!clickedOrHovered);
                    }
                  }}
                  className={`text-xl absolute -top-4 right-4 max-md:-right-7 max-md:-top-3 ${
                    clickedOrHovered ? "" : "waitJello"
                  }`}
                >
                  <span className="text-red-600 bg-red-300 rounded-full px-2">
                    ?
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-xl">
                    {language == "de"
                      ? "Touch auf die Logos"
                      : "Touch the logos"}
                  </p>
                </PopoverContent>
              </Popover>
            ) : (
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger
                    onMouseOver={() => {
                      setClickedOrHovered(true);
                    }}
                    onMouseOut={() => {
                      setTimeout(() => {
                        setClickedOrHovered(false);
                      }, 10000);
                    }}
                    className={`text-xl absolute -top-4 right-4 max-md:-right-7 max-md:-top-3 ${
                      clickedOrHovered ? "" : "waitJello"
                    }`}
                  >
                    <span className="text-red-600 bg-red-300 rounded-full px-2">
                      ?
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xl">
                      {language == "de"
                        ? "Maus über Logo halten"
                        : "Hover with mouse over logos"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {matches ? (
              <Separator className="my-5 dark:bg-white" />
            ) : (
              <h5>|</h5>
            )}
          </div>
          <div className="flex gap-10 max-md:grid max-md:grid-cols-3">
            {[
              { src: "react", label: "React ❤️" },
              { src: "vite", label: "Vite ❤️" },
              { src: "express", label: "Express.js" },
              { src: "node", label: "Node.js" },
              { src: "js", label: "Javascript" },
              { src: "ts", label: "Typescript" },
              { src: "tailwind", label: "Tailwind" },
              { src: "shadcn", label: "ShadCN UI" },
              { src: "mongodb", label: "MongoDB" },
            ].map(({ src, label }) =>
              matches ? (
                <Popover key={src}>
                  <PopoverTrigger>
                    <img
                      className="w-16 h-16"
                      src={isDark ? `/${src}.svg` : `/${src}Light.svg`}
                      alt={label}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-2xl">{label}</p>
                  </PopoverContent>
                </Popover>
              ) : (
                <TooltipProvider key={src}>
                  <Tooltip>
                    <TooltipTrigger>
                      <img
                        className="w-16 h-16"
                        src={isDark ? `/${src}.svg` : `/${src}Light.svg`}
                        alt={label}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-2xl">{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
