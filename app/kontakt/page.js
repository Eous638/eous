"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../(components)/Navbar";
import Form from "../(components)/Form";
import { IconPhone } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import WAVES from "vanta/dist/vanta.waves.min";
const ContactPage = () => {
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
      <div ref={vantaRef} style={{ height: "100vh" }}>
        <Navbar />
        <h1
          style={{
            paddingTop: "11rem",
            display: "block",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Kontakt
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2.20000000000000000rem",
            fontSize: "2rem",
            gap: "1.2rem",
          }}
        >
          <IconMail size={40} />
          <h2>Email</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2rem",
            fontSize: "2rem",
            gap: "1.2rem",
          }}
        >
          <IconPhone size={40} />
          <h2>telefon</h2>
        </div>
        <Form />
      </div>
    </>
  );
};

export default ContactPage;
