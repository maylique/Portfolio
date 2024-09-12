import { useLocation } from "react-router-dom";
import { LanguageToggle } from "./LanguageToggle";
import { ModeToggle } from "./mode-toggle";

const Navbar = ({ language }: { language: string }) => {
  const location = useLocation();
  const isProjectsPage = location.pathname.includes("/projects");
  return (
    <>
      <header className=" z-10 flex items-center justify-between bg-slate-200 dark:bg-slate-700 p-4 px-8 font-bold text-xl fixed bg-opacity-40 dark:bg-opacity-40 backdrop-blur-xl max-md:static mx-12 mt-2 rounded-full w-11/12 max-md:mx-auto">
        <a href="/">
          <h2 className="uppercase hover:text-red-700">Guski.dev</h2>
        </a>
        <section className="flex gap-2 m-2 items-center">
          <nav className="flex gap-4 mr-3 max-md:hidden">
            <a href={isProjectsPage ? "/#home" : "#home"}>
              {language == "de" ? "Startseite" : "Home"}
            </a>
            <a href={isProjectsPage ? "/#about" : "#about"}>
              {language == "de" ? "Über Mich" : "About"}
            </a>
            <a href="#projects">{language == "de" ? "Projekte" : "Projects"}</a>
            <a href={isProjectsPage ? "/#contact" : "#contact"}>
              {language == "de" ? "Kontakt" : "Contact"}
            </a>
          </nav>
          <LanguageToggle />
          <ModeToggle />
        </section>
      </header>
    </>
  );
};

export default Navbar;
