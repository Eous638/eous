import React, { useEffect, useState } from "react";
import { IconCloud } from "@tabler/icons-react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <nav
      style={{
        backgroundColor: "#131313",
        color: "#5005FF",
        display: "flex",
        alignItems: "center",
        fontSize: "1.5 rem",
        margin: "0",
        borderBottom: `0.1rem solid ${props.animationColor}`,
        position: "fixed",
        top: "0",
        width: "100%",
        height: "6rem",
        zIndex: "100",
        opacity: "0.75",
      }}
    >
      <Link href={"/"}>
      <IconCloud size={60} style={{ marginLeft: "2rem", color: "lightblue" }} />
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
