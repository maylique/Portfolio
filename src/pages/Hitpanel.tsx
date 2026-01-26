import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/provider/LanguageProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme } from "@/provider/ThemeProvider";

const Hitpanel = () => {
  const { language } = useLanguage();
  const { theme: currentTheme } = useTheme();
  
  const [theme, setTheme] = useState<string>(currentTheme);
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
    }

    const baseColor = theme === "light" ? 0xa9a9a9 : 0x0;
    const midtoneColor = theme === "light" ? 0xcf8484 : 0x0;
    const lowlightColor = theme === "light" ? 0x60607f : 0x5c002f;
    const highlightColor = theme === "light" ? 0xacac8c : 0x1e2d75;
    const zoom = theme === "light" ? 0.1 : 0.3;

    if (vantaEffect) {
      vantaEffect.destroy();
    }

    if (vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: highlightColor,
        midtoneColor: midtoneColor,
        lowlightColor: lowlightColor,
        baseColor: baseColor,
        blurFactor: 0.9,
        speed: 0.8,
        zoom: zoom,
      });
      setVantaEffect(effect);
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  // Force re-initialization on re-mount if needed, but the effect cleanup handles it.

  return (
    <>
      <Navbar language={language} />
      <div className="container2 min-h-screen flex flex-col" ref={vantaRef}>
        <main className="flex-1 container mx-auto px-4 py-8 pt-24 text-foreground">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hitpanel FAQ
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-8 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-border/50">
            <Accordion type="single" collapsible className="w-full text-foreground">
              <AccordionItem value="item-1" className="border-b-foreground/20">
                <AccordionTrigger className="text-xl">
                  Mein Hitpanel startet nicht, Fehler XYZ was soll ich tun?
                </AccordionTrigger>
                <AccordionContent className="text-lg space-y-4">
                  <p>
                    Gehen Sie in den Hitpanel Installationsordner auf Ihrem Desktop und führen Sie "alle Instanzen beenden" via Rechtsklick als Administrator aus.
                  </p>
                  <p>
                    Dann starten Sie "setuphitpanelserver" und folgen Sie dem Installationsassistenten.
                  </p>
                  
                  <div className="mt-6 aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25 overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    src="/videos/hitpanel_xyz.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
        <Footer language={language} />
      </div>
    </>
  );
};

export default Hitpanel;
