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
        height: "30rem",
      }}
    >
      <form onSubmit={handleSubmit} style={{}}>
        <div>
          <br />
          <input
            type="Name"
            placeholder="Full name"
            value={name}
            style={{
              width: "50rem",
              height: "3rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              alignContent: "center",
              border: "1.7px solid white",
              borderRadius: "7px",
              backgroundColor: "#1d1f1e",
              required: true,
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="Number"
            placeholder="Number"
            value={number}
            style={{
              width: "50rem",
              height: "3rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              alignContent: "center",
              border: "1.7px solid white",
              borderRadius: "7px",
              backgroundColor: "#1d1f1e",
              required: true,
            }}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <input
            type="company"
            placeholder="Company(optional)"
            value={email}
            style={{
              width: "50rem",
              height: "3rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              alignContent: "center",
              border: "1.7px solid white",
              borderRadius: "7px",
              backgroundColor: "#1d1f1e",
              required: true,
            }}
            onChange={(e) => setCompany(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            style={{
              width: "50rem",
              height: "3rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              alignContent: "center",
              border: "1.7px solid white",
              borderRadius: "7px",
              backgroundColor: "#1d1f1e",
              required: true,
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            value={message}
            placeholder="Poruka"
            style={{
              width: "50rem",
              height: "10rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              alignContent: "center",
              border: "1.7px solid white",
              borderRadius: "7px",
              backgroundColor: "#1d1f1e",
            }}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#1d1f1e",
              padding: "0.5rem",
              borderRadius: "7px",
              fontSize: "1.5rem",
              border: "1.3px solid white",
              placeholder: "Pošalji",
              color: "grey",
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
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
