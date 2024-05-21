import { MailIcon, MapIcon } from "lucide-react";

const Contact = ({ language }: { language: string }) => {
  return (
    <>
      <section
        id="contact"
        className="py-24 w-full text-2xl font-bold flex flex-col items-center justify-center bg-gray-200 dark:bg-slate-900 "
      >
        <div className="mb-10">
          <h2 className="text-blue-600 text-3xl mb-6 text-center">
            {language == "de" ? "Kontakt" : "Contact"}
          </h2>
          <p className="text-center">
            {language == "de" ? "Schreib mir gerne!" : "Hit me up!"} 👇
          </p>
        </div>
        <section className="flex gap-28 mt-5 max-md:flex-col">
          <div className="flex gap-5 items-center">
            <MapIcon size={52} />
            <div>
              <h5 className="pb-3">
                {language == "de" ? "Standort" : "Location"}
              </h5>
              <p className="font-normal">
                {language == "de" ? "Hannover" : "Hannover, Germany"}
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <MailIcon size={52} />
            <div>
              <h5 className="pb-3">{language == "de" ? "E-Mail" : "Mail"}</h5>
              <a className="font-normal" href="mailto:guski.jannik@gmail.com">
                guski.jannik@gmail.com
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
