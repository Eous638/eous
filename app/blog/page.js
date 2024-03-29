import React from "react";
import CardBlog from "./CardBlog";
import Link from "next/link";

async function getData() {
  const records = await fetch(
    "http://eous.pockethost.io/api/collections/blog_posts/records?page=1&limit=10&sort=-created",
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
        paddingTop: 30,
      }}
    >
      <div className="p-12 px-14 w-9/ flex justify-center md:mx-auto">
        <div
          style={{
            backgroundImage:
              "linear-gradient(235deg, hsl(273deg 96% 60%) 13%, hsl(276deg 69% 47%) 50%, hsl(285deg 92% 29%) 87%)",
            margin: "0 auto", // Add this line to center the div horizontally
          }}
          className="flex justify-center items-center flex-col w-full bg-purple-500 rounded-3xl mx-auto md:h-56 lg:w-1/2 lg:h-72"
        >
          <h1 className="text-3xl font-bold text-center p-20 lg:pt-28 lg:pb-28 text-white md:text-4xl">
            Blog
          </h1>
        </div>
      </div>

      {Object.values(records.items).map((item) => {
        console.log(
          `http:eous.pockethost.io/api/files/f00bupxnz6hpf9h/${item.id}/${item.image}?token=`
        );
        return (
          <Link href={`/blog/${item.id}`} aria-label="blog post ">
            <CardBlog
              title={item.title}
              text={item.description}
              id={item.id}
              img={item.image}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
