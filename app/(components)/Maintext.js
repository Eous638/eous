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
          minHeight: "80vh",
        }}
        ref={vantaRef}
      >
        <IconCloud
          size={100}
          style={{
            color: "lightblue",
            textAlign: "center",
            fontffamily: "karla",
            margin: "0",
            paddingBottom: 0,
            paddingTop: "8rem",
            margin: "auto",
            width: "100%", // Add this line to set the width to 100%
          }}
        />
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "3rem",
            fontFamily: "karla", // Fix the typo here
            margin: "0",
            paddingBottom: "1rem",
            paddingTop: "0.6rem",
            textAlign: "center",
          }}
          // Add this line to center the h1 element
        >
          EOUS
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "karla",
            margin: "0",
            paddingBottom: "6rem",
            paddingTop: "1rem",
            paddingInline: "35rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
          quisquam ullam blanditiis dolor recusandae.
        </p>
      </div>
    </>
  );
}
