"use client";
import React from "react";
import Navbar from "../(components)/Navbar";
import Form from "../(components)/Form";
import CardProizvod from "./CardProizvod";

const Proizvodi = () => {
  return (
    <div style={{backgroundColor:'black', }}>
      <Navbar />
      <h1 style={{ color: "white",fontSize:'4.5rem', textAlign:'center',marginBottom:'3rem', paddingTop: "8rem" }}>Proizvodi</h1>
      <div style={{display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
          justifyContent: "center",
          margin: "2rem 7rem",}}>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      <CardProizvod 
      tittle = 'NASLOV'
      img = 'download (1).jpeg'/>
      </div>
    </div>
  );
};

export default Proizvodi;
