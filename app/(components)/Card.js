export default function Card(props) {
  return (
    <div
      className={
        "text-center p-9 shadow-md rounded-lg bg-black w-full md:w-4/5 border-1 "
      }
      style={{ border: `1px solid ${props.animationColor}` }} // Add this line to display the border
    >
      {props.children}
      <h1 className="text-white">{props.title}</h1>
      <p className="text-white">{props.text}</p>
    </div>
  );
}
