import catImage from "@assets/cute-cat.png";
const CardImage = () => {
  return (
    <div
      style={{ filter: "drop-shadow(0 0 64px rgba(132, 204, 22, 0.5))" }}
      className="relative col justify-center items-center p-12 flex-1 overflow-hidden"
    >
      <div className="absolute row justify-center items-center w-full h-full">
        <div className="w-full lg:w-[96px] h-[96px] lg:h-full bg-lime-500" />
      </div>
      <div className="z-10 h-full aspect-square bg-lime-500 rounded-full overflow-hidden ring-8 ring-lime-500 ring-opacity-10 p-2">
        <div className="bg-lime-900 rounded-full p-2 overflow-hidden">
          <img
            className="aspect-square rounded-full object-cover"
            src={catImage}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
