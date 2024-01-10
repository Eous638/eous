import React from "react";
import CardBlog from "./CardBlog";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
async function getData() {
  const records = await fetch(
    "http://127.0.0.1:8090/api/collections/blog_posts/records?page=1&limit=10&sort=-created",
    { next: { revalidate: 1 } }
  );

  return records.json();
}
const Blog = async () => {
  const records = await getData();

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

      {Object.values(records.items).map(
        (item) => (
          console.log(item),
          console.log("test"),
          (
            <CardBlog
              title={item.title}
              text={item.description}
              id={item.id}
              img={item.image}
            />
          )
        )
      )}
    </div>
  );
};

export default Blog;
