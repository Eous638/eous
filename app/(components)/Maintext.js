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
          position: "relative", // This creates a new stacking context
          zIndex: -1, // This places this stacking context behind the navbar's
        }}
        className="flex flex-col min-h-screen items-center justify-center"
        ref={vantaRef}
      >
        <IconCloud
          size={100}
          className="text-lightblue text-center m-0 pb-0 pt-8rem"
        />
        <h1 className="text-white text-center text-3xl m-0 pb-1rem pt-0.6rem">
          EOUS
        </h1>
        <p className="text-white text-center text-sm m-0  px-3.5  inline md:text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
          quisquam ullam blanditiis dolor recusandae.
        </p>
      </div>
    </>
  );
}
