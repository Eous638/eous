import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server or perform any desired action
    console.log("Form submitted:", { name, email, message });
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        height: "3.70rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <input
            type="Name"
            placeholder="Ime i prezime"
            value={name}
            className="w-80 h-10 pl-4 text-xs mb-4 items-center justify-center border-white border-2 rounded-md bg-black required md:w-96 md:h-12 md:text-sm md:mb-6 lg:w-1/3 lg:h-20 lg:text-md lg:mb-6 "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Broj telefona"
            value={number}
            className="w-80 h-10 pl-4 text-xs mb-4 items-center justify-center border-white border-2 rounded-md bg-black required md:w-96 md:h-12 md:text-sm md:mb-6 lg:w-1/3 lg:h-20 lg:text-md lg:mb-6"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="company"
            placeholder="Naziv kompanije (opcionalno)"
            value={email}
            className="w-80 h-10 pl-4 text-xs mb-4 items-center justify-center border-white border-2 rounded-md bg-black md:w-96 md:h-12 md:text-sm md:mb-6 lg:w-1/3 lg:h-20 lg:text-md lg:mb-6"
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-80 h-7 pl-4 text-xs mb-4 items-center justify-center border-white border-2 rounded-md bg-black required md:w-96 md:h-10 md:text-sm md:mb-6 lg:w-1/3 lg:h-20 lg:text-md lg:mb-6"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={message}
            placeholder="Poruka"
            className="w-80 h-40 pl-4 pt-3 text-xs mb-4 items-center justify-center border-white border-2 rounded-md bg-black required md:w-96 md:h-52 md:text-sm md:mb-6 lg:w-1/3 lg:h-55 lg:text-md lg:mb-6"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#1d1f1e",
              padding: "0.3rem",
              borderRadius: "7px",
              fontSize: "1.1rem",
              border: "1.3px solid white",
              placeholder: "Pošalji",
              color: "grey",
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
              marginBottom: "2rem",
              display: "flex",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
