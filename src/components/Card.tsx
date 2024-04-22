import logoAlive from "@assets/schrodingers-cat-alive.svg";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div
      style={{ filter: "drop-shadow(0 0 32px #000)" }}
      className="relative col lg:row w-[432px] h-[768px] lg:w-[768px] lg:h-[432px] aspect-[9/16] lg:aspect-[16/9] bg-gradient-to-t from-black to-lime-900 rounded-3xl border border-lime-800 overflow-hidden"
    >
      <img
        className="absolute w-full top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 opacity-10"
        src={logoAlive}
        alt="Image"
      />
      {children}
    </div>
  );
};

export default Card;
