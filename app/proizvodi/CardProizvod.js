import React from "react";

export default function CardProizvod(props) {
  return (
    <div
      style={{
        border: "1px solid #131313",
        borderRadius: "8px",
        backgroundColor: "#131313",
        color: "white",
        height: "40vh",
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={props.img}
        style={{ height: "15rem", borderRadius: "8px" }}
        alt="product"
      ></img>
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        {props.tittle}
      </h1>
    </div>
  );
}
