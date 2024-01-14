const PostPage = async ({ params }) => {
  async function getData() {
    const records = await fetch(
      `http://eous.pockethost.io/api/collections/blog_posts/records/${params.id}`,
      { next: { revalidate: 1 } }
    );

    return records.json();
  }
  const data = await getData();
  console.log(data);
  const description = { __html: `${replaceWithbr(data.content)}` };
  function replaceWithbr(str) {
    return str.replace(/\n/g, "<br />");
  }

  return (
    <div className="m-6  lg:m-28">
      <div className="flex-col lg:flex-row flex items-center">
        <img
          src={`https://eous.pockethost.io/api/files/f00bupxnz6hpf9h/${params.id}/${data.image}?token=`}
          className="rounded-lg mb-6 lg:mb-0"
          style={{ height: "50vh" }}
          alt="blog"
        />
        <div
          style={{
            margin: "0",
          }}
        >
          <h1 className=" text:3xl md:text-5xl text-center md:mx-auto">
            {data.title}
          </h1>
          <p className="text-md  md:text-lg md:text-center m-6 md:m-3 text-justify">
            {data.description}
          </p>
          <p className="text-md md:text-lg md:text-center m-6 md:my-3 text-justify">
            Created: {data.created.slice(0, 10)}
          </p>
        </div>
      </div>
      <div
        className="md:text-3xl md:p-6 md:mt-6 md:border-t-2 border-red-500"
        dangerouslySetInnerHTML={description}
      />
    </div>
  );
};

export default PostPage;
