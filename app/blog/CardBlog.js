"use client";
import React, { useState, useEffect } from "react";
// import PocketBase from "pocketbase";

export default function CardBlog(props) {
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
    <div
      className="pt-6 pb-6 flex flex-row px-6 h-22 rounded-2xl mb-6 cursor-pointer md:px-24 md:pt-6 md:pb-10"
      style={{
        borderBottom: `1.5px solid ${animationColor}`,
        backgroundColor: "#242323",
      }}
    >
      <img
        src={`https://eous.pockethost.io/api/files/f00bupxnz6hpf9h/${props.id}/${props.img}?token=`}
        className="rounded-2xl h-24 md:h-52"
      ></img>
      <div className="ml-6">
        <h1 className="text-white text-sm md:text-4xl pb-3 mt-8">
          {props.title}
        </h1>
        <p className="text-white text-xs hidden md:block md:text-xl">
          {props.text}
        </p>
      </div>
    </div>
  );
}
