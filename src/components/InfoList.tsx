import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  detail: string;
  link?: string;
};

const InfoList = ({ icon, title, detail, link }: Props) => {
  return (
    <div className="row items-center gap-4">
      <div className="row justify-center items-center w-[48px] h-[48px] text-xl bg-lime-500 rounded-full">
        {icon}
      </div>
      <div className="relative text-sm col justify-center flex-1 px-4 py-1 border-l-2 border-lime-500 h-full before:content-[''] before:absolute before:w-2 before:h-2 before:bg-lime-500 before:top-1/2 before:left-[-1px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 bg-gradient-to-r from-lime-800 to-transparent">
        <div className="font-semibold">{title}</div>
        {link ? (
          <a href={link}>
            <div
              className={`text-white font-thin ${
                link ? "hover:underline active:text-opacity-50" : ""
              }`}
            >
              {detail}
            </div>
          </a>
        ) : (
          <div className="text-white font-thin">{detail}</div>
        )}
      </div>
    </div>
  );
};

export default InfoList;
