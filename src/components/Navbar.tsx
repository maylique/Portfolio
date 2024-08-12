import { LanguageToggle } from "./LanguageToggle";
import { ModeToggle } from "./mode-toggle";

const Navbar = ({ language }: { language: string }) => {
  return (
    <>
      <header className=" z-10 flex items-center justify-between bg-slate-200 dark:bg-slate-700 p-4 px-8 font-bold text-xl fixed bg-opacity-40 dark:bg-opacity-40 backdrop-blur-xl max-md:static m-12 mt-2 rounded-full w-11/12">
        <h2 className="uppercase">Guski.dev</h2>
        <section className="flex gap-2 m-2 items-center">
          <nav className="flex gap-4 mr-3 max-md:hidden">
            <a href="#home">{language == "de" ? "Startseite" : "Home"}</a>
            <a href="#about">{language == "de" ? "Über Mich" : "About"}</a>
            <a href="#projects">{language == "de" ? "Projekte" : "Projects"}</a>
            <a href="#contact">{language == "de" ? "Kontakt" : "Contact"}</a>
          </nav>
          <LanguageToggle />
          <ModeToggle />
        </section>
      </header>
    </>
  );
};

export default Navbar;
