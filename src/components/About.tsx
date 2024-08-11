const About = ({ language }: { language: string }) => {
  return (
    <>
      <section
        id="about"
        className="py-24 min-h-96 flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 max-md:px-10 max-md:text-center max-md:py-10 rounded-3xl px-8 minWidthMargin dark:bg-opacity-50 bg-opacity-80 backdrop-blur-xl max-md:mx-0"
      >
        <h3 className="font-bold text-5xl mb-5 text-red-800">
          {language == "de" ? "Über Mich" : "About me"}
        </h3>
        <h2 className="font-bold text-3xl my-4">
          {language == "de"
            ? "Full Stack Entwickler aus Hannover."
            : "Full stack Developer based in Hannover, Germany"}{" "}
          🚩
        </h2>
        <p className="my-2 text-xl">
          {language == "de"
            ? "Hi, ich bin einer der Super-Alumnis von SuperCode, einem Full Stack Bootcamp."
            : "Hey, i am a Super Alumni of SuperCode, a Full stack Bootcamp."}
        </p>
        <p className="my-2 text-xl max-w-screen-md text-center">
          {language == "de"
            ? "Am meisten Erfahrung habe ich bisher mit Vite/React mit Express.js und MongoDB gemacht, oft kombiniert mit Tailwind/Shadcn und natürlich Typescript."
            : "My main stack currently is Vite/React with Express.js and MongoDB in combination with Tailwind/Shadcn and Typescript."}
        </p>
      </section>
    </>
  );
};

export default About;
