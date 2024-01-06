import React from "react";
import Card from "./Card";
import { IconCloud, IconMilkshake } from "@tabler/icons-react";

export default function NaseUsluge(props) {
  return (
    <div
      style={{
        backgroundColor: "#19191a",
        borderTop: "0.1rem solid #19191a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          marginTop: "0",
          color: "white",
          marginBottom: "4rem",
          fontSize: "3rem",
        }}
      >
        Zašto EOUS?
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "6rem",
          justifyContent: "center",
          margin: "3 auto",
        }}
      >
        <Card title="Naslov" text="Tekst" animationColor={props.animationColor}>
          <IconMilkshake size={100} style={{ color: "white" }} />
        </Card>
        <Card title="Naslov" text="Tekst" animationColor={props.animationColor}>
          <IconCloud size={100} style={{ color: "white" }} />
        </Card>
        <Card title="Naslov" text="Tekst" animationColor={props.animationColor}>
          <IconCloud size={100} style={{ color: "white" }} />
        </Card>
        <Card title="Naslov" text="Tekst" animationColor={props.animationColor}>
          <IconCloud size={100} style={{ color: "white" }} />
        </Card>
      </div>
    </div>
  );
}
