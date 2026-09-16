
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
           <Techavail tech = {tech}/>
        </div>
    );
};

export default Tech;
