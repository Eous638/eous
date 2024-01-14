import React from "react";
import Maintext from "./(components)/Maintext";
import Form from "./(components)/Form";
import dynamic from "next/dynamic";
const NaseUsluge = dynamic(() => import("./(components)/NaseUsluge"), {
  ssr: false,
});

export default function App() {
  return (
    <div>
      <Maintext />
      <NaseUsluge />
      <Form />
    </div>
  );
}
