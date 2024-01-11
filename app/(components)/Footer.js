"use client";
import React, { useState, useEffect } from "react";

export default function Footer(props) {
  const [animationColor, setAnimationColor] = useState("#5005FF");
  const color1 = "#5005FF";
  const color2 = "#FF0000";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const newColor = interpolateColor(color1, color2, scrollPercentage);
      setAnimationColor(newColor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const interpolateColor = (color1, color2, percentage) => {
    const color1Rgb = hexToRgb(color1);
    const color2Rgb = hexToRgb(color2);

    const r = Math.round(
      color1Rgb.r + (color2Rgb.r - color1Rgb.r) * percentage
    );
    const g = Math.round(
      color1Rgb.g + (color2Rgb.g - color1Rgb.g) * percentage
    );
    const b = Math.round(
      color1Rgb.b + (color2Rgb.b - color1Rgb.b) * percentage
    );

    return rgbToHex(r, g, b);
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  return (
    <div className="block, h-24">
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          color: "white",
          height: "30 rem",
          alignItems: "center",
          fontSize: "1.5 rem",
          justifyContent: "space-around",
          textAlign: "center",
          margin: "0",
          borderTop: `0.1rem solid ${animationColor}`,
          height: "6rem",
        }}
      >
        <p>EOUS</p>
        <p>Email</p>
        <p>Phone</p>
        <p>© 2024 EOUS</p>
      </footer>
    </div>
  );
}
