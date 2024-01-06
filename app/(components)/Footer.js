import React from "react";

export default function Footer(props) {
  return (
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
        fontFamily: "Karla", // Updated font family to "Karla"
        margin: "0",
        borderTop: `0.1rem solid ${props.animationColor}`,
        height: "6rem",
      }}
    >
      <p>EOUS</p>
      <p>Email</p>
      <p>Phone</p>
      <p>© 2024 EOUS</p>
    </footer>
  );
}
