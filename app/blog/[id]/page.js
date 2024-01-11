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
    <div style={{ margin: "7rem" }}>
      <div
        style={{ flexDirection: "row", display: "flex", alignItems: "center" }}
      >
        <img
          src={`https://eous.pockethost.io/api/files/f00bupxnz6hpf9h/${params.id}/${data.image}?token=`}
          style={{ borderRadius: "7px", height: "50vh" }}
        />
        <div
          style={{
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: 50, textAlign: "center", margin: "0 auto" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: 20, textAlign: "center", margin: "3 3" }}>
            {data.description}
          </p>
          <p style={{ fontSize: 20, textAlign: "center", margin: "3 3" }}>
            Created: {data.created.slice(0, 10)}
          </p>
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          padding: 25,
          marginTop: 25,
          borderTop: 1,
          borderColor: "red",
          borderStyle: "solid",
        }}
        dangerouslySetInnerHTML={description}
      />
      ;
    </div>
  );
};

export default PostPage;
