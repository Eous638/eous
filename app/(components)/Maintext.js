import React, { useEffect, useState, useRef } from "react";
import { IconCloud } from "@tabler/icons-react";
import NET from "vanta/dist/vanta.net.min";
import script from "next/script";
export default function Maintext() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#5005ff",
          backgroundColor: 0x0,
          points: 14.0,
          maxDistance: 30.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"></script>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: -1,
          top: "-6rem",
        }}
        className="flex flex-col h-screen items-center justify-center"
        ref={vantaRef}
      >
        <img src="logo 1.png" className=" h-56 md:h-72"></img>
        <h1 className="text-white text-center text-6xl md:text-9xl m-0 pb-1rem pt-1rem">
          EOUS
        </h1>
        <p className="text-white text-center text-2xl m-0  px-3.5   inline md:text-4xl pt-6">
          Experience the future of technology, today.
        </p>
      </div>
    </>
  );
}
