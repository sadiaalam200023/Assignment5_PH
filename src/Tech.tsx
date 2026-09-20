
import { use } from "react";
import type { Itech } from "./techtype";
import Techavail from "./TechAvail";


interface TechProp {
    techPromise: Promise<Itech[]>;
}

const Tech = ({ techPromise }: TechProp) => {

    const tech = use(techPromise);

    return (
        <div>
           <h2 className="px-10 mb-2"><span className="text-black font-bold text-3xl">Explore </span><span className="font-bold text-3xl text-red-500">Technologies</span></h2>
           <p className="px-10">Pick one technology per stack to build your ideal stack</p>
           <Techavail tech = {tech}/>
        </div>
    );
};

export default Tech;
