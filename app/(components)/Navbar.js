"use client";
import React, { useEffect, useState } from "react";
import { IconCloud } from "@tabler/icons-react";
import Link from "next/link";

const Navbar = (props) => {
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
    <nav
      style={{
        backgroundColor: "#131313",
        color: "#5005FF",
        display: "flex",
        alignItems: "center",
        fontSize: "1.5 rem",
        margin: "0",
        borderBottom: `0.1rem solid ${animationColor}`,
        position: "fixed",
        top: "0",
        width: "100%",
        height: "6rem",
        zIndex: "100",
        opacity: "0.75",
      }}
    >
      <Link href={"/"}>
        <IconCloud
          size={60}
          style={{ marginLeft: "2rem", color: "lightblue" }}
        />
      </Link>
      <div style={{ marginLeft: "auto", marginRight: "2rem" }}>
        <ul style={{ listStyleType: "none", display: "flex", gap: "2rem" }}>
          <li>
            <Link
              href="/proizvodi"
              style={{
                color: "white",
                fontSize: "2rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Proizvodi
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                color: "white",
                fontSize: "2rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "2rem",
                textDecoration: "none",
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
