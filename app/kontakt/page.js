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
      <div ref={vantaRef} style={{ height: "120vh", paddingTop: 10 }}>
        <h1 className="flex flex-col items-center justify-center pt-2 text-3xl text-center text-white pb-6 md:text-5xl md:pb-10 md:pt-10">
          Kontakt
        </h1>
        <div className="flex flex-row justify-center ">
          <div className="flex flex-col justify-center text-4 gap-10 text-white md:flex-row md:text-2xl">
            <div className="flex flex-col justify-center text-4 gap-3 text-white">
              <IconMail size={40} />
              <h2>Email</h2>
            </div>
            <div className="flex flex-col justify-center text-4 gap-3 text-white">
              <IconPhone size={40} />
              <h2>Telefon</h2>
            </div>
          </div>
        </div>
        <div style={{ justifyContent: "center", width: "100%" }}>
          {" "}
          {/* Add this line to center horizontally */}
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
