"use client";
import React, { useState, useEffect, useRef } from "react";
import { IconPhone } from "@tabler/icons-react";
import ContactForm from "../(components)/ContactForm";
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
      <div ref={vantaRef} style={{ height: "120vh" }}>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Add this line to center horizontally
            paddingTop: "11rem",
            display: "block",
            fontSize: "3rem",
            textAlign: "center",
            color: "white",
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
            color: "white",
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
            color: "white",
          }}
        >
          <IconPhone size={40} />
          <h2>telefon</h2>
        </div>
        <div style={{ justifyContent: "center" }}>
          {" "}
          {/* Add this line to center horizontally */}
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
