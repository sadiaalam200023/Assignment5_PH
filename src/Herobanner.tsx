
import Hero from "../assets/banner-stack.png";

const Herobanner = () => {
  return (
    <div className="min-h-[400px] bg-white flex justify-center items-center px-10">
      <div className="flex gap-8 items-center">
        
        <div>
            <div className="mb-4">
          <h2 className="font-bold text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          </div>
        
          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p> 
<div className="mt-3 flex gap-3">
          <button>Explore Technologies</button>
          <button>Learn more</button> </div>
        </div>

        <div>
          <img src={Hero} alt="Development Stack" />
        </div>

      </div>
    </div>
  );
};

export default Herobanner;