export default function Card(props) {
  return (
    <div
      className={
        "text-center p-9 shadow-md rounded-lg bg-black w-full md:w-4/5 border-1 flex flex-col items-center"
      }
      style={{
        border: `1px solid ${props.animationColor}`,
      }}
    >
      {props.children}
      <h1 className="text-white" style={{ margin: "1rem", fontSize: "2rem" }}>
        {props.title}
      </h1>
      <p className="text-white">{props.text}</p>
    </div>
  );
}
