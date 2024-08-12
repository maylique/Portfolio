import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

const Vanta = () => {
  return (
    <div className="container" ref={vantaRef}>
      <Hero language="language" />
    </div>
  );
};

export default Vanta;
