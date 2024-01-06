import React from "react";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <div
      style={{
        backgroundColor: "#242323",

        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "7rem",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(235deg, hsl(273deg 96% 60%) 13%, hsl(276deg 69% 47%) 50%, hsl(285deg 92% 29%) 87%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#5005FF",
          borderRadius: 30,
          width: "70vw",
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "7rem",
            paddingBottom: "7rem",
          }}
        >
          Blog
        </h1>
      </div>
      <CardBlog
        img="modern.jpg"
        title="BLOG"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae."
      />
      <CardBlog
        img="modern.jpg"
        title="BLOG"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae."
      />
      <CardBlog
        img="modern.jpg"
        title="BLOG"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae."
      />
      <CardBlog
        img="modern.jpg"
        title="BLOG"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae."
      />
      <CardBlog
        img="modern.jpg"
        title="BLOG"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae."
      />
    </div>
  );
};

export default Blog;
