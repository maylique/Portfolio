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

  return (
    <>
      <main
        id="home"
        className="m-5 mt-0 flex flex-col min-h-dvh items-center justify-center"
      >
        <section className="flex gap-28 justify-between items-center mb-20 max-md:flex-col-reverse max-md:text-center max-md:gap-10">
          <article className="max-w-xl">
            <h1 className="text-7xl font-extrabold m-6 ml-4 max-md:text-6xl max-md:mb-20">
              Full Stack {language == "de" ? "Entwickler" : "Developer"} 👋
            </h1>
            <h3 className="text-2xl m-4">
              {language == "de" ? "Moin, Ich bin " : "Hi there, I'm "}
              <span className="text-red-500">Jannik</span>. <br />
              {language == "de"
                ? "Ich bin ein Full Stack Entwickler mit einer Leidenschaft für Webentwicklung und komme aus Hannover."
                : "I am a full stack developer with a passion for web development based in Hannover, Germany."}{" "}
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
            className="heroImg border-gray-600 border-2 w-96 h-96 dark:border-gray-400 max-md:w-64 max-md:h-64"
            src="/c80b5a91919996f8ed0aabcf912c80bd.jpg"
            alt="Profile picture"
          />
        </section>
        <section className="m-4 flex gap-10 items-center mt-10 max-md:flex-col max-md:mt-0 max-md:mb-6">
          <>
            <div className="flex gap-5 max-md:flex-col">
              <h5 className="text-xl font-bold">Tech Stack</h5>
              {matches ? (
                <Separator className="my-5 dark:bg-white" />
              ) : (
                <h5>|</h5>
              )}
            </div>
          </>
          <div className="flex gap-10 max-md:grid max-md:grid-cols-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/react.svg" : "/reactLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">React ❤️</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/vite.svg" : "/viteLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Vite ❤️</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/express.svg" : "/expressLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Express.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/node.svg" : "/nodeLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Node.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/js.svg" : "/jsLight.svg"}
                    alt=""
                  />{" "}
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Javascript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/ts.svg" : "/tsLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/tailwind.svg" : "/tailwindLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Tailwind</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/shadcn.svg" : "/shadcnLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">ShadCN UI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/sass.svg" : "/sassLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">Sass/Scss</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-16 h-16"
                    src={isDark ? "/mongodb.svg" : "/mongodbLight.svg"}
                    alt=""
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-2xl">MongoDB</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
