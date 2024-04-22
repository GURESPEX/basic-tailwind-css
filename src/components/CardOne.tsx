import logoAlive from "@assets/schrodingers-cat-alive.svg";
import Card from "@components/Card";
import CardImage from "./CardImage";

const CardOne = () => {
  return (
    <Card>
      <CardImage />
      <div className="col p-12 gap-12 flex-1 z-50 h-full">
        <div className="col gap-4 justify-center items-center h-full">
          <div className="row justify-center items-center lg:col lg:items-center gap-2">
            <img className="w-1/5 lg:w-1/2" src={logoAlive} alt="Logo" />
            <div className="col gap-0 lg:gap-2 lg:items-center">
              <h1 className="row text-white font-bold text-4xl lg:text-5xl uppercase italic">
                <div>Kitty</div>
                <div className="text-lime-500">678</div>
              </h1>
              <p className="text-lime-500 uppercase text-xs text-opacity-50 ">
                Natthanan Thongchomphu
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <button className="px-4 py-1 text-black bg-lime-500 rounded-full">
            yourwebsite.com
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardOne;
