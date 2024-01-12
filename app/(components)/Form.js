import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width: "100%",
        backgroundColor: "black",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "100vw", // Set the maximum width to the viewport width
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <h1 className="text-4xl">Pusti nam poruku</h1>
        <div>
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            style={{
              width: "100%",
              maxWidth: "100vw",
              height: "3rem",
              textIndent: "3rem",
              fontSize: "1.5rem",
              marginBottom: "2rem",
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
              width: "80vw",
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
