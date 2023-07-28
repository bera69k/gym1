
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <div className=" h-screen grid-cols-2 font-oswald flex max-sm::grid-rows-2">
        <div className="flex md:grid-rows-2">
          <div className="mt-32 ml-64 md:absolute">
            <img src={hero} className="h-screen object-cover md:h-1/3"/>
          </div>
          <div className=" w-1/3 mt-60 ml-40">
            <h1 className="text-6xl text-left uppercase">TRAIN WITH <span className="text-yellow-500">US</span></h1>
            <p className="mt-4 ml-3  uppercase">
                Professionals in their own area of expretise ready to teach you how to be one of the best.
            </p>
            <button className="relative flex items border border-black text-black px-6 justify-center  py-3 rounded-xl ml-60 mt-20 hover:text-white items-center hover:bg-black  animate-slideLeft">
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
