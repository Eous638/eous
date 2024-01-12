import React from "react";
import Card from "./Card";
import {
  IconDevices,
  IconBolt,
  IconCubeSend,
  IconBinaryTree,
} from "@tabler/icons-react";

function NaseUsluge(props) {
  return (
    <div className="bg-black border-t-1 border-black flex flex-col justify-center items-center h-screen w-full overflow-hidden">
      <h1 className="mt-0 text-white mb-16 text-3xl">Zašto EOUS?</h1>
      <div className=" gap-4 p-4 md:w-4/5 h-3/5 grid grid-cols-2 md:gap-8 justify-center mx-auto w-full">
        <Card title="BRZO" text="Tekst" animationColor={props.animationColor}>
          <IconBolt size={props.iconSize} strokeWidth={2} color={"#5005FF"} />
        </Card>
        <Card
          title="CROSS-PLATFORM"
          text="Tekst"
          animationColor={props.animationColor}
        >
          <IconDevices
            size={props.iconSize}
            strokeWidth={2}
            color={"#5005FF"}
          />
        </Card>
        <Card title="EDGE" text="Tekst" animationColor={props.animationColor}>
          <IconCubeSend
            size={props.iconSize}
            strokeWidth={2}
            color={"#5005FF"}
          />
        </Card>
        <Card
          title="DE-CENTRALIZOVANO"
          text="Tekst"
          animationColor={props.animationColor}
        >
          <IconBinaryTree
            size={props.iconSize}
            strokeWidth={2}
            color={"#5005FF"}
          />
        </Card>
      </div>
    </div>
  );
}

export default NaseUsluge;
