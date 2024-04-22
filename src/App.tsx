import CardOne from "@components/CardOne";
import CardTwo from "@components/CardTwo";

function App() {
  return (
    <div className="w-screen h-screen col items-center bg-gradient-to-b from-black to-lime-950 bg-fixed overflow-auto">
      <div className="col container row w-full max-w-screen-lg">
        <div className="row lg:col items-center gap-16 p-16">
          <CardOne />
          <CardTwo />
        </div>
      </div>
    </div>
  );
}

export default App;
