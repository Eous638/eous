export default function Card(props) {
  return (
    <div
      className={
        "text-center w-full p-9 h-full shadow-md rounded-lg bg-black md:w-4/5 border-1 flex flex-col items-center break-words"
      }
      style={{
        border: `1px solid ${props.animationColor}`,
      }}
    >
      {props.children}
      <h1
        className="text-white m-4 text-lg break-words md:text-2xl"
        style={{ wordWrap: "break-word" }}
      >
        {props.title}
      </h1>
      <p className="text-white">{props.text}</p>
    </div>
  );
}
