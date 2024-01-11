import React from "react";
import Card from "./Card";
import {
  IconDevices,
  IconBolt,
  IconCubeSend,
  IconBinaryTree,
} from "@tabler/icons-react";

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
        width: "100vw",
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
          width: "80vw",
          height: "60vh",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          justifyContent: "center",
          margin: "3 auto",
        }}
      >
        <Card title="BRZO" text="Tekst" animationColor={props.animationColor}>
          <IconBolt size={95} strokeWidth={2} color={"#5005FF"} />
        </Card>
        <Card
          title="CROSS-PLATFORM"
          text="Tekst"
          animationColor={props.animationColor}
        >
          <IconDevices size={95} strokeWidth={2} color={"#5005FF"} />
        </Card>
        <Card title="EDGE" text="Tekst" animationColor={props.animationColor}>
          <IconCubeSend size={95} strokeWidth={2} color={"#5005FF"} />
        </Card>
        <Card
          title="DECENTRALIZOVANO"
          text="Tekst"
          animationColor={props.animationColor}
        >
          <IconBinaryTree size={95} strokeWidth={2} color={"#5005FF"} />
        </Card>
      </div>
    </div>
  );
}
