"use client";
import React from "react";
import Card from "./Card";
import {
  IconDevices,
  IconBolt,
  IconCubeSend,
  IconBinaryTree,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

function useWindowDimensions() {
  // Set initial state to a default value
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Update state after component has mounted
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
function NaseUsluge(props) {
  const [animationColor, setAnimationColor] = useState("#5005FF");
  const color1 = "#5005FF";
  const color2 = "#FF0000";
  const { width } = useWindowDimensions();
  const iconSize = width > 600 ? 95 : 50;

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
    <div className="bg-black border-t-1 border-black flex flex-col justify-center items-center  w-full overflow-hidden ">
      <h1 className="mb-24 text-6xl" style={{ color: animationColor }}>
        Zašto EOUS?
      </h1>
      <div className="gap-4 p-4 md:w-4/5 h-3/5 grid grid-cols-2 md:gap-8 justify-center mx-auto w-full">
        <div className="flex justify-center">
          <Card title="BRZO" text="Tekst" animationColor={animationColor}>
            <IconBolt size={iconSize} strokeWidth={2} color={"#5005FF"} />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card
            title="CROSS-PLATFORM"
            text="Tekst"
            animationColor={animationColor}
          >
            <IconDevices size={iconSize} strokeWidth={2} color={"#5005FF"} />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card title="EDGE" text="Tekst" animationColor={animationColor}>
            <IconCubeSend size={iconSize} strokeWidth={2} color={"#5005FF"} />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card
            title="DE-CENTRALIZOVANO"
            text="Tekst"
            animationColor={animationColor}
          >
            <IconBinaryTree size={iconSize} strokeWidth={2} color={"#5005FF"} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default NaseUsluge;
