import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect } from "react";

const Home = () => {
  const sendPing = () => {
    navigator.sendBeacon("https://toktok-backend.abothke.dev/ping/");
  };

  useEffect(() => {
    sendPing();
  }, []);
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
