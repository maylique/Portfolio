import { Github, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ language }: { language: string }) => {
  return (
    <>
      <footer className="flex justify-evenly font-bold text-2xl py-12 w-full max-md:flex-col-reverse text-center items-center gap-10 max-md:text-xl">
        <h6>
          {language == "de"
            ? "Urheberrecht. ® Alle Rechte vorbehalten."
            : "Copyright © 2024. All rights are reserved."}
        </h6>
        <div className="flex gap-4">
          <Link to="https://www.linkedin.com/in/jannik-guski-b15519304">
            <LinkedinIcon className="hover:text-blue-400" size={32} />
          </Link>
          <Link to="https://github.com/maylique">
            <Github className="hover:text-blue-400" size={32} />
          </Link>
        </div>
      </footer>

    </>
  );
};

export default Footer;
