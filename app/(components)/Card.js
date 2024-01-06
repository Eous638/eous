import React, { useEffect, useState } from "react";

export default function Card(props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2.2rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        backgroundColor: "#131313",
        width: "24vw", // Set width to 12.5% of viewport width
        height: "27vh", // Set height to 40% of viewport height
        border: `0.4px solid ${props.animationColor}`,
        fontFamily: "karla", // Set font family to "karla"
      }}
    >
      {props.children}
      <h1 style={{ color: "white" }}>{props.title}</h1>
      <p style={{ color: "white" }}>{props.text}</p>
    </div>
  );
}
