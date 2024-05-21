import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLanguage } from "@/provider/LanguageProvider";

const Home = () => {
  const { language }: { language: string } = useLanguage();
  return (
    <>
      <Navbar language={language} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
};

export default Home;
