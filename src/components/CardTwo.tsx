import Card from "@components/Card";
import CardImage from "./CardImage";
import InfoList from "./InfoList";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const CardTwo = () => {
  const infoList = [
    {
      icon: <FaPhone />,
      title: "Phone",
      detail: "+6695 647 4808",
    },
    {
      icon: <IoMdMail />,
      title: "Email",
      detail: "natthanan.th@kkumail.com",
      link: "mailto:natthanan.th@kkumail.com",
    },
    {
      icon: <FaGlobe />,
      title: "Facebook",
      detail: "Natthanan Thongchomphu",
      link: "https://www.facebook.com/natthanan.thongchomphu/",
    },
    {
      icon: <IoMdPin />,
      title: "Location",
      detail: "Khon Kean University",
    },
  ];

  return (
    <Card>
      <div className="col p-12 gap-8 flex-1 z-50 h-full">
        <div className="col">
          <h1 className="row gap-2 text-3xl">
            <div className="text-lime-500 font-bold">Jay</div>
            <div className="text-white">Natthanan</div>
          </h1>
          <p className="text-xl text-white font-thin">Front-End Developer</p>
        </div>
        <div className="col gap-4">
          {infoList.map((info, index) => (
            <InfoList key={index} {...info} />
          ))}
        </div>
      </div>
      <CardImage />
    </Card>
  );
};

export default CardTwo;
