"use client";
import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import CardProizvod from "./CardProizvod";

const Proizvodi = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#131313",
          waveHeight: 28.0,
          waveSpeed: 0.65,
          zoom: 0.9,
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
      <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
      <div
        ref={vantaRef}
        style={{ height: "100%", paddingBottom: 30, paddingTop: "7rem" }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient( 35deg,hsl(334deg 94% 45%) 0%, hsl(18deg 84% 61%) 82%, hsl(40deg 100% 50%) 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#5005FF",
            borderRadius: 30,
            width: "70vw",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              textAlign: "center",
              paddingTop: "7rem",
              paddingBottom: "7rem",
            }}
          >
            Proizvodi
          </h1>
        </div>
        <div className=" grid  gap-12 justify-center mx-7 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
          <CardProizvod tittle="NASLOV" img="download (1).jpeg" />
        </div>
      </div>
    </>
  );
};

export default Proizvodi;
